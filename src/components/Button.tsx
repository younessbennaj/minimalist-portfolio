import React from 'react'
import styled from 'styled-components'

type VariantType = 'primary' | 'secondary'
interface ButtonProps {
  children: string | JSX.Element
  disabled?: boolean
  href?: string
  onClick?: () => void
  variant?: VariantType
}

const ButtonStyled = styled.button<{ disabled: boolean; variant: VariantType }>`
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#203A4C' : 'transparent'};
  border: ${({ variant }) =>
    variant === 'primary' ? '1px solid #203A4C' : '1px solid #33323D'};
  padding: 16px 32px;
  cursor: pointer;

  &:hover {
    background-color: ${({ variant }) =>
      variant === 'primary' ? '#5FB4A2;' : '#33323D;'};
    border: ${({ variant }) =>
      variant === 'primary' ? '1px solid #5FB4A2;' : '1px solid #33323D;'};

    a {
      color: #ffffff;
    }
  }

  a {
    // Css to a wider <a></a> tag clickable area
    display: inline-block;
    position: relative;
    z-index: 1;
    padding: 16px 32px;
    margin: -16px -32px;
    color: ${({ variant }) => (variant === 'primary' ? '#FFFFFF' : '#33323D')};
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
  disabled = false,
  href,
  onClick,
  // Primary button by default
  variant = 'primary',
}) => {
  // Conditionnal attribute href
  const attributes = href ? { href } : {}
  return (
    <ButtonStyled disabled={disabled} onClick={onClick} variant={variant}>
      <a {...attributes}>{children}</a>
    </ButtonStyled>
  )
}
