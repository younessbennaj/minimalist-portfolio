import React from 'react'

export const App: React.FC = () => {
  return (
    <div>
      {/* Home Section */}
      <div>
        <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
        <button>
          <a href='#about'>ABOUT ME</a>
        </button>
      </div>
      {/* About Me Section */}
      <div>
        <h2>About Me</h2>
        <p>
          I’m a junior front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. When writing JavaScript code,
          I mostly use React, but I can adapt to whatever tools are required.
          I’m based in London, UK, but I’m happy working remotely and have
          experience in remote teams. When I’m not coding, you’ll find me
          outdoors. I love being out in nature whether that’s going for a walk,
          run or cycling. I’d love you to check out my work.
        </p>
        <button>
          <a href='/portfolio'>GO TO PORTFOLIO</a>
        </button>
      </div>
    </div>
  )
}
