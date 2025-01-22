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

export const getTransactions = async (userId: any, filters?: any) => {
  try {
    let query = [Query.equal('userId', userId)];

    Object.keys(filters || {}).forEach((key) => {
      if (filters[key]) {
        query.push(Query.equal(key, filters[key]));
      }
    });

    const transactions = await databases.listDocuments(
      APPWRITE_DATABASE_ID,
      TRANSACTIONS_COLLECTION_ID,
      query
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

export const deleteTransaction = async (transactionId: string) => {
  try {
    await databases.deleteDocument(
      APPWRITE_DATABASE_ID,
      TRANSACTIONS_COLLECTION_ID,
      transactionId
    );

    return {
      success: true,
      data: 'Transaction deleted successfully',
    };
  } catch (error: any) {
    throw new Error(error.message);
  }
};
