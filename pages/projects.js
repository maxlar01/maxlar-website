import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'
import thumbTest from '../public/images/projects/thumbnail_test.jpg'
import Layout from '../components/layouts/article'

const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section delay={0.2}>
            <ProjectGridItem title="test1" thumbnail={thumbTest}>
              Description for project
            </ProjectGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectGridItem title="test2" thumbnail={thumbTest}>
              Description for project
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Projects
