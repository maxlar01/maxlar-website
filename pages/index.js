import NextLink from 'next/link'
import {
  Button,
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  List,
  ListItem,
  Icon,
  Link
} from '@chakra-ui/react'
import TypewriterComponent from 'typewriter-effect'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoReddit
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout title="Home">
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          <TypewriterComponent
            options={{ loop: true }}
            onInit={typewriter => {
              typewriter
                .typeString(`Hi, I am a full-stack engineer based in Malaysia!`)
                .pauseFor(2000)
                .deleteAll()
                .pauseFor(500)
                .typeString(`Welcome to my online website!`)
                .pauseFor(2000)
                .start()
            }}
          />
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Mostafa Rakha
            </Heading>
            <p>Full-Stack Engineer</p>
          </Box>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="130px"
            display="inline-block"
            borderRadius="full"
            src="/images/profile_pic.png"
            alt="Profile Image"
          />
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Who am I?
          </Heading>
          <Paragraph>
            Hello there 👋, I am a professional full stack engineer who likes to
            have fun while coding. I mainly build web apps but also like to try
            out other interesting technologies as well. I play video games and
            watch TV shows. Feel free to contact me 💬 and I will reply when I
            am available.
          </Paragraph>
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/projects"
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My portfolio
            </Button>
          </Box>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2000</BioYear>
            Born in Cairo, Egypt.
          </BioSection>
          <BioSection>
            <BioYear>2018</BioYear>
            Finished Highschool.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Internship at Coformatique in Egypt.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed Bachelor's degree in Computer Science.
          </BioSection>
          <BioSection>
            <BioYear>2022 - Present</BioYear>
            Building open-source projects.
          </BioSection>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Music, Video games, Anime, TV shows, Cats, Custom PCs and Custom
            mechanical keyboards.
          </Paragraph>
        </Section>
        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://www.github.com/maxlar01" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @maxlar01
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/mostafa-rakha/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @mostafa-rakha
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.twitter.com/maxlar_" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @maxlar_
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.reddit.com/user/maxlar01" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoReddit} />}
                >
                  @maxlar01
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
