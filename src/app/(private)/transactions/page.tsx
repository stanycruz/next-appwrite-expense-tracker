'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ITransaction } from '@/interfaces';
import toast from 'react-hot-toast';
import { IUsersStore, usersStore } from '@/store/users-store';
import { getTransactions } from '@/services/transactions';
import Spinner from '@/components/ui/spinner';

function TransactionsPage() {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);
  const [loading, setLoading] = React.useState(false);
  const { loggedInUser } = usersStore() as IUsersStore;
  const getData = async () => {
    try {
      setLoading(true);
      const response: any = await getTransactions(loggedInUser?.userId!);
      console.log(response);
      setTransactions(response.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (loggedInUser) {
      getData();
    }
  }, [loggedInUser]);

  if (loading) {
    return (
      <div className="flex mt-16 justify-center items-center">
        <Spinner />
      </div>
    );
  }

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
