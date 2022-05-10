import React from 'react'

import { Text } from '../components/Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Text,
  title: 'Text',
}

export const DefaultTextBody = () => <Text>Default Body</Text>
export const SmallTextBody = () => <Text size='sm'>Small body</Text>
