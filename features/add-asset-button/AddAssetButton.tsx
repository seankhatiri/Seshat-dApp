import React, { useCallback } from "react";
import Image from "next/image";

import { defaultAssetImg, defaultChainImg } from "config/constants";
import { getWagmiChains } from "config/web3";

import { useSwapStore, useWalletStore } from "store";

import { addAssetToMetamask } from "utils/wallet/metamask";
import { useSwitchNetwork } from "wagmi";
import wait from "wait";

export const AddAssetButton = () => {
  const wagmiConnected = useWalletStore((state) => state.wagmiConnected);
  const srcChain = useSwapStore((state) => state.srcChain);
  const destChain = useSwapStore((state) => state.destChain);
  const asset = useSwapStore((state) => state.asset);

  const { switchNetworkAsync } = useSwitchNetwork();

  const handleOnAddTokenOnSrcChain = useCallback(() => {
    if (!asset) return;

    const wagmiChains = getWagmiChains();
    const chainId = wagmiChains.find(
      (_chain) =>
        _chain.networkNameOverride === srcChain.chainName?.toLowerCase()
    )?.id;
    if (!chainId) return;

    // switch to chain
    switchNetworkAsync?.(chainId)
      .then(() => wait(500))
      .then(() => addAssetToMetamask(asset, srcChain))
      .catch((error) => console.log(error));

    // add token
  }, [srcChain, asset, switchNetworkAsync]);

  const handleOnAddTokenOnDestChain = useCallback(() => {
    if (!asset) return;

    const wagmiChains = getWagmiChains();
    const chainId = wagmiChains.find(
      (_chain) =>
        _chain.networkNameOverride === destChain.chainName?.toLowerCase()
    )?.id;
    if (!chainId) return;

    // switch to chain
    switchNetworkAsync?.(chainId)
      .then(() => wait(500))
      .then(() => addAssetToMetamask(asset, destChain))
      .catch((error) => console.log(error));

    // add token
  }, [destChain, asset, switchNetworkAsync]);

  if (!wagmiConnected) return null;
  if (srcChain.module !== "evm" && destChain.module !== "evm") return null;

  return (
    <div
      className=" dropdown tooltip tooltip-warning dropdown-end"
      data-tip={`Click to add ${asset?.id} to Metamask`}
    >
      <label
        tabIndex={0}
        className="flex items-center mr-2 btn btn-info btn-xs gap-x-2"
      >
        <span className="font-normal" style={{ fontSize: 10 }}>
          Add Asset
        </span>
        <Image
          loading="eager"
          src={"/assets/wallets/metamask.logo.svg"}
          height={20}
          width={20}
          alt="metamask"
        />
      </label>
      <ul
        tabIndex={0}
        className="w-32 p-1 rounded-lg shadow-lg dropdown-content menu"
        style={{ backgroundColor: "#16212e" }}
      >
        {srcChain?.module === "evm" && (
          <li onClick={handleOnAddTokenOnSrcChain}>
            <span>
              <Image
                loading="eager"
                src={`/assets/tokens/${asset?.id}.logo.svg`}
                width={20}
                height={20}
                onError={(e) => {
                  e.currentTarget.src = defaultAssetImg;
                  e.currentTarget.srcset = defaultAssetImg;
                }}
                alt={asset?.id}
              />
              <Image
                height={20}
                width={20}
                src="/assets/ui/switch-arrow.svg"
                alt="switch-arrow"
              />
              <Image
                loading="eager"
                src={`/assets/chains/${srcChain.chainName?.toLowerCase()}.logo.svg`}
                width={20}
                height={20}
                onError={(e) => {
                  e.currentTarget.src = defaultChainImg;
                  e.currentTarget.srcset = defaultChainImg;
                }}
                alt="chain"
              />
            </span>
          </li>
        )}
        {destChain?.module === "evm" && (
          <li onClick={handleOnAddTokenOnDestChain}>
            <span>
              <Image
                loading="eager"
                src={`/assets/tokens/${asset?.id}.logo.svg`}
                width={20}
                height={20}
                onError={(e) => {
                  e.currentTarget.src = defaultAssetImg;
                  e.currentTarget.srcset = defaultAssetImg;
                }}
                alt="asset"
              />
              <Image
                height={20}
                width={20}
                src="/assets/ui/switch-arrow.svg"
                alt="switch-arrow"
              />
              <Image
                loading="eager"
                src={`/assets/chains/${destChain.chainName?.toLowerCase()}.logo.svg`}
                width={20}
                height={20}
                onError={(e) => {
                  e.currentTarget.src = defaultChainImg;
                  e.currentTarget.srcset = defaultChainImg;
                }}
                alt="chain"
              />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};
