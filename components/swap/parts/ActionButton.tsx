import React from "react";
import { useSwapStore } from "../../../store";
import { SwapStatus } from "../../../utils/enums";
import { GenerateDepositAddressButton } from "./GenerateDepositAddressButton";

export const ActionButton = () => {
  const { swapStatus, resetState } = useSwapStore((state) => state);
  if (swapStatus === SwapStatus.IDLE) return <GenerateDepositAddressButton />;
  if (swapStatus === SwapStatus.GEN_DEPOSIT_ADDRESS)
    return (
      <button className="w-full btn btn-primary cursor-not-allowedy">
        <div className="flex items-center gap-3">
          <span>Processing...</span>
        </div>
      </button>
    );
  if (swapStatus === SwapStatus.WAIT_FOR_DEPOSIT)
    return (
      <button className="w-full cursor-not-allowed btn btn-primary">
        <div className="flex items-center gap-3">
          <span>Waiting for deposit...</span>
        </div>
      </button>
    );
  if (swapStatus === SwapStatus.WAIT_FOR_CONFIRMATION)
    return (
      <button className="w-full cursor-not-allowed btn btn-primary">
        <div className="flex items-center gap-3">
          <span>Waiting for confirmation...</span>
        </div>
      </button>
    );
  if (swapStatus === SwapStatus.FINISHED)
    return (
      <button className="w-full btn btn-primary" onClick={resetState}>
        <div className="flex items-center gap-3">
          <span>Make another transfer?</span>
        </div>
      </button>
    );
  return null;
};
