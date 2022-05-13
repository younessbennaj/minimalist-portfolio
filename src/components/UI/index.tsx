import styled from 'styled-components'

import { spacing } from '../../styles/utils'

export const Box = styled.div`
  ${spacing}
`

export const Flex = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
