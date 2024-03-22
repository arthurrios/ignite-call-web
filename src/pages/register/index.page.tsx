import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@arthurrios-ignite-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from '@phosphor-icons/react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Welcome to Ignite Call!</Heading>
        <Text>
          We need some information to create your profile! Oh, you can edit this
          information later.
        </Text>

        <MultiStep size={4} currentStep={1} />

        <Form as="form">
          <label>
            <Text size="sm">Username</Text>
            <TextInput prefix="ignite.com/" placeholder="your-username" />
          </label>

          <label>
            <Text size="sm">Full name</Text>
            <TextInput placeholder="Your name" />
          </label>

          <Button type="submit">
            Next step
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
