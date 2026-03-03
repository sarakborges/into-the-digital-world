import './Portrait.style.scss'

export const Portrait = ({
  src,
  alt,
  placeholder,
  size,
  transparent
}: {
  src?: string
  alt: string
  placeholder?: string
  size?: string
  transparent?: boolean
}) => {
  const classes = ['portrait']

  if (!!size) {
    classes.push(size)
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
