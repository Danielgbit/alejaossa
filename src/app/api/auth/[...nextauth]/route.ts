import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { ADMIN_USER, ADMIN_PASS, ADMIN_EMAIL } from '@/lib/config';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === ADMIN_USER &&
          credentials?.password === ADMIN_PASS
        ) {
          return {
            id: "1",
            name: ADMIN_USER,
            email: ADMIN_EMAIL,
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
