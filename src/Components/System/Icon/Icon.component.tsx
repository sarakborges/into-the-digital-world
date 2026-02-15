import './Icon.style.scss'

export const Icon = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <picture className="icon">
      <img src={src} alt={alt} />
    </picture>
  )
}
