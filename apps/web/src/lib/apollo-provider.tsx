'use client';

import { ApolloLink, HttpLink } from '@apollo/client';
import {
	NextSSRApolloClient,
	ApolloNextAppProvider,
	NextSSRInMemoryCache,
	SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
	const baseUrl =
		process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://realdiegor.dev';
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
						httpLink,
				  ])
				: httpLink,
	});
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
}
