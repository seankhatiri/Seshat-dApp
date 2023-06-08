import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import { InputWrapper } from "~/components/common";

import { useSwapStore } from "~/store";

export const AdvertisementViewer = () => {
  const [showModal, setShowModal] = useState(false);
  const destAddress = useSwapStore((state) => state.destAddress);

  const Icon = ({ src = "", alt = "" }) => (
    <Image src={src} alt={alt} width={35} height={35} />
  );

  const AxelarIcon = () => (
    <Icon src="/assets/chains/axelar.logo.svg" alt="Axelar" />
  );

  const handleAxelarLink = async () => {
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
            <p className="text-black">What is Axelar? </p>
            <div>
              <AxelarIcon />
            </div>

            <div>
              Missions
              <div className="grid w-80 h-20 rounded bg-primary text-primary-content place-content-center">
                <p className="mt-2">Know more about Axelar </p>
                <Link href="https://axelar.network/" target="_blank">
                  <button
                    onClick={handleAxelarLink}
                    className="text-sm my-2 px-5 w-auto h-auto bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                  >
                    axelar.network
                  </button>
                </Link>
              </div>
              <div className="grid w-80 h-20 rounded bg-accent text-accent-content place-content-center">
                Twitter:
                <p className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-600 text-white-700 rounded-full">
                  Coming Soon
                </p>
              </div>
              <div className="grid w-80 h-20 rounded bg-secondary text-secondary-content place-content-center">
                Cross-chain transaction:
                <p className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-600 text-white-700 rounded-full">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </InputWrapper>
  );
};
