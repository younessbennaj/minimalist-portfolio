import React from 'react'
import styled from 'styled-components'

const NavDropDown = styled.nav`
  background-color: #33323d;
  display: none;
  padding: 40px 64px;
  text-align: center;
  position: absolute;
  left: 0;

  ul {
    margin: 0;
    padding: 0;
  }

  li:not(:last-child) {
    margin-bottom: 24px;
  }

  a {
    color: #ffffff;
  }
`

const BurgerMenu = styled.div`
  position: relative;
  &:hover nav {
    display: inline-block;
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
              <a href='/contact'>CONTACT ME</a>
            </li>
          </ul>
        </NavDropDown>
      </BurgerMenu>
    </header>
  )
}
