export type NpcType = {
  id: string
  title?: string
  name: string
  description: string
  portrait: string
  category?: 'appmon' | 'digimon' | 'general'
}
