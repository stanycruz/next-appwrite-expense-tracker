import React from 'react';
import TransactionForm from '../../_components/transaction-form';
import { getTransactionById } from '@/services/transactions';

async function EditTransactionPage({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const { id } = await params;
  const transaction = await getTransactionById(id);

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Transaction</h1>
      <TransactionForm type="edit" initialValues={transaction.data} />
    </div>
  );
}

export default EditTransactionPage;
