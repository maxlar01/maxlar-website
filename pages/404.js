import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <Heading as="h1">Not Found</Heading>
      <Text mb={4}>The page you are looking for was not found !</Text>
      <div
        style={{
          borderRadius: '15px',
          overflow: 'hidden',
          width: '480px',
          height: '240px'
        }}
      >
        <Image
          width="480"
          height="240"
          src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif"
          style={{ objectFit: 'cover' }}
        />
      </div>

      <Divider my={6} />

      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
