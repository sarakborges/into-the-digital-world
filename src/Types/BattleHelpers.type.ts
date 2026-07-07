import type { BattleType } from '@/Types/Battle.type'

export type BattlePartyGroupType = {
  party: 'allies' | 'enemies'
  title: string
  list: BattleType['turnOrder']
}
