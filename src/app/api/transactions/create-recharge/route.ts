import { NextRequest, NextResponse } from 'next/server';
import { createRechargeTransaction } from '@/actions/transactions';

export async function POST(req: NextRequest) {
  const { amount, reference } = await req.json();
  const transaction = await createRechargeTransaction(BigInt(amount), reference);
  const serialized = {
    ...transaction,
    amount: transaction.amount.toString(),
  };
  return NextResponse.json(serialized);
}
