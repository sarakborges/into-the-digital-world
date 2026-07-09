import { splitTextIntoParagraphs } from '@/Helpers/Components'

import './Text.style.scss'

export const Text = ({
  as,
  children
}: {
  as?: 'p' | 'h1' | 'h2' | 'span'
  children
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
