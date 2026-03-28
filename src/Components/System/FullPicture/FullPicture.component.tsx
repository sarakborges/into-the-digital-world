import './FullPicture.style.scss'

export const FullPicture = ({ src, alt }: { src?: string; alt: string }) => {
  const classes = ['full-picture']

  return (
    <div className={classes.join(' ')}>
      {!!src && (
        <picture>
          <img src={src} alt={alt} />
        </picture>
      )}
    </div>
  )
}
