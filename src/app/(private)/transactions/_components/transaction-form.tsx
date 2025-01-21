import React from 'react';

function TransactionForm({
  initValues,
  type = 'new',
}: {
  initValues?: any;
  type?: 'new' | 'edit';
}) {
  return <div className="mt-7">TransactionForm</div>;
}

export default TransactionForm;
