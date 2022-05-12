import * as React from 'react'
import styled from 'styled-components'

import { Button } from '../components/Button'
import { Heading, Text } from '../components/Typography'
import { spacing } from '../styles/utils'

const Box = styled.div`
  ${spacing}
`

// const Box = styled.div<BoxType>`
//   margin-bottom: ${({ spacing = 0 }) => `${spacing}px`};
//   padding: ${({ padding = 0 }) => `${padding}px`};
// `

const Flex = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const HomePage: React.FC = () => {
  return (
    <Box p={32}>
      {/* Home Section */}
      <div>
        <Heading as='h1' size='md'>
          Hey, I’m Youness Bennaj and I love building maintainalble web
          applications.
        </Heading>
        <Button href='#about' spacing={96}>
          ABOUT ME
        </Button>
      </div>
      {/* About Me Section */}
      <div>
        <Heading as='h2' size='md'>
          About Me
        </Heading>
        <Text>
          I’m a front-end developer looking for a new role in an exciting
          company. I focus on writing accessible HTML, using modern CSS
          practices and writing clean JavaScript. I mostly use React and I am
          mastering tools and libraries in its ecosystem. I’m based in Paris,
          FR, but I’m happy working remotely and have experience in remote
          teams. When I’m not coding, you’ll find me outdoors. I love being out
          in nature whether that’s going for a walk, workout or visiting some
          beautiful places. I’d love you to check out my work.
        </Text>
        <Button href='/portfolio' variant='secondary'>
          GO TO PORTFOLIO
        </Button>
      </div>
      {/* Contact Me Section */}
      <Flex p={4}>
        <Heading align='center' as='h2' size='md'>
          Interested in doing a project together?
        </Heading>
        <Button href='/portfolio' variant='secondary'>
          CONTACT ME
        </Button>
      </Flex>
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
    </Box>
  )
}
