import { CosmosChain } from "../interface";

export default {
  rpc: "https://testnet-rpc-router.axelar-dev.workers.dev/?chain=evmos",
  rest: "https://rest.bd.evmos.dev:1317",
  chainId: "evmos_9000-4",
  chainName: "Evmos Testnet",
  stakeCurrency: {
    coinDenom: "EVMOS",
    coinMinimalDenom: "atevmos",
    coinDecimals: 18,
    coinGeckoId: "evmos",
  },
  bech32Config: {
    bech32PrefixAccAddr: "evmos",
    bech32PrefixAccPub: "evmospub",
    bech32PrefixValAddr: "evmosvaloper",
    bech32PrefixValPub: "evmosvaloperpub",
    bech32PrefixConsAddr: "evmosvalcons",
    bech32PrefixConsPub: "evmosvalconspub",
  },
  bip44: {
    coinType: 118,
  },
  currencies: [
    {
      coinDenom: "EVMOS",
      coinMinimalDenom: "atevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
    },
  ],
  feeCurrencies: [
    {
      coinDenom: "EVMOS",
      coinMinimalDenom: "atevmos",
      coinDecimals: 18,
      coinGeckoId: "evmos",
    },
  ],
  gasPriceStep: {
    low: 25000000000,
    average: 25000000000,
    high: 40000000000,
  },
  features: ["stargate", "no-legacy-stdTx", "ibc-transfer"],
  chainIdentifier: "evmos",
  chainToAxelarChannelId: "channel-22",
} as CosmosChain;
