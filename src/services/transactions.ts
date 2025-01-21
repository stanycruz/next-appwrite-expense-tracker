import { databases } from '@/config/appwrite-config';
import { APPWRITE_DATABASE_ID, TRANSACTIONS_COLLECTION_ID } from '@/constants';
import { ID, Query } from 'appwrite';

export const addNewTransaction = async (data: any) => {
  try {
    await databases.createDocument(
      APPWRITE_DATABASE_ID,
      TRANSACTIONS_COLLECTION_ID,
      ID.unique(),
      data
    );

    return {
      success: true,
      message: 'Transaction added successfully',
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getTransactions = async (userId: any) => {
  try {
    const transactions = await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      TRANSACTIONS_COLLECTION_ID,
      [Query.equal('userId', userId)]
    );

    return {
      success: true,
      message: transactions.documents,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
