import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const body = await request.json();
	const res = await fetch(process.env.API_URL as string, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.API_TOKEN}`,
		},
		body: JSON.stringify(body),
	});

	const data = await res.json();

	return NextResponse.json(data);
}
