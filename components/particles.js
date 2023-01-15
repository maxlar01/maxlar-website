import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import { useColorModeValue } from '@chakra-ui/react'

const ParticlesEffect = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fps_limit: 90,
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'attract',
              parallax: { enable: false, force: 60, smooth: 10 }
            },
            resize: true
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 }
          }
        },
        particles: {
          color: { value: useColorModeValue('#000000', '#ffffff') },
          line_linked: {
            color: useColorModeValue('#000000', '#ffffff'),
            distance: 150,
            enable: true,
            opacity: 0.09,
            width: 1
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: 'none',
            enable: true,
            out_mode: 'out',
            random: false,
            speed: 2,
            straight: false
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.01, speed: 1, sync: false },
            random: false,
            value: 0.05
          },
          shape: {
            character: {
              fill: false,
              font: 'Verdana',
              style: '',
              value: '*',
              weight: '400'
            },
            polygon: { nb_sides: 5 },
            stroke: {
              color: useColorModeValue('#ffffff', '#000000'),
              width: 0
            },
            type: 'triangle'
          },
          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5
          }
        },
        polygon: {
          draw: {
            enable: false,
            lineColor: useColorModeValue('#000000', '#ffffff'),
            lineWidth: 0.5
          },
          move: { radius: 10 },
          scale: 1,
          type: 'none',
          url: ''
        },
        retina_detect: true
      }}
    />
  )
}

export default ParticlesEffect
