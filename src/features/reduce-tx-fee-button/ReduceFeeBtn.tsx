import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import { AdvertisementViewer } from "~/components/modal/content/AdvertisementViewer";

import { useSwapStore } from "~/store";

export const ReduceFeeBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const destAddress = useSwapStore((state) => state.destAddress);
  const errorMessage = "Please fill in Destination address field";

  return (
    <>
      <Button
        colorScheme="blue"
        onClick={onOpen}
        isDisabled={Boolean(!destAddress)}
      >
        {Boolean(destAddress) ? "Reduce Gas Fee" : errorMessage}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <AdvertisementViewer />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Continue Transfer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
