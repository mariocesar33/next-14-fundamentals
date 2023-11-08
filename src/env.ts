import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_BASE_URL: z.string().url(),
})

const parsedEnv = envSchema.safeParse(process.env)

if (!parsedEnv.success) {
  console.error(
    'Invalid environment variables',
    parsedEnv.error.flatten().fieldErrors,
  ) // metodo flaten() retorna um objeto com os erros num formato mais legivel

  throw new Error('Invalid environment variables')
}

export const env = parsedEnv.data
