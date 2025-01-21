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

function TransactionForm({
  initValues,
  type = 'new',
}: {
  initValues?: any;
  type?: 'new' | 'edit';
}) {
  const [transactionData, setTransactionData] = React.useState(
    initValues || {
      name: '',
      amount: 0,
      date: '',
      type: '',
      category: '',
      description: '',
    }
  );

  const onFormValueChange = (fieldName: string, value: any) => {
    setTransactionData({ ...transactionData, [fieldName]: value });
  };

  const categories =
    transactionData === 'income' ? incomeCategories : expenseCategories;

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
          value={transactionData.amount}
          onChange={(e) => onFormValueChange('amount', e.target.value)}
        />

        <Input
          labelName="Date"
          name="date"
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
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default TransactionForm;
