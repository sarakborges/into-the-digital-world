export const DigimonStages = {
  inTraining: {
    id: `inTraining`,
    value: `In training`
  },

  rookie: {
    id: `rookie`,
    value: `Rookie`
  },

  champion: {
    id: `champion`,
    value: `Champion`
  },

  ultimate: {
    id: `ultimate`,
    value: `Ultimate`
  },

  mega: {
    id: `mega`,
    value: `Mega`
  }
}

export type DigimonStages = (typeof DigimonStages)[keyof typeof DigimonStages]
