import './Portrait.style.scss'

export const Portrait = ({
  src,
  alt,
  placeholder,
  sm,
  transparent
}: {
  src?: string
  alt: string
  placeholder?: string
  sm?: boolean
  transparent?: boolean
}) => {
  const classes = ['portrait']

  if (!!sm) {
    classes.push('sm')
  }

  if (!!transparent) {
    classes.push('transparent')
  }

  return (
    <div className={classes.join(' ')}>
      {!!src && (
        <picture>
          <img src={src} alt={alt} />
        </picture>
      )}

      {!src && <div title={placeholder || `?`}>{placeholder || `?`}</div>}
    </div>
  )
}
