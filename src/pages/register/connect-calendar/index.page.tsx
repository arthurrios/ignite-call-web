import { Button, Heading, MultiStep, Text } from '@arthurrios-ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight } from '@phosphor-icons/react'
import { ConnectBox, ConnectItem } from './styles'
import { signIn } from 'next-auth/react'

// import { api } from '@/lib/axios'
// import { AxiosError } from 'axios'

export default function Register() {
  // async function handleRegister(data: RegisterFormData) {

  // }

  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          We need some information to create your profile! Oh, you can edit this
          information later.
        </Text>

        <MultiStep size={4} currentStep={2} />
      </Header>

      <ConnectBox>
        <ConnectItem>
          <Text>Google Calendar</Text>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => signIn('google')}
          >
            Connect
            <ArrowRight />
          </Button>
        </ConnectItem>
        <Button type="submit">
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
