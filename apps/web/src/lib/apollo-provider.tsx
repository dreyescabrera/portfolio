'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
	NextSSRApolloClient,
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
	let baseUrl = 'http://localhost:3000';
	if (
		typeof process.env.NEXT_PUBLIC_VERCEL_ENV === 'string' &&
		process.env.NEXT_PUBLIC_VERCEL_ENV !== 'development'
	) {
		baseUrl = 'https://www.realdiegor.dev';
	}

	const httpLink = new HttpLink({
		uri: `${baseUrl}/api/`,
	});

	return new NextSSRApolloClient({
		cache: new NextSSRInMemoryCache(),
		link:
			typeof window === 'undefined'
				? ApolloLink.from([
						new SSRMultipartLink({
							stripDefer: true,
						}),
						new HttpLink({
							uri: process.env.API_URL,
							headers: {
								Authorization: `Bearer ${process.env.API_TOKEN}`,
							},
						}),
				  ])
				: httpLink,
	});
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
