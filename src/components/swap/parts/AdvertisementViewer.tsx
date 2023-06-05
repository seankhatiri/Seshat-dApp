import { getAdvertisement } from "seshat-sdk";

import { InputWrapper } from "~/components/common";

export const AdvertisementViewer = () => {
  const handleAdViewer = async () => {
    const apiKey = "your-api-key";
    const userAddress = "0x1234567890abcdef1234567890abcdef12345678";
    const adResult = await getAdvertisement(apiKey, userAddress);
    console.log(adResult);
    console.log("Hello");
  };
  return (
    <InputWrapper>
      <button onClick={handleAdViewer}> View Ad </button>
    </InputWrapper>
  );
};
