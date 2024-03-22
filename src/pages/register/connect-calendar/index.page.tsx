import { Button, Heading, MultiStep, Text } from '@arthurrios-ignite-ui/react'
import { Container, Header } from '../styles'
import { ArrowRight, Check } from '@phosphor-icons/react'
import { AuthError, ConnectBox, ConnectItem } from './styles'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

// import { api } from '@/lib/axios'
// import { AxiosError } from 'axios'

export default function Register() {
  const session = useSession()

  const router = useRouter()

  const hasAuthError = !!router.query.error
  const isSignedIn = session.status === 'authenticated'

  async function handleConnectCalendar() {
    await signIn('google')
  }

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
          {isSignedIn ? (
            <Button size="sm" disabled>
              Connected
              <Check />
            </Button>
          ) : (
            <Button
              variant="secondary"
              size="sm"
              onClick={handleConnectCalendar}
            >
              Connect
              <ArrowRight />
            </Button>
          )}
        </ConnectItem>

        {hasAuthError && (
          <AuthError size="sm">
            Failed to connect to Google, make sure you have enabled the Google
            Calendar access permissions
          </AuthError>
        )}

        <Button type="submit" disabled={!isSignedIn}>
          Next step
          <ArrowRight />
        </Button>
      </ConnectBox>
    </Container>
  )
}
