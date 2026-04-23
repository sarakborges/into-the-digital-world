import './Text.style.scss'

export const Text = ({
  as,
  children
}: {
  as?: 'p' | 'h1' | 'h2' | 'span'
  children
}) => {
  const Component = as || 'span'

  return <Component className="text">{children}</Component>
}
