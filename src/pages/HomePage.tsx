import * as React from 'react'

import { Button } from '../components/Button'

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* Home Section */}
      <div>
        <h1>
          Hey, I’m Youness Bennaj and I love building maintainalble, modulable
          and scalable web applications.
        </h1>
        <Button href='#about'>ABOUT ME</Button>
      </div>
      {/* About Me Section */}
      <div>
        <h2>About Me</h2>
        <p>
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. I mostly use React and I am
          mastering tools and libraries in its ecosystem. I’m based in Paris,
          FR, but I’m happy working remotely and have experience in remote
          teams. When I’m not coding, you’ll find me outdoors. I love being out
          in nature whether that’s going for a walk, workout or visiting some
          beautiful places. I’d love you to check out my work.
        </p>
        <button>
          <a href='/portfolio'>GO TO PORTFOLIO</a>
        </button>
      </div>
      {/* Contact Me Section */}
      <div>
        <h2>Interested in doing a project together?</h2>
        <button>
          <a href='/contact-me'>CONTACT ME</a>
        </button>
      </div>
      {/* Footer Section */}
      <div>
        <ul data-testid='footer-navbar'>
          <li>
            <a href='/home'>HOME</a>
          </li>
          <li>
            <a href='/portfolio'>PORTFOLIO</a>
          </li>
          <li>
            <a href='/contact-me'>CONTACT ME</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='https://github.com/'>github</a>
          </li>
          <li>
            <a href='https://linkedin.com/'>linkedin</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
