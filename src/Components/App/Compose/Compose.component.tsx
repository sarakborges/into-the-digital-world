import { BiMinus, BiPlus } from 'react-icons/bi'

import { AllResearches } from '@/GameData/Researches'
import { AllItems } from '@/GameData/Items'

import { useCompositionStore } from '@/Stores/Composition.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Text } from '@/Components/System/Text'
import { Button } from '@/Components/System/Button'
import { Portrait } from '@/Components/System/Portrait'

import { ItemCore } from '@/Components/App/ItemCore'

import './Compose.style.scss'
import { getDialogs } from '@/Helpers/getDialogs.helper'

export const Compose = () => {
  const { profile } = useProfileStore((state) => state)
  const { composition, setComposition } = useCompositionStore((state) => state)

  if (!composition?.baseDigimon) {
    return
  }

  const baseDigimon = composition.baseDigimon

  const requiredItems = AllResearches[baseDigimon.id].requiredItems
  const optionalItems = AllResearches[baseDigimon.id].optionalItems

  const getCompositionFill = () => {
    return Object.keys(optionalItems ?? {}).reduce((acc, item) => {
      const weight = optionalItems![item]
      return acc + weight * (composition.optionalItems?.[item] || 0)
    }, 0)
  }

  const updateOptionalItem = ({
    item,
    amount
  }: {
    item: string
    amount: -1 | 1
  }) => {
    const compositionFill = composition.completed || 0

    if (
      (amount === -1 && compositionFill <= 0) ||
      (amount === 1 && compositionFill >= 100)
    ) {
      return
    }

    const updatedAmount = (composition.optionalItems?.[item] || 0) + amount

    const totalItems = {}

    for (let item in requiredItems) {
      totalItems[item] = (totalItems[item] || 0) + requiredItems[item]
    }

    for (let item in optionalItems) {
      totalItems[item] = (totalItems[item] || 0) + optionalItems[item]
    }

    totalItems[item] += amount

    setComposition({
      ...composition,
      totalItems,

      completed: getCompositionFill() + (optionalItems?.[item] || 0) * amount,

      optionalItems: {
        ...composition.optionalItems,
        [item]: updatedAmount
      }
    })
  }

  return (
    <div className="compose" key={`composition-${baseDigimon.name}`}>
      <header>
        <Text>
          {getDialogs('COMPOSE_002_DIGIMON_TITLE').replaceAll(
            '[DIGIMON]',
            baseDigimon.name
          )}
        </Text>

        <Portrait
          alt={baseDigimon.name}
          src={`/${baseDigimon.portrait}.webp`}
        />
      </header>

      <main className="compose-items">
        {!!Object.keys(requiredItems || {}).length && (
          <div>
            <Text>{getDialogs('COMPOSE_002_REQUIRED_ITEMS')}</Text>

            <div className="items-list">
              {Object.keys(requiredItems || {}).map((item) => (
                <div
                  key={`composition-${composition}-item-${item}`}
                  className="item"
                >
                  <aside>
                    <ItemCore item={item} />

                    <div className="item-description">
                      <Text>{AllItems[item].name}</Text>

                      <Text>
                        {getDialogs('COMPOSE_002_REQUIRED_ITEMS_AMOUNT')
                          .replaceAll('[AMOUNT]', profile?.items[item] || 0)
                          .replaceAll(
                            '[TOTAL]',
                            AllResearches[composition.baseDigimon.id]
                              .requiredItems?.[item]
                          )}
                      </Text>
                    </div>
                  </aside>

                  <main className="amount">
                    <Text>x{requiredItems?.[item]}</Text>
                  </main>
                </div>
              ))}
            </div>
          </div>
        )}

        {!!Object.keys(optionalItems ?? {}).length && (
          <div>
            <Text>{getDialogs('COMPOSE_002_OPTIONAL_ITEMS')}</Text>

            <div className="fill-bar">
              <div className="bar">
                <div style={{ width: `${composition?.completed || 0}%` }} />
              </div>

              <Text>{composition?.completed || 0}%</Text>
            </div>

            <div className="items-list">
              {Object.keys(optionalItems ?? []).map((item) => (
                <div
                  key={`composition-${composition}-item-${item}`}
                  className="item"
                >
                  <aside>
                    <ItemCore item={item} />

                    <div className="item-description">
                      <Text>{AllItems[item].name}</Text>

                      <Text>
                        {getDialogs('COMPOSE_002_OPTIONAL_ITEMS_AMOUNT')
                          .replaceAll('[AMOUNT]', profile?.items[item] || 0)
                          .replaceAll('[WEIGHT]', optionalItems?.[item])}
                      </Text>
                    </div>
                  </aside>

                  <main className="amount">
                    <Button
                      onClick={() => updateOptionalItem({ item, amount: -1 })}
                      disabled={(composition?.completed || 0) <= 0}
                    >
                      <BiMinus />
                    </Button>

                    <Text>{composition.optionalItems?.[item] || 0}</Text>

                    <Button
                      onClick={() => updateOptionalItem({ item, amount: 1 })}
                      disabled={
                        (composition?.completed || 0) >= 100 ||
                        (profile?.items[item] || 0) <
                          (composition?.totalItems?.[item] || 0) + 1
                      }
                    >
                      <BiPlus />
                    </Button>
                  </main>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
