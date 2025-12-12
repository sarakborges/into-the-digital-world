import './Portrait.style.scss'

export const Portrait = ({
  src,
  alt,
  placeholder,
  sm
}: {
  src?: string
  alt: string
  placeholder?: string
  sm?: boolean
}) => {
  const classes = ['portrait']

  if (!!sm) {
    classes.push('sm')
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
