import Image from "next/image";
import React from "react";
import { InputWrapper, StatsWrapper } from "../common";
import {
  AddressFiller,
  ChainSwitcher,
  DestChainSelector,
  SourceChainSelector,
  TokenSelector,
} from "./parts";

export const SwapBox = () => {
  return (
    <div className="backdrop-blur-lg bg-[#385073]/10 rounded-xl w-[500px] h-[500px]">
      <div className="p-8">
        <div className="flex justify-between">
          <InputWrapper>
            <SourceChainSelector />
          </InputWrapper>
          <div className="relative z-50 flex items-center -mx-2">
            <ChainSwitcher />
          </div>
          <InputWrapper>
            <DestChainSelector />
          </InputWrapper>
        </div>

        <div className="mt-4">
          <InputWrapper>
            <TokenSelector />
          </InputWrapper>
        </div>

        <div className="mt-4">
          <StatsWrapper>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Current asset balance:</span>
                <span>00.00</span>
              </li>
              <li className="flex justify-between">
                <span>Minimum deposit amount:</span>
                <span>00.00</span>
              </li>
              <li className="flex justify-between">
                <span>Relayer Gas Fees:</span>
                <span>00.00</span>
              </li>
              <li className="flex justify-between">
                <span>Estimated wait time:</span>
                <span>~ 00-00 min</span>
              </li>
            </ul>
          </StatsWrapper>
        </div>

        <div className="mt-4">
          <div className="flex gap-5">
            <InputWrapper>
              <div className="h-full">
                <input
                  className="w-full h-full text-xs bg-transparent outline-none"
                  placeholder="0x120698246F840480A8aF88D8C301cb9a38F7628A"
                />
              </div>
            </InputWrapper>
            <div>
              <AddressFiller />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button className="w-full btn btn-primary">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image src="/assets/ui/wallet.svg" height={20} width={20} />
              </div>
              <span>Connect Wallet</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
