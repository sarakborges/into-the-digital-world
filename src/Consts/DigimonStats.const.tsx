import {
  TbBolt,
  TbBrain,
  TbCircuitResistor,
  TbHeart,
  TbShield,
  TbSparkles,
  TbSword
} from 'react-icons/tb'

export const DigimonStats = {
  hp: {
    id: 'hp',
    name: 'Health Points',
    abbreviation: 'hp',
    icon: <TbHeart />
  },

  sp: {
    id: 'sp',
    name: 'Skill Points',
    abbreviation: 'sp',
    icon: <TbSparkles />
  },

  atk: {
    id: 'atk',
    name: 'Attack',
    abbreviation: 'atk',
    icon: <TbSword />
  },

  def: {
    id: 'def',
    name: 'Defense',
    abbreviation: 'def',
    icon: <TbShield />
  },

  int: {
    id: 'int',
    name: 'Intelligence',
    abbreviation: 'int',
    icon: <TbBrain />
  },

  res: {
    id: 'res',
    name: 'Resistance',
    abbreviation: 'res',
    icon: <TbCircuitResistor />
  },

  spd: {
    id: 'spd',
    name: 'Speed',
    abbreviation: 'spd',
    icon: <TbBolt />
  }
}
