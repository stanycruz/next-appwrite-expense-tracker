'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ITransaction } from '@/interfaces';
import toast from 'react-hot-toast';
import { IUsersStore, usersStore } from '@/store/users-store';
import { deleteTransaction, getTransactions } from '@/services/transactions';
import Spinner from '@/components/ui/spinner';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Pencil, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import TransactionFilters from './_components/transaction-filters';

function TransactionsPage() {
  const [transactions, setTransactions] = React.useState<ITransaction[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [filters, setFilters] = React.useState<any>({
    type: '',
    category: '',
    date: '',
  });
  const router = useRouter();
  const { loggedInUser } = usersStore() as IUsersStore;
  const getData = async (filtersObj: any) => {
    try {
      setLoading(true);
      const response: any = await getTransactions(
        loggedInUser?.userId!,
        filtersObj
      );
      setTransactions(response.data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (transactionId: string) => {
    try {
      setLoading(true);
      await deleteTransaction(transactionId);
      toast.success('Transaction deleted successfully');
      setTransactions(transactions.filter((t) => t.$id !== transactionId));
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    if (loggedInUser) {
      getData({});
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

      <TransactionFilters
        filters={filters}
        setFilters={setFilters}
        onFilter={getData}
        onReset={getData}
      />

      <Table className="mt-5 border border-gray-300">
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.$id}>
              <TableCell>{transaction.name}</TableCell>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell>
                <div className="flex gap-5 items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(transaction.$id)}
                  >
                    <Trash2 size={14} />
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      router.push(`/transactions/edit/${transaction.$id}`)
                    }
                  >
                    <Pencil size={14} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TransactionsPage;
