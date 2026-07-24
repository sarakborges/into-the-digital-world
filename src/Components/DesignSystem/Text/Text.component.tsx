import type { ReactNode } from 'react'

import { splitTextIntoParagraphs } from '@/Helpers/Components/splitTextIntoParagraphs.helper'

import '@/Components/DesignSystem/Text/Text.style.scss'

export const Text = ({
  as,
  children
}: {
  as?: 'p' | 'h1' | 'h2' | 'span'
  children: ReactNode
}) => {
  const Component = as || 'span'

  if (as === 'p') {
    return (
      <>
        {splitTextIntoParagraphs(children).reduce(
          (acc, cur) => (
            <>
              {acc}
              <p className="text">{cur}</p>
            </>
          ),
          <></>
        )}
      </>
    )
  }

  return <Component className="text">{children}</Component>
}
