import { getServerSession, User } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next'
import type { NextAuthOptions } from 'next-auth'

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', required: true },
        password: { label: 'Password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) return null
        const res = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          body: JSON.stringify({ username: credentials.username, password: credentials.password }),
          headers: { 'Content-Type': 'application/json' },
        })
        const user: User = await res.json()
        if (res.ok && user) {
          return user
        }
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  jwt: {
    maxAge: 60 * 15,
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'none',
        path: '/',
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        secure: true,
      },
    },
  },
  pages: {
    signIn: '/signin',
  },
} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authConfig)
}
