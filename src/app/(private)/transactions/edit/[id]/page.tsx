import { notFound } from 'next/navigation';
import TransactionForm from '../../_components/transaction-form';
import { getTransactionById } from '@/services/transactions';

export default async function EditTransactionPage({ params }: any) {
  if (!params?.id || typeof params.id !== 'string') return notFound();

  const transaction = await getTransactionById(params.id);

  if (!transaction) return notFound();

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Transaction</h1>
      <TransactionForm type="edit" initialValues={transaction.data} />
    </div>
  );
}
