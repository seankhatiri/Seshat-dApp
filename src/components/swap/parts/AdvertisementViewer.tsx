import { useState } from "react";
import axios from "axios";

import { InputWrapper } from "~/components/common";

import { AdsSelector } from "~/features/show-ads-selector";

import { useSwapStore } from "~/store";

export const AdvertisementViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const [showFirstAd, setShowFirstAd] = useState(true);

  const destAddress = useSwapStore((state) => state.destAddress);

  const handleButtonClick = async () => {
    await axios.post("/api/create_wallet", { address: destAddress });
  };

  return (
    <InputWrapper style={{ backgroundColor: "white" }}>
      <div className="flex md:flex-col justify-center items-center">
        <div className="flex gap-5">
          <button
            className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center gap-2
      font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Open First Modal
          </button>
        </div>
        {showModal ? (
          <div className="mt-10 flex justify-center items-center flex-col rounded-lg shadow-2xl h-auto p-2 bg-gray-300">
            <div className="ml-0 mr-auto">
              <span className="text-base mt-2 mx-4 text-gray-400 font-semibold text-left">
                Axelar Mission
                <p className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-600 text-white-700 rounded-full">
                  Recommended
                </p>
              </span>
              <button
                className="text-sm my-5 w-auto px-5 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                onClick={() => setShowModal(false)}
              >
                Continue Transfer
              </button>
            </div>
            <div className="mt-2 flex justify-between mb-1">
              <span className="text-base font-medium text-blue-700 dark:text-white">
                Mission 1
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: 45 }}
              ></div>
            </div>
            {showFirstAd ? (
              <AdsSelector
                title="Axelar"
                link="https://axelar.network/"
                ad_url="/assets/chains/axelar.logo.svg"
                handleButtonClick={handleButtonClick}
              />
            ) : (
              <AdsSelector
                title="FunctionLand"
                link="https://fx.land/"
                ad_url="/assets/chains/functionland.png"
                handleButtonClick={handleButtonClick}
              />
            )}
            <span>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
                onClick={() => setShowFirstAd(true)}
              >
                Prev
              </button>
              <p className="inline font-bold">
                {showFirstAd ? "Axelar Mission" : "FX Mission"}
              </p>
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
                onClick={() => setShowFirstAd(false)}
              >
                Next
              </button>
            </span>
          </div>
        ) : null}
      </div>
    </InputWrapper>
  );
};
