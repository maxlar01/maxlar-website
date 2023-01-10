import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" p={3} mb={6} align="center">
        Hi, I&apos;m a full-stack engineer based in Malaysia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Mostafa Rakha
          </Heading>
          <p>Full-Stack Engineer</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
