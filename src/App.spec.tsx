import { getByText, render } from '@testing-library/react'
import React from 'react'

import { App } from './App'

describe('Home Page', () => {
  // HERO SECTION
  it('Hero title should be displayed in hero section', () => {
    const homeTitle =
      'Hey, I’m Alex Spencer and I love building beautiful websites'
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
      'I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.'
    const { getByText } = render(<App />)
    const aboutMeParagraphElement = getByText(aboutMeParagraph)
    expect(aboutMeParagraphElement).toBeInTheDocument()
  })
  it('Should button that redirect to portfolio page', () => {
    const buttonText = 'GO TO PORTFOLIO'
    const { getByRole } = render(<App />)
    const buttonElement = getByRole('button', { name: buttonText })
    expect(buttonElement).toBeInTheDocument()
  })
})
