import { css } from 'styled-components'

type SpacingType = {
  p?: number
  spacing?: number
}

export const spacing = css<SpacingType>`
  margin-bottom: ${({ spacing = 0 }) => `${spacing}px`};
  padding: ${({ p = 0 }) => `${p}px`};
`
