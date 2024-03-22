import { Heading, Text } from '@arthurrios-ignite-ui/react'
import { BgGrid, Container, Hero, Preview } from './styles'

import previewImage from '../../assets/app-preview.png'
import bgGrid from '../../assets/bg-grid.png'
import Image from 'next/image'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading size="4xl">Easy Scheduling</Heading>
        <Text size="xl">
          Connect your calendar and let people schedule appointments in their
          free time.
        </Text>

        <ClaimUsernameForm />
      </Hero>
      <Preview>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendar showing app in usage"
        />
      </Preview>

      <BgGrid
        src={bgGrid}
        height={700}
        alt="Background image of a grid"
        priority
      />
    </Container>
  )
}
