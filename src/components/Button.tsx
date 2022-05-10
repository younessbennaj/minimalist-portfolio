import React from 'react'

interface ButtonProps {
  children: string | JSX.Element
  href?: string
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href = '/',
  onClick,
}) => {
  return (
    <button onClick={onClick}>
      <a href={href}>{children}</a>
    </button>
  )
}
