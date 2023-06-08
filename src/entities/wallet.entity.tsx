import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
  address: { type: String, required: true },
});

export default mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
