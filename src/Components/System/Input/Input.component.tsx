import type { InputHTMLAttributes } from 'react'

import './Input.style.scss'

type InputType = { label?: string } & InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputType> = ({
  name,
  className,
  label,
  ...rest
}) => {
  const InputComponent = () => (
    <input id={name} name={name} className={`input ${className}`} {...rest} />
  )

  return (
    <>
      {!label && <InputComponent />}

      {!!label && (
        <div className="input-wrapper">
          <label htmlFor={name}>{label}</label>

          <InputComponent />
        </div>
      )}
    </>
  )
}
