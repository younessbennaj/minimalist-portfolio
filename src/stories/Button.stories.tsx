import React from 'react'

import { Button } from '../components/Button'

export default {
  component: Button,
  title: 'Button',
}

export const DefaultButton = () => <Button>My Button</Button>

export const PrimaryButton = () => <Button variant='primary'>Primary</Button>

export const PrimaryButtonHover = () => (
  <Button variant='primary'>Primary</Button>
)
PrimaryButtonHover.parameters = { pseudo: { hover: true } }

export const SecondaryButton = () => (
  <Button variant='secondary'>Secondary</Button>
)

export const SecondaryButtonHover = () => (
  <Button variant='secondary'>Secondary</Button>
)
SecondaryButtonHover.parameters = { pseudo: { hover: true } }
