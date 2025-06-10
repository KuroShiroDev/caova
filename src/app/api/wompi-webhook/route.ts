import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { updateWalletBalance } from '@/actions/wallets';

export async function POST(req: NextRequest) {
  const secret = process.env.WOMPI_EVENTS_SECRET; // Pon tu secreto en .env

  if (!secret) {
    return NextResponse.json({ error: 'No secret set' }, { status: 500 });
  }

  const body = await req.json();

  const properties: string[] = body.signature?.properties || [];
  let concat = '';

  for (const prop of properties) {
    const value = prop.split('.').reduce((o, k) => o?.[k], body.data);
    concat += value ?? '';
  }

  concat += body.timestamp;

  concat += secret;

  const checksum = crypto.createHash('sha256').update(concat).digest('hex');

  if (checksum !== body.signature?.checksum) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  if (body.event === 'transaction.updated') {
    await updateWalletBalance(
      body.data.transaction.id,
      body.data.transaction.reference,
      body.data.transaction.status,
      body.data.transaction.payment_method_type
    );
  }

  return NextResponse.json({ ok: true });
}
