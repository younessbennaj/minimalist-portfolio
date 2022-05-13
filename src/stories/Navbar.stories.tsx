import React from 'react'

import { Navbar } from '../components/Navbar'

export default {
  component: Navbar,
  title: 'Navbar',
}

export const NavbarComponent = () => <Navbar />

NavbarComponent.parameters = { pseudo: { hover: true } }
