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
      data: transactions.documents,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getTransactionById = async (transactionId: string) => {
  try {
    const response = await databases.getDocument(
      APPWRITE_DATABASE_ID,
      TRANSACTIONS_COLLECTION_ID,
      transactionId
    );

    return {
      success: true,
      data: response,
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const editTransaction = async (transactionId: string, data: any) => {
  try {
    await databases.updateDocument(
      APPWRITE_DATABASE_ID,
      TRANSACTIONS_COLLECTION_ID,
      transactionId,
      data
    );

    return {
      success: true,
      data: 'Transaction updated successfully',
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
