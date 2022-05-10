import React from 'react'
import styled from 'styled-components'

interface ButtonProps {
  children: string | JSX.Element
  href?: string
  onClick?: () => void
}

const ButtonStyled = styled.button`
  background-color: #203a4c;
  border: none;
  padding: 17px 48px;

  a {
    color: #ffffff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
  }
`

export const Button: React.FC<ButtonProps> = ({
  children,
  href = '/',
  onClick,
}) => {
  return (
    <ButtonStyled onClick={onClick}>
      <a href={href}>{children}</a>
    </ButtonStyled>
  )
}
