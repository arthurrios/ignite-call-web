import { Heading, Text, styled } from '@arthurrios-ignite-ui/react'
import Image from 'next/image'

export const Container = styled('div', {
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  marginLeft: 'auto',
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
})
export const Hero = styled('div', {
  maxWidth: 480,
  padding: '0 $10',

  [`> ${Heading}`]: {
    '@media(max-width: 600px)': {
      fontSize: '$6xl',
    },
  },

  [`> ${Text}`]: {
    marginTop: '$2',
    color: '$gray-200',
  },
})
export const Preview = styled('div', {})

export const BgGrid = styled(Image, {
  position: 'absolute',
  zIndex: -1,
  top: '50%',
  left: 0,
  transform: 'translateY(-50%)',
})
