import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            userName: 'usuario' as string,
            password: 'contraseña' as string,
        })
    ]
});

export {handler as GET, handler as POST};




