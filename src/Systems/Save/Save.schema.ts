import { z } from 'zod'

import type { ProfileType } from '@/Types/Profile.type'

import { MeaningfulChoiceRegistry } from '@/GameData/Registries/MeaningfulChoice.registry'
import type { GameLocation } from '@/GameData/Registries/ZoneManifest.registry'
import { findZoneDefinition } from '@/GameData/Registries/ZoneManifest.registry'

const GameLocationValueSchema = z
  .object({
    zone: z.string().min(1),
    map: z.string().min(1),
    x: z.number().int(),
    y: z.number().int()
  })
  .superRefine(({ zone, map }, context) => {
    const zoneDefinition = findZoneDefinition(zone)

    if (!zoneDefinition) {
      context.addIssue({
        code: 'custom',
        path: ['zone'],
        message: `Unknown zone: ${zone}`
      })
      return
    }

    if (!(map in zoneDefinition.maps)) {
      context.addIssue({
        code: 'custom',
        path: ['map'],
        message: `Unknown map ${map} for zone ${zone}`
      })
    }
  })

export const GameLocationSchema = z.custom<GameLocation>(
  (value) => GameLocationValueSchema.safeParse(value).success,
  'Invalid game location.'
)

const AvatarSchema = z
  .object({
    expression: z.string(),
    skin: z.string(),
    eyes: z.string(),
    hair: z.string(),
    hairColor: z.string(),
    clothes: z.string()
  })
  .strict()

const PartnerDigimonSchema = z
  .object({
    id: z.number().int(),
    name: z.string().optional(),
    baseDigimon: z.string(),
    isFavorite: z.boolean().optional(),
    isStarter: z.boolean().optional(),
    equipments: z.record(
      z.string(),
      z
        .object({
          equipmentId: z.string().optional()
        })
        .strict()
    )
  })
  .strict()

export const ProfileSaveSchema = z
  .object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    lastSave: z.iso.datetime(),
    avatar: AvatarSchema.optional(),
    currency: z.number().optional(),
    currentTitle: z.string(),
    currentScene: z.string().nullable(),
    party: z.array(z.number().int()),
    titles: z.array(z.string()),
    dungeonsFound: z.array(z.string()),
    researchesFound: z.array(z.string()),
    researches: z.array(z.string()),
    quests: z.record(
      z.string(),
      z
        .object({
          objectives: z.record(z.string(), z.union([z.number(), z.boolean()]))
        })
        .strict()
    ),
    items: z.record(z.string(), z.number()),
    currentLocation: GameLocationSchema,
    partnerDigimons: z.record(z.string(), PartnerDigimonSchema),
    npcAcquaintances: z.record(z.string(), z.unknown()),
    meaningfulChoices: z
      .object({
        dorimonMeeting: z
          .enum(MeaningfulChoiceRegistry.dorimonMeeting)
          .optional()
      })
      .strict()
  })
  .strict() satisfies z.ZodType<ProfileType>

export const SavePayloadSchema = z
  .object({
    schemaVersion: z.number().int().nonnegative(),
    slotId: z.string().min(1),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
    profile: ProfileSaveSchema
  })
  .strict()

export const StoredSaveSchema = SavePayloadSchema.extend({
  checksum: z.string().regex(/^[a-f0-9]{64}$/)
})
