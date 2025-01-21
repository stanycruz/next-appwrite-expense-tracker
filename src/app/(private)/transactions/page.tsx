import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

function TransactionsPage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Transactions</h1>

        <Button>
          <Link href="/transactions/new">New Transaction</Link>
        </Button>
      </div>
    </div>
  );
}

export default TransactionsPage;
