import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Button } from './Button'

describe('Button', () => {
  it('Should render button element with correct wording', () => {
    const buttonLabel = 'My Button'
    const { getByRole } = render(<Button>My Button</Button>)
    const button = getByRole('button', { name: buttonLabel })
    expect(button).toBeInTheDocument()
  })

  it('Should have the correct href attribute', () => {
    const buttonLabel = 'My Button'
    const { getByRole } = render(<Button href='#portfolio'>My Button</Button>)
    const button = getByRole('link', { name: buttonLabel })
    expect(button).toHaveAttribute('href', '#portfolio')
  })

  it('Should call event handler on click', () => {
    const buttonLabel = 'My Button'
    const handleOnClick = jest.fn()
    const { getByRole } = render(
      <Button onClick={handleOnClick}>My Button</Button>
    )
    const button = getByRole('button', { name: buttonLabel })
    fireEvent.click(button)
    expect(handleOnClick).toBeCalled()
  })

  it('Should not call event handler on click if it has disabled state', () => {
    const buttonLabel = 'My Button'
    const handleOnClick = jest.fn()
    const { getByRole } = render(
      <Button disabled onClick={handleOnClick}>
        My Button
      </Button>
    )
    const button = getByRole('button', { name: buttonLabel })
    fireEvent.click(button)
    expect(handleOnClick).not.toBeCalled()
  })
})
