import mongoose, { ConnectOptions } from "mongoose";

const connection = { isConnected: 0 };

export async function connectToDb() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    process.env.NEXT_PUBLIC_MONGO_DB_CONNECTION_URI!,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions
  );

  connection.isConnected = db.connection.readyState;
}
