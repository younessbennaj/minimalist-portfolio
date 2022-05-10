import React from 'react'

import { Heading } from '../components/Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Heading,
  title: 'Heading',
}

export const LargeHeading = () => <Heading size='large'>Large heading</Heading>
export const MediumHeading = () => (
  <Heading size='medium'>Medium heading</Heading>
)
export const SmallHeading = () => <Heading size='small'>Medium heading</Heading>

// export const DefaultTextBody = () => <Text>Default Body</Text>
// export const SmallTextBody = () => <Heading size='small'>Small body</Heading>
