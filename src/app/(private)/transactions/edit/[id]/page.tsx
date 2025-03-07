import React from 'react';
import TransactionForm from '../../_components/transaction-form';
import { getTransactionById } from '@/services/transactions';

const EditTransactionPage = async ({
  params,
}: {
  params: Record<string, any>;
}) => {
  const { id } = params;
  const transaction = await getTransactionById(id);

  return (
    <div>
      <h1 className="text-xl font-bold">Edit Transaction</h1>
      <TransactionForm type="edit" initialValues={transaction.data} />
    </div>
  );
};

export default EditTransactionPage;
