import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'

import { Navbar } from '../Navbar'

describe('Navbar', () => {
  it('Should not show menu items on initial rendering', () => {
    const { getByRole } = render(<Navbar />)
    // hidden: true => becaume we use diplay none
    const item = getByRole('link', { hidden: true, name: 'HOME' })
    expect(item).not.toBeVisible()
  })

  it('Should show menu items when user click on navbar button', () => {
    const { getByRole, getByText } = render(<Navbar />)
    const menuButton = getByText('Menu')
    fireEvent.mouseOver(menuButton)
    waitFor(() => {
      const item = getByRole('link', { name: 'HOME' })
      expect(item).toBeVisible()
    })
  })
})
