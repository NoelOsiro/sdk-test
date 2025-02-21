import { NextResponse } from 'next/server';
import  SasaPay  from 'sasapay-sdk';

export async function POST(request: Request) {
  const { clientSecret, clientId, environment } = await request.json();
  console.log(clientSecret, clientId)

  const sasapayInstance = new SasaPay({
    clientId: clientId,
    clientSecret: clientSecret,
    environment: environment
});
  try {
    const response = await sasapayInstance.getAccessToken();
    return NextResponse.json(response);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message || 'Failed to fetch access token' }, { status: 500 });
  }
}