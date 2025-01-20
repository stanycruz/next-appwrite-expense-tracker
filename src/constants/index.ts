export const APPWRITE_DATABASE_ID = '678eeb02003e201f7fea';
export const USERS_COLLECTION_ID = '678eeb0e00062774c3b2';
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
