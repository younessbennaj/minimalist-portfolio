import React from 'react'
import styled, { css } from 'styled-components'

type TextAlignType = 'left' | 'right' | 'center'

interface HeadingProps {
  align?: TextAlignType
  as: 'h1' | 'h2' | 'h3'
  children: string | JSX.Element
  size: 'sm' | 'md' | 'lg'
}

export const Heading: React.FC<HeadingProps> = ({
  align = 'left',
  as,
  children,
  size,
}) => {
  // Get dynamic tag name through 'as' prop passing to the component
  const HeadingTag = as as keyof JSX.IntrinsicElements

  // Define font styles by heading size
  const fontStyles = {
    lg: css`
      font-weight: 700;
      font-size: 50px;
      line-height: 50px;
    `,
    md: css`
      font-weight: 700;
      font-size: 40px;
      line-height: 42px;
    `,
    sm: css`
      font-weight: 400;
      font-size: 32px;
      line-height: 36px;
    `,
  }

  // Inject css into Heading Component
  const StyledHeadingTag = styled(HeadingTag)<{
    align: TextAlignType
    size: string
  }>`
    ${({ size }) => fontStyles[size as keyof typeof fontStyles]}
    text-align: ${({ align }) => align};
  `

  return (
    <StyledHeadingTag align={align} size={size}>
      {children}
    </StyledHeadingTag>
  )
}

interface TextProps {
  children: string | JSX.Element
  size?: 'sm' | 'md'
}

const TextStyled = styled.p<{ size: string }>`
  font-weight: 400;
  font-size: ${({ size }) => (size === 'sm' ? '15px' : '16px')};
  line-height: 30px;
`

export const Text: React.FC<TextProps> = ({ children, size = 'md' }) => {
  return <TextStyled size={size}>{children}</TextStyled>
}
