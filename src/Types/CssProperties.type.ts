import type { CSSProperties } from 'react'

export type CssPropertiesWithVariables = CSSProperties & {
  [variable: `--${string}`]: string | number | undefined
}
