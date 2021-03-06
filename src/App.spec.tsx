import { render, within } from '@testing-library/react'
import React from 'react'

import { App } from './App'

describe('Home Page', () => {
  // HERO SECTION
  it('Hero title should be displayed in hero section', () => {
    const homeTitle =
      'Hey, I’m Youness Bennaj and I love building maintainalble web applications.'
    const { getByText } = render(<App />)
    const homeTitleElement = getByText(homeTitle)
    expect(homeTitleElement).toBeInTheDocument()
  })
  it('Hero section should contain button that redirect to "about me" section', () => {
    const buttonLabel = 'ABOUT ME'
    const { getByText } = render(<App />)
    const buttonElement = getByText(buttonLabel)
    expect(buttonElement).toBeInTheDocument()
  })
  // ABOUT ME SECTION
  it('Should include about me section title', () => {
    const sectionTitle = 'About Me'
    const { getByText } = render(<App />)
    const sectionTitleElement = getByText(sectionTitle)
    expect(sectionTitleElement).toBeInTheDocument()
  })
  it('Should include paragraph about me', () => {
    const aboutMeParagraph =
      'I’m a front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. I mostly use React and I am mastering tools and libraries in its ecosystem. I’m based in Paris, FR, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, workout or visiting some beautiful places. I’d love you to check out my work.'
    const { getByText } = render(<App />)
    const aboutMeParagraphElement = getByText(aboutMeParagraph)
    expect(aboutMeParagraphElement).toBeInTheDocument()
  })
  it('Should include button that redirect to portfolio page', () => {
    const buttonText = 'GO TO PORTFOLIO'
    const { getByRole } = render(<App />)
    const buttonElement = getByRole('button', { name: buttonText })
    expect(buttonElement).toBeInTheDocument()
  })
  // Contact me section
  it('Should include contact me section title', () => {
    const title = 'Interested in doing a project together?'
    const { getByText } = render(<App />)
    const titleElement = getByText(title)
    expect(titleElement).toBeInTheDocument()
  })
  it('Should include button that redirect to portfolio page', () => {
    const buttonText = 'CONTACT ME'
    const { getByRole } = render(<App />)
    const buttonElement = getByRole('button', { name: buttonText })
    expect(buttonElement).toBeInTheDocument()
  })
  // Footer
  it('Should include link that redirect to home, portfolio and contact me page', () => {
    const linkTexts = ['HOME', 'PORTFOLIO', 'CONTACT ME']
    const { getByTestId } = render(<App />)
    const footerNavbar = getByTestId('footer-navbar')
    linkTexts.map((linkText: string) => {
      const linkElement = within(footerNavbar).getByRole('link', {
        name: linkText,
      })
      expect(linkElement).toBeInTheDocument()
    })
  })
  it('Should include link that redirect to social networks', () => {
    const socialNetworksLinkLabel = ['github', 'linkedin']
    const { getByRole } = render(<App />)
    socialNetworksLinkLabel.map((linkText: string) => {
      getByRole('link', {
        name: linkText,
      })
    })
  })
})
