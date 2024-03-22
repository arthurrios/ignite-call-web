import { Button, TextInput } from '@arthurrios-ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'

export function ClaimUsernameForm() {
  return (
    <Form>
      <TextInput size="sm" prefix="ignite.com/" placeholder="your-username" />
      <Button size="sm" type="submit">
        Book
        <ArrowRight />
      </Button>
    </Form>
  )
}
