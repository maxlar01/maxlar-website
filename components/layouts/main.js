import Head from 'next/head'
import Navbar from '../navbar'
import NoSSR from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import Room from '../room'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://emojipedia-us.s3.amazonaws.com/source/skype/289/laptop_1f4bb.png"
        />
        {/* <title>Mostafa Rakha - Homepage</title> */}
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSSR>
          <Room />
        </NoSSR>
        {children}
      </Container>
    </Box>
  )
}

export default Main
