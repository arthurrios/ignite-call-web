import {
  Avatar,
  Button,
  Heading,
  MultiStep,
  Text,
  TextArea,
} from '@arthurrios-ignite-ui/react'
import { ArrowRight } from '@phosphor-icons/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container, Header } from '../styles'
import { FormAnnotation, ProfileBox } from './styles'
import { useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/pages/api/auth/[...nextauth].api'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const updateProfileSchema = z.object({
  bio: z.string(),
})

type UpdateProfileData = z.infer<typeof updateProfileSchema>

export default function UpdateProfile() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<UpdateProfileData>({
    resolver: zodResolver(updateProfileSchema),
  })

  const session = useSession()
  const router = useRouter()

  async function handleUpdateProfile(data: UpdateProfileData) {
    await api.put('/users/profile', {
      bio: data.bio,
    })

    await router.push(`/schedule/${session.data?.user.username}`)
  }

  return (
    <>
      <NextSeo title="Update your profile | Ignite Call" noindex />

      <Container>
        <Header>
          <Heading as="strong">Set your availability</Heading>
          <Text>Lastly, a brief description and a profile photo.</Text>

          <MultiStep size={4} currentStep={4} />

          <ProfileBox as="form" onSubmit={handleSubmit(handleUpdateProfile)}>
            <label>
              <Text size="sm">Profile photo</Text>
              <Avatar
                src={session.data?.user.avatar_url}
                alt={session.data?.user.name}
              />
            </label>

            <label>
              <Text size="sm">About you</Text>
              <TextArea {...register('bio')} />
              <FormAnnotation size="sm">
                Tell me a little about you. This will be displayed on your
                personal page.
              </FormAnnotation>
            </label>

            <Button type="submit" disabled={isSubmitting}>
              Finish
              <ArrowRight />
            </Button>
          </ProfileBox>
        </Header>
      </Container>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res),
  )

  return {
    props: {
      session,
    },
  }
}
