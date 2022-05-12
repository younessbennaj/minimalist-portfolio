import React from 'react'

import { Heading } from '../components/Typography'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  component: Heading,
  title: 'Heading',
}

export const LargeHeading = () => (
  <Heading as='h1' size='lg'>
    Jived fox nymph grabs quick waltz
  </Heading>
)
export const MediumHeading = () => (
  <Heading as='h2' size='md'>
    Jived fox nymph grabs quick waltz
  </Heading>
)
export const SmallHeading = () => (
  <Heading as='h3' size='sm'>
    Jived fox nymph grabs quick waltz
  </Heading>
)
