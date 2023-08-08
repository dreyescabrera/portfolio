import { NextResponse } from 'next/server';

type ApolloClientRequestBody = {
	query: string;
	operationName: string;
	variables: Record<string, string>;
};

export async function POST(request: Request) {
	const body = (await request.json()) as ApolloClientRequestBody;
	const res = await fetch(process.env.API_URL as string, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
		body: JSON.stringify(body),
	});

	const data = (await res.json()) as Record<string, string>;

	return NextResponse.json(data);
}
