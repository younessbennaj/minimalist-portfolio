import { css } from 'styled-components'

export type StyledUtilsType = {
  p?: number
  py?: number
  spacing?: number
}

export const spacing = css<StyledUtilsType>`
  margin-bottom: ${({ spacing = 0 }) => `${spacing}px`};
  padding: ${({ p = 0, py = 0 }) => {
    return (p && `${p}px`) || (py && `${py}px 0px`)
  }};
`
