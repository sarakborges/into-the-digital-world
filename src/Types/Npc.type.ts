export type NpcType = {
  id: string
  title?: string
  name: string
  description?: string
  fullImage: string
  portrait: string
  category?: 'appmon' | 'digimon' | 'general'
  isVisible?: boolean
}
