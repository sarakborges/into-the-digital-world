import './Tag.style.scss'

export const Tag = ({ children, className }: { children; className? }) => {
  return <span className={`tag ${className}`}>{children}</span>
}
