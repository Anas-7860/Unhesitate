import mongoose, { Mongoose } from 'mongoose';

const MONGO_URI = process.env.MONGO_URI;

interface MongooseConn {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

let cached: MongooseConn = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
  }

  try {
    if (!cached.promise) {
      cached.promise = mongoose.connect(MONGO_URI, {
        dbName: 'unhesitate',
        bufferCommands: false,
        connectTimeoutMS: 5000, // Quick timeout for dev fallback
      });
    }

    cached.conn = await cached.promise;
    return cached.conn;
  } catch (error) {
    cached.promise = null;
    throw error;
  }
};
