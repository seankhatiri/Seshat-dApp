import { NextApiRequest, NextApiResponse } from "next";

import { connectToDb } from "~/store";

import Wallet from "~/entities/wallet.entity";

const saveWalletDestAddress = async (walletAddress: any) => {
  const { address } = walletAddress;
  const wallet = new Wallet({ address: address });
  await wallet.save();
  return wallet;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectToDb();
  const { body, method } = req;
  switch (method) {
    case "POST":
      try {
        const savedAddress = await saveWalletDestAddress(body);
        res.status(201).json({ data: savedAddress });
      } catch (error) {
        res.status(400).json({ data: error });
      }
      break;
    default:
      res.status(405);
      break;
  }
}
