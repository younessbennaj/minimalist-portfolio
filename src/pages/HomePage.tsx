import * as React from 'react'
import styled from 'styled-components'

import { Button } from '../components/Button'
import { Heading, Text } from '../components/Typography'
import ImageL from '../images/youness-mobile-l.jpeg'
import ImageS from '../images/youness-mobile-s.jpeg'
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

const ResponsiveImage = styled.img`
  ${spacing}
  width: 100%;
  height: auto;
`

const StyledList = styled.ul`
  text-align: center;

  li {
    margin-bottom: 16px;
  }

  a {
    color: #ffffff;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    padding: 0;
  }
`

const StyledFooter = styled(Flex)`
  background: #33323d;
`

const srcset = `${ImageS} 260w, ${ImageL} 350w`

const sizes = '(max-width: 350px) 260px, 350px'

export const HomePage: React.FC = () => {
  return (
    <>
      <Box p={32}>
        {/* Home Section */}
        <div>
          <Heading as='h1' size='md' spacing={32}>
            Hey, I’m Youness Bennaj and I love building maintainalble web
            applications.
          </Heading>
          <Button href='#about' spacing={48}>
            ABOUT ME
          </Button>
        </div>
        {/* About Me Section */}
        <div>
          {/* To test with desktop image */}
          <ResponsiveImage
            alt='youness_bennaj'
            height='auto'
            sizes={sizes}
            spacing={48}
            src={ImageS}
            srcSet={srcset}
            width='260'
          />
          <Heading as='h2' size='md' spacing={24}>
            About Me
          </Heading>
          <Text spacing={24}>
            I’m a front-end developer looking for a new role in an exciting
            company. I focus on writing accessible HTML, using modern CSS
            practices and writing clean JavaScript. I mostly use React and I am
            mastering tools and libraries in its ecosystem. I’m based in Paris,
            FR, but I’m happy working remotely and have experience in remote
            teams. When I’m not coding, you’ll find me outdoors. I love being
            out in nature whether that’s going for a walk, workout or visiting
            some beautiful places. I’d love you to check out my work.
          </Text>
          <Button href='/portfolio' spacing={48} variant='secondary'>
            GO TO PORTFOLIO
          </Button>
        </div>
        {/* Contact Me Section */}
        <Flex py={96}>
          <Heading align='center' as='h2' size='md' spacing={48}>
            Interested in doing a project together?
          </Heading>
          <Button href='/portfolio' variant='secondary'>
            CONTACT ME
          </Button>
        </Flex>
      </Box>
      {/* Footer Section */}
      <StyledFooter py={48}>
        <StyledList data-testid='footer-navbar'>
          <li>
            <a href='/home'>HOME</a>
          </li>
          <li>
            <a href='/portfolio'>PORTFOLIO</a>
          </li>
          <li>
            <a href='/contact-me'>CONTACT ME</a>
          </li>
        </StyledList>
        <StyledList>
          <li>
            <a href='https://github.com/'>github</a>
          </li>
          <li>
            <a href='https://linkedin.com/'>linkedin</a>
          </li>
        </StyledList>
      </StyledFooter>
    </>
  )
}
