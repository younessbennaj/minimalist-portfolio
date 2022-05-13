import React from 'react'
import styled, { css } from 'styled-components'

import { spacing as spacingUtils, StyledUtilsType } from '../styles/utils'

type TextAlignType = 'left' | 'right' | 'center'

type HeadingStyledType = StyledUtilsType & {
  align: TextAlignType
  size: string
}

type TextStyledType = StyledUtilsType & { size: string }

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

const StyledHeadingTag = styled.div<HeadingStyledType>`
  margin: 0px;
  padding: 0px;
  ${spacingUtils}
  ${({ size }) => fontStyles[size as keyof typeof fontStyles]}
  text-align: ${({ align }) => align};
`

interface HeadingProps {
  align?: TextAlignType
  as: 'h1' | 'h2' | 'h3'
  children: string | JSX.Element
  size: 'sm' | 'md' | 'lg'
  spacing?: number
}

export const Heading: React.FC<HeadingProps> = ({
  align = 'left',
  as,
  children,
  size,
  spacing = 0,
}) => {
  return (
    <StyledHeadingTag align={align} as={as} size={size} spacing={spacing}>
      {children}
    </StyledHeadingTag>
  )
}

interface TextProps {
  children: string | JSX.Element
  size?: 'sm' | 'md'
  spacing?: number
}

const TextStyled = styled.p<TextStyledType>`
  margin: 0px;
  padding: 0px;
  ${spacingUtils}
  font-weight: 400;
  font-size: ${({ size }) => (size === 'sm' ? '15px' : '16px')};
  line-height: 30px;
`

export const Text: React.FC<TextProps> = ({
  children,
  size = 'md',
  spacing = 0,
}) => {
  return (
    <TextStyled size={size} spacing={spacing}>
      {children}
    </TextStyled>
  )
}
