import { render } from '@testing-library/react'
import React from 'react'

import { App } from './App'

describe('Home Page', () => {
  it('Hero title shouls be displayed in hero section', () => {
    const title = 'Hey, I’m Alex Spencer and I love building beautiful websites'
    const { getByText } = render(<App />)
    const homeTitle = getByText(title)
    expect(homeTitle).toBeInTheDocument()
  })
})
