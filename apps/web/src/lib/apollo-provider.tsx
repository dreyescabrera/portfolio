'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
	NextSSRApolloClient,
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
	const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
	let baseUrl = 'http://localhost:3000';
	if (typeof vercelEnv === 'string' && vercelEnv !== 'development') {
		baseUrl = 'https://www.realdiegor.dev';
	}

	const clientHttpLink = new HttpLink({
		uri: `${baseUrl}/api/graphql/`,
	});

	const serverHttpLink = new HttpLink({
		uri: process.env.API_URL,
		headers: {
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						serverHttpLink,
				  ])
				: clientHttpLink,
	});
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
