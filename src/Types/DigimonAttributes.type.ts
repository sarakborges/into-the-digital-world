export const DigimonAttributes = {
  vaccine: {
    id: `vaccine`,
    value: `Vaccine`
  },

  data: {
    id: `data`,
    value: `Data`
  },

  virus: {
    id: `virus`,
    value: `Virus`
  },

  unknown: {
    id: `unknown`,
    value: `Unknown`
  },

  noattribute: {
    id: `noattribute`,
    value: `No Attribute`
  }
}

export type DigimonAttributes =
  (typeof DigimonAttributes)[keyof typeof DigimonAttributes]
