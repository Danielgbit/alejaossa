import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials) {
        // Aquí validas el login (hardcodeado o desde DB)
        if (
          credentials?.username === "admin" &&
          credentials?.password === "secreto123"
        ) {
          return { id: "1", name: "Alejandra Ossa", email: "alejandra@example.com" };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
};


export default authOptions;