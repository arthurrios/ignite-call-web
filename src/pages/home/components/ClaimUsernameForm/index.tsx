import { Button, TextInput } from '@arthurrios-ignite-ui/react'
import { Form } from './styles'
import { ArrowRight } from '@phosphor-icons/react/dist/ssr'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const claimUsernameFormSchema = z.object({
  username: z.string(),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const { register, handleSubmit } = useForm<ClaimUsernameFormData>()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    console.log(data)
  }

  return (
    <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
      <TextInput
        size="sm"
        prefix="ignite.com/"
        placeholder="your-username"
        {...register('username')}
      />
      <Button size="sm" type="submit">
        Book
        <ArrowRight />
      </Button>
    </Form>
  )
}
