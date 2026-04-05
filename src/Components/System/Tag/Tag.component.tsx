import './Tag.style.scss'

export const Tag = ({ children }: { children: string | React.ReactNode }) => {
  return <span className={`tag`}>{children}</span>
}
