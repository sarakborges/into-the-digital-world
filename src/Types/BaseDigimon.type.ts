export type BaseDigimonType = {
  id: string
  name: string
  description: string
  fullImage: string
  portrait: string

  attribute: 'vaccine' | 'virus' | 'data' | 'noattribute'
  families: Array<string>

  stats: {
    vit: number
    sta: number
    pow: number
    res: number
    tec: number
    agi: number
    ini: number
  }
}
