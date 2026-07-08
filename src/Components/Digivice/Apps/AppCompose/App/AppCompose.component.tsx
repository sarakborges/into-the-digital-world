import { BiMinus, BiPlus } from 'react-icons/bi'

import { AllResearches } from '@/GameData/Researches'
import { AllItems } from '@/GameData/Items'

import { updateOptionalItem } from '@/Helpers/Systems/Compose'
import { getTranslation } from '@/Helpers/Language'

import { useCompositionStore } from '@/Stores/Composition.store'
import { useProfileStore } from '@/Stores/Profile.store'

import { Portrait } from '@/Components/DesignSystem/Portrait'
import { Button } from '@/Components/DesignSystem/Button'
import { Text } from '@/Components/DesignSystem/Text'

import { ItemsList } from '@/Components/Global/ItemsList'
import { ItemCore } from '@/Components/Global/ItemCore'

import './AppCompose.style.scss'

export const AppCompose = () => {
  const { profile } = useProfileStore((state) => state)
  const { composition } = useCompositionStore((state) => state)

  if (!composition?.baseDigimon || !profile) {
    return
  }

  const baseDigimon = composition.baseDigimon

  const requiredItems = AllResearches[baseDigimon.id].requiredItems
  const optionalItems = AllResearches[baseDigimon.id].optionalItems

  return (
    <div className="compose" key={`composition-${baseDigimon.name}`}>
      <header>
        <Text>
          {getTranslation('COMPOSE_002_DIGIMON_TITLE', {
            '[DIGIMON]': baseDigimon.name
          })}
        </Text>

        <Portrait
          alt={baseDigimon.name}
          src={`/${baseDigimon.portrait}.webp`}
        />
      </header>

      <main className="compose-items">
        {!!Object.keys(requiredItems || {}).length && (
          <div>
            <ItemsList
              list={requiredItems}
              title={getTranslation('COMPOSE_002_REQUIRED_ITEMS')}
              displayPlayerResouce
            />
          </div>
        )}

        {!!Object.keys(optionalItems ?? {}).length && (
          <div>
            <Text>{getTranslation('COMPOSE_002_OPTIONAL_ITEMS')}</Text>

            <div className="fill-bar">
              <div className="bar">
                <div style={{ width: `${composition.completed || 0}%` }} />
              </div>

              <Text>{composition.completed || 0}%</Text>
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
                        {getTranslation('COMPOSE_002_OPTIONAL_ITEMS_AMOUNT', {
                          '[AMOUNT]': String(profile.items[item] || 0),
                          '[WEIGHT]': String(optionalItems?.[item] ?? 0)
                        })}
                      </Text>
                    </div>
                  </aside>

                  <main className="amount">
                    <Button
                      onClick={() => updateOptionalItem({ item, amount: -1 })}
                      disabled={(composition.completed || 0) <= 0}
                    >
                      <BiMinus />
                    </Button>

                    <Text>{composition.optionalItems?.[item] || 0}</Text>

                    <Button
                      onClick={() => updateOptionalItem({ item, amount: 1 })}
                      disabled={
                        (composition.completed || 0) >= 100 ||
                        (profile.items[item] || 0) <
                          (composition.optionalItems?.[item] || 0) + 1
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
