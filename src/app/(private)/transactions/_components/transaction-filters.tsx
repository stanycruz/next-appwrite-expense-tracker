import React from 'react';
import {
  expenseCategories,
  incomeCategories,
  transactionTypes,
} from '@/constants';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface ITransactionFiltersProps {
  filters: any;
  setFilters: (filters: any) => void;
}

function TransactionFilters({ filters, setFilters }: ITransactionFiltersProps) {
  const onFiltersValueChange = (fieldName: string, value: any) => {
    setFilters({ ...filters, [fieldName]: value });
  };

  const categories =
    filters.type === 'income' ? incomeCategories : expenseCategories;

  return (
    <div className="mt-5 grid grid-cols-4 gap-5 items-end">
      <div className="flex flex-col gap-1">
        <label htmlFor="transaction-Type" className="text-sm">
          Transaction Type
        </label>
        <Select
          value={filters.type}
          defaultValue={filters.type}
          onValueChange={(value) => onFiltersValueChange('type', value)}
        >
          <SelectTrigger>
            <SelectValue>{filters.type}</SelectValue>
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
          value={filters.category}
          defaultValue={filters.category}
          onValueChange={(value) => onFiltersValueChange('category', value)}
        >
          <SelectTrigger>
            <SelectValue>{filters.category}</SelectValue>
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

      <Input
        labelName="date"
        name="date"
        type="date"
        value={filters.date}
        onChange={(e) => onFiltersValueChange('date', e.target.value)}
      />

      <div className="grid grid-cols-2 gap-5">
        <Button variant="outline">Reset</Button>
        <Button>Apply</Button>
      </div>
    </div>
  );
}

export default TransactionFilters;
