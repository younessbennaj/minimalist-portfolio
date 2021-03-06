import React from 'react'
import styled, { css } from 'styled-components'

import { spacing, StyledUtilsType } from '../styles/utils'

// Types

type VariantType = 'primary' | 'secondary'

// Need to inherit from StyledUtilsType to receive style utils like 'spacing'
type ButtonStyledType = StyledUtilsType & {
  disabled: boolean
  variant: VariantType
}
interface ButtonProps {
  children: string | JSX.Element
  disabled?: boolean
  href?: string
  onClick?: () => void
  spacing?: number
  variant?: VariantType
}

// Styled Components

const CustomButtonStyled = styled.button<ButtonStyledType>`
  ${spacing}
  background-color: ${({ variant }) =>
    variant === 'primary' ? '#203A4C' : 'transparent'};
  border: ${({ variant }) =>
    variant === 'primary' ? '1px solid #203A4C' : '1px solid #33323D'};
  padding: 16px 32px;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #eaeaeb;
      border: 1px solid #eaeaeb;
      color: #33323d;
      pointer-events: none;
      cursor: not-allowed;
      a {
        color: #33323d !important;
      }
    `}

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

    &::disabled {
      cursor: not-allowed;
      pointer-events: all !important;
    }
  }
`

// Component

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  href,
  onClick,
  spacing = 0,
  // Primary button by default
  variant = 'primary',
}) => {
  // Conditionnal attribute href
  const attributes = href ? { href } : {}
  return (
    <CustomButtonStyled
      disabled={disabled}
      onClick={onClick}
      spacing={spacing}
      variant={variant}
    >
      <a {...attributes}>{children}</a>
    </CustomButtonStyled>
  )
}
