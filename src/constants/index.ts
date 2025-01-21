export const APPWRITE_DATABASE_ID = '678eeb02003e201f7fea';
export const USERS_COLLECTION_ID = '678eeb0e00062774c3b2';
export const TRANSACTIONS_COLLECTION_ID = '678f715600353e3e69b2';
export const STORAGE_BUCKET_ID = '678eecb0002533c5e9f4';

// routes which do not require authentication
export const publicRoutes = [
  '/',
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
  '/verify-email',
];

// routes which require authentication
export const privateRoutes = ['/dashboard', '/profile'];

export const transactionTypes = [
  { label: 'Income', value: 'income' },
  { label: 'Expense', value: 'expense' },
];

export const incomeCategories = [
  { label: 'Salary', value: 'salary' },
  { label: 'Business', value: 'business' },
  { label: 'Gifts', value: 'gifts' },
  { label: 'Interests', value: 'interests' },
  { label: 'Others', value: 'others' },
];

export const expenseCategories = [
  { label: 'Food', value: 'food' },
  { label: 'Rent', value: 'rent' },
  { label: 'Travel', value: 'travel' },
  { label: 'Groceries', value: 'groceries' },
  { label: 'Shopping', value: 'shopping' },
  { label: 'Health', value: 'health' },
  { label: 'Bills', value: 'bills' },
  { label: 'Others', value: 'others' },
];
