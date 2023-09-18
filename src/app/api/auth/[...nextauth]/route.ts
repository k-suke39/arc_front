import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import axios from 'axios';

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || '',
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
		}),
	],
	secret: process.env.NEXTAUTH_SECRET || '',
	callbacks: {
		async signIn({ user, account }) {
			const provider = account?.provider;
			const uid = user?.id;
			const name = user?.name;
			const email = user?.email;

			try {
				const response = await axios.post(
					`https://current-user.vercel.app/auth/${provider}/callback`,
					{
						provider,
						uid,
						name,
						email,
					}
				);

				if (response.status === 200) {
					return true;
				} else {
					return false;
				}
			} catch (error) {
				console.log('エラー', error);
				return false;
			}
		},
	},
});
export { handler as GET, handler as POST };
