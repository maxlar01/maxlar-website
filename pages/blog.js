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
import Layout from '../components/layouts/article'

const ComingSoon = () => {
  return (
    <Layout title="Blog">
      <Container>
        <Heading as="h1">Coming soon!</Heading>
        <Text mb={4}>Stay tuned 😉</Text>
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
            src="https://media.giphy.com/media/Vf28HCCnz0L0GwSDLZ/giphy.gif"
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
    </Layout>
  )
}

export default ComingSoon
