'use client';
import React from 'react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import {
  expenseCategories,
  incomeCategories,
  transactionTypes,
} from '@/constants';
import { Button } from '@/components/ui/button';
import toast from 'react-hot-toast';
import { IUsersStore, usersStore } from '@/store/users-store';
import { addNewTransaction, editTransaction } from '@/services/transactions';
import { useRouter } from 'next/navigation';

function TransactionForm({
  initialValues,
  type = 'new',
}: {
  initialValues?: any;
  type?: 'new' | 'edit';
}) {
  const { loggedInUser } = usersStore() as IUsersStore;
  const [transactionData, setTransactionData] = React.useState(
    initialValues || {
      name: '',
      amount: 0,
      date: '',
      type: '',
      category: '',
      description: '',
    }
  );
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();
  const onFormValueChange = (fieldName: string, value: any) => {
    setTransactionData({ ...transactionData, [fieldName]: value });
  };

  const categories =
    transactionData.type === 'income' ? incomeCategories : expenseCategories;

  const isValidated = () => {
    if (
      !transactionData.name ||
      !transactionData.amount ||
      !transactionData.date ||
      !transactionData.type ||
      !transactionData.category
    ) {
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      transactionData.userId = loggedInUser?.userId;
      transactionData.amount = parseFloat(transactionData.amount);
      if (type === 'new') {
        await addNewTransaction(transactionData);
        toast.success('Transaction added successfully');
      } else {
        let transactionDataWithoutAdditionalFields = { ...transactionData };
        Object.keys(transactionDataWithoutAdditionalFields).forEach((key) => {
          if (key.startsWith('$')) {
            delete transactionDataWithoutAdditionalFields[key];
          }
        });
        await editTransaction(
          initialValues.$id,
          transactionDataWithoutAdditionalFields
        );
        toast.success('Transaction updated successfully');
      }
      router.push('/transactions');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-7">
      <div className="grid grid-cols-4 gap-5">
        <Input
          labelName="Name"
          name="name"
          value={transactionData.name}
          onChange={(e) => onFormValueChange('name', e.target.value)}
        />

        <Input
          labelName="Amount"
          name="amount"
          type="number"
          value={transactionData.amount}
          onChange={(e) => onFormValueChange('amount', e.target.value)}
        />

        <Input
          labelName="Date"
          name="date"
          type="date"
          value={transactionData.date}
          onChange={(e) => onFormValueChange('date', e.target.value)}
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="transaction-Type" className="text-sm">
            Transaction Type
          </label>
          <Select
            value={transactionData.type}
            defaultValue={transactionData.type}
            onValueChange={(value) => onFormValueChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue>{transactionData.type}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {transactionTypes.map((type) => (
                  <SelectItem value={type.value} key={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="transaction-Type" className="text-sm">
            Transaction Category
          </label>
          <Select
            value={transactionData.category}
            defaultValue={transactionData.category}
            onValueChange={(value) => onFormValueChange('category', value)}
          >
            <SelectTrigger>
              <SelectValue>{transactionData.category}</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categories.map((category) => (
                  <SelectItem value={category.value} key={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-4">
          <label htmlFor="description" className="text-sm">
            Description
          </label>
          <Textarea
            name="description"
            value={transactionData.description}
            onChange={(e) => onFormValueChange('description', e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-end gap-5 mt-7">
        <Button variant="outline" onClick={() => router.push('/transactions')}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={loading || !isValidated()}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default TransactionForm;
