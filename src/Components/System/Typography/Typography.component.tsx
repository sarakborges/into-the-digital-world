import './Typography.style.scss'

export const Typography = ({
  as,
  children
}: {
  as?: 'p' | 'h1' | 'h2' | 'span'
  children
}) => {
  const Component = as || 'p'

  return <Component className="typography">{children}</Component>
}
