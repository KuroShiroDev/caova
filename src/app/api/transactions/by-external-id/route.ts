import { getTransactionByExternalId } from '@/actions/transactions';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const externalId = req.nextUrl.searchParams.get('externalId');
  if (!externalId) {
    return NextResponse.json({ error: 'Reference required' }, { status: 400 });
  }
  const transaction = await getTransactionByExternalId(externalId);
  if (!transaction) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const serialized = {
    ...transaction,
    amount: transaction.amount.toString(),
    createdAt: transaction.createdAt.toISOString(),
    updatedAt: transaction.updatedAt.toISOString(),
  };
  return NextResponse.json(serialized);
}
