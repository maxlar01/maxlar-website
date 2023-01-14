import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Icon,
  Divider
} from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { IoLogoGithub } from 'react-icons/io5'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const ProjectGridItem = ({ children, title, thumbnail, href }) => (
  <Box w="100%" align="center">
    <LinkBox as="a" href={href} target="_blank" cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
      />
      <LinkOverlay as="div" href={href}>
        <Text mt={2} fontSize={20}>
          {title + ' '}
          <Icon as={IoLogoGithub} />
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
    <Divider mt={4} />
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
  />
)
