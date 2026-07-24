import { z } from 'zod'

import type { BattleType } from '@/Types/Battle.type'
import type { DungeonStoreType } from '@/Types/Dungeon.type'

import { findDungeon } from '@/GameData/Registries/Dungeon.registry'

const AttributeIdSchema = z.enum(['va', 'vi', 'da', 'na'])
const FamilyIdSchema = z.enum([
  'vb',
  'dr',
  'nsp',
  'ds',
  'nso',
  'jt',
  'me',
  'wg',
  'da'
])
const ConditionIdSchema = z.enum([
  'shaken',
  'poisoned',
  'stunned',
  'irritated',
  'distracted'
])

const EquipmentSchema = z.record(
  z.string(),
  z
    .object({
      equipmentId: z.string().optional()
    })
    .strict()
)

const LootTableEntrySchema = z
  .object({
    itemId: z.string(),
    dropChance: z.number(),
    amount: z.number()
  })
  .strict()

const PartyDigimonSessionSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    fullImage: z.string(),
    portrait: z.string(),
    equipmentsSlots: z.number().int().nonnegative().optional(),
    attribute: AttributeIdSchema,
    families: z.partialRecord(FamilyIdSchema, z.null()),
    attacks: z.record(z.string(), z.null()),
    stats: z
      .object({
        vit: z.number(),
        pow: z.number(),
        res: z.number(),
        tec: z.number(),
        agi: z.number()
      })
      .strict(),
    party: z.enum(['allies', 'enemies']),
    index: z.number().int().nonnegative(),
    equipments: EquipmentSchema,
    conditions: z
      .partialRecord(ConditionIdSchema, z.number().int().nonnegative())
      .optional(),
    digimonId: z.string().optional(),
    spawnChance: z.number().optional(),
    lootTable: z.array(LootTableEntrySchema).optional(),
    initiative: z.number().int().nonnegative().optional()
  })
  .strict()

const CombatLogEntrySchema = z
  .object({
    index: z.number().int().nonnegative(),
    attacker: z.string(),
    attackerParty: z.enum(['allies', 'enemies']),
    target: z.string(),
    attackName: z.string(),
    effect: ConditionIdSchema.optional(),
    severity: z.number().optional(),
    isTargetDefeated: z.boolean().optional(),
    hasHitLanded: z.boolean()
  })
  .strict()

const BattleSessionValueSchema = z
  .object({
    turnOrder: z.array(PartyDigimonSessionSchema),
    combatLog: z.array(CombatLogEntrySchema),
    loot: z.record(z.string(), z.number()).optional()
  })
  .strict()

export const BattleSessionSchema = z.custom<BattleType>(
  (value) => BattleSessionValueSchema.safeParse(value).success,
  'Invalid battle session.'
)

const DungeonSessionValueSchema = z
  .object({
    dungeonId: z.string(),
    zoneId: z.string(),
    rooms: z.array(z.string()),
    doneRooms: z.array(z.string()),
    party: z.array(PartyDigimonSessionSchema),
    currentRoomsOptions: z.array(z.string())
  })
  .strict()
  .superRefine((dungeonSession, context) => {
    const dungeon = findDungeon({
      dungeonId: dungeonSession.dungeonId,
      zoneId: dungeonSession.zoneId
    })

    if (!dungeon) {
      context.addIssue({
        code: 'custom',
        path: ['dungeonId'],
        message: `Unknown dungeon: ${dungeonSession.zoneId}.${dungeonSession.dungeonId}`
      })
      return
    }

    const roomGroups = [
      ['rooms', dungeonSession.rooms],
      ['doneRooms', dungeonSession.doneRooms],
      ['currentRoomsOptions', dungeonSession.currentRoomsOptions]
    ] as const

    roomGroups.forEach(([groupName, roomIds]) => {
      roomIds.forEach((roomId, roomIndex) => {
        if (!(roomId in dungeon.possibleRooms)) {
          context.addIssue({
            code: 'custom',
            path: [groupName, roomIndex],
            message: `Unknown dungeon room: ${roomId}`
          })
        }
      })
    })
  })

export const DungeonSessionSchema = z.custom<DungeonStoreType>(
  (value) => DungeonSessionValueSchema.safeParse(value).success,
  'Invalid dungeon session.'
)
