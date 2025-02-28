import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { db } from './db'
import { compare } from 'bcrypt';

export const AuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in'
  },
  providers: [
    CredentialsProvider({
      name: "CredentialsProvider",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john@test.mn"},
        password: { label: "Password", type: "password"}
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) {
          return null;
        }

        const existingUser = await db.users.findUnique({
          where: { email: credentials?.email }
        });

        if(!existingUser) {
          return null;
        }

        const passwordMatch = await compare(credentials.password, existingUser.password);

        if(!passwordMatch) {
          return null;
        }

        return {
          id: `${existingUser.id}`,
          username: existingUser.username,
          email: existingUser.email
        }
      }
    })
  ]
}