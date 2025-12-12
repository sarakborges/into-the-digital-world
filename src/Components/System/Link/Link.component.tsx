import { Link as RouterLink } from 'react-router'

import './Link.style.scss'

export const Link = ({
  to,
  children
}: {
  to: string
  children: string | React.ReactNode
}) => {
  return (
    <RouterLink to={to} className="link">
      {children}
    </RouterLink>
  )
}
