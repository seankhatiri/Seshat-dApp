import { AssetConfig, ChainInfo } from "@axelar-network/axelarjs-sdk";
import { ENVIRONMENT } from "../config/constants";
import Big from "big.js";

export function renderGasFee(
  srcChain: ChainInfo,
  destChain: ChainInfo,
  asset: AssetConfig
) {
  if (!srcChain || !destChain) return "";

  const sourceChainName = srcChain.chainName;
  const destChainName = destChain.chainName;

  const sourceFee = asset?.chain_aliases[sourceChainName]?.minDepositAmt;
  const destFee = asset?.chain_aliases[destChainName]?.minDepositAmt;

  if (!sourceFee && !destFee) return "0";
  console.log({
    sourceChainName,
    sourceAsset: asset?.chain_aliases[sourceChainName],
    sourceFee,
    destFee,
  });
  return Big(sourceFee).add(Big(destFee)).toString();
}
