import { Typography } from '@/Components/System/Typography'

import './ResourceBar.style.scss'

export const ResourceBar = ({
  type,
  maxValue,
  currentValue
}: {
  type: 'hp' | 'sp' | 'exp'
  maxValue: number
  currentValue: number
}) => {
  const percentage = Math.floor(((currentValue || 0) / maxValue) * 100)

  return (
    <section className="resource-bar">
      <div className={`resource-bar-background ${type}`}>
        <div
          className="bar"
          style={{
            width: `${
              percentage > 100 ? 100 : percentage < 0 ? 0 : percentage
            }%`
          }}
        ></div>

        <Typography as="span">
          <>{currentValue}</>
          <> / </>
          <>{maxValue}</>
        </Typography>
      </div>
    </section>
  )
}
