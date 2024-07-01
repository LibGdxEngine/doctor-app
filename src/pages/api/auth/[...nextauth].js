// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Google({
            clientId: "794210030409-1jblj5njdfsn27qnjv0nk326fm0o5oi6.apps.googleusercontent.com",
            clientSecret: "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",
        }),
    ],
});
