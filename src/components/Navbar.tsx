import React from 'react'
import styled from 'styled-components'

const NavDropDown = styled.nav`
  display: none;
`

const BurgerMenu = styled.div`
  &:hover nav {
    display: block;
  }
`

export const Navbar: React.FC = () => {
  return (
    <header>
      <BurgerMenu data-testid='burger-menu'>
        <span>Menu</span>
        <NavDropDown>
          <ul>
            <li>
              <a href='/home'>HOME</a>
            </li>
            <li>
              <a href='/portfolio'>PORTFOLIO</a>
            </li>
            <li>
              <a href='/contact'>CONTACT</a>
            </li>
          </ul>
        </NavDropDown>
      </BurgerMenu>
    </header>
  )
}
