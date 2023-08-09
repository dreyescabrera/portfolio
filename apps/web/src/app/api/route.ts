import { NextResponse } from 'next/server';

type ApolloClientRequestBody = {
	query: string;
	operationName: string;
	variables: Record<string, string>;
};

export async function POST(request: Request) {
	console.log('I was here');
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

export async function GET(request: Request) {
	console.log('I was here');
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

export async function PUT(request: Request) {
	console.log('I was here');
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

export async function PATCH(request: Request) {
	console.log('I was here');
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

export async function DELETE(request: Request) {
	console.log('I was here');
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

export async function HEAD(request: Request) {
	console.log('I was here');
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

export async function OPTIONS(request: Request) {
	console.log('I was here');
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
