import mongoose from 'mongoose';
import { ENV } from './env.js';

export const connectDB = async () => {
  try {
    if (!ENV.DB_URL) {
      throw new Error('DB_URL environment variable is not defined');
    }
    const conn = await mongoose.connect(ENV.DB_URL)
    console.log("✅Connected to MongoDB:", conn.connection.host);
  }catch(err) {
    console.error('❌Failed to connect to MongoDB', err);
    process.exit(1);
  };
};
