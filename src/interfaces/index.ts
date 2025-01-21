export interface IUser {
  name: string;
  email: string;
  userId: string;
  userDocId: string;
  profilePictureUrl: string;
  $createdAt: string;
  $updatedAt: string;
  emailVerification: boolean;
}

export interface ITransaction {
  userId: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  amount: number;
  category: string;
  date: string;
  description: string;
  type: string;
  name: string;
}
