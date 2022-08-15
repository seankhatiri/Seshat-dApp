import { useEffect } from "react";
import { AssetInfo } from "@axelar-network/axelarjs-sdk";
import { useSwapStore } from "../store";
import { ENVIRONMENT } from "../config/constants";

export function useFilterSelectableAssetList() {
  const { srcChain, destChain, setAssetList, setAsset, asset, allAssets } = useSwapStore(
    (state) => state
  );

  useEffect(() => {
    if (srcChain && destChain) filterAssetList();
  }, [srcChain, destChain]);

  function filterAssetList() {
    if (!srcChain || !destChain) return;
    const sourceAssets = srcChain.assets as AssetInfo[];
    const destAssets = destChain.assets as AssetInfo[];

    const selectableAssets = allAssets.filter((asset) => {
      const sourceHasAsset = sourceAssets.find(
        (_asset) => _asset.common_key === asset.common_key[ENVIRONMENT]
      );
      const destHasAsset = destAssets.find(
        (_asset) => _asset.common_key === asset.common_key[ENVIRONMENT]
      );
      return sourceHasAsset && destHasAsset;
    });

    setAssetList(selectableAssets);
    const currentAssetValid = selectableAssets.find(
      (_asset) =>
        _asset.common_key[ENVIRONMENT] !== asset?.common_key[ENVIRONMENT]
    );
    if (!currentAssetValid) {
      setAsset(null);
    }
  }
}
