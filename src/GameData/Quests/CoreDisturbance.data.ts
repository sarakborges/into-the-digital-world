import type { QuestType } from '@/Types/Quest.type'

export const CORE_DISTURBANCE: QuestType = {
  id: `CORE_DISTURBANCE`,
  name: `Core disturbance`,
  description: `A wild Pagumon is causing distress around Root Domain! That means we can't travel safely anywhere.\n\nI need you to go to Root Core, and defeat that rascal. So everyone - you included - can travel once more. Come back once you done so. And don't worry by proving that the deed is done. I can read the data inside your Digivice - hehe.`,
  completionText: `Thank you, traveler! We hope that now everyone can travel normally.`,
  ongoingText: `I see you still haven't dealt with the problem. Not trying to be too pushy, but can you hurry? We depend on you.`,
  objectives: [
    {
      id: 'ROOT_CORE_PAGUMON_KILL',
      type: 'ENEMY_KILLS',
      text: `Pagumon defeated at Root Core`,
      enemyId: '',
      quantity: 1
    }
  ]
}
