
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error(
    "MONGODB_URI belum diatur. Tambahkan di file .env.local"
  );
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // Menyimpan koneksi Mongoose selama development.
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache ?? {
  conn: null,
  promise: null,
};

global.mongooseCache = cached;

export async function connectDB() {
  // Gunakan koneksi yang sudah tersedia.
  if (cached.conn) {
    return cached.conn;
  }

  // Pastikan URI tersedia sebelum mencoba koneksi.
  if (!MONGODB_URI) {
    throw new Error(
      "MONGODB_URI belum diatur di file .env.local"
    );
  }

  // Buat koneksi jika belum ada.
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI);
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;
    throw error;
  }

  return cached.conn;
}
