import React from 'react'
import styled from 'styled-components'

interface HeadingProps {
  children: string | JSX.Element
  size: string
}

interface TextProps {
  children: string | JSX.Element
  size?: string
}

const TextStyled = styled.p`
  font-size: 16px;
`

export const Heading: React.FC<HeadingProps> = ({ children, size }) => {
  switch (size) {
    case 'small':
      return <h3>{children}</h3>
      break
    case 'medium':
      return <h2>{children}</h2>
      break
    case 'large':
      return <h1>{children}</h1>
      break
    default:
      return <h1>{children}</h1>
  }
}

export const Text: React.FC<TextProps> = ({ children, size = 'default' }) => {
  return <TextStyled>{children}</TextStyled>
}
