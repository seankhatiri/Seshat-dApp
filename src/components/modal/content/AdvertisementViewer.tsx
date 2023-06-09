import { Box, Button, Link, Tag, Text } from "@chakra-ui/react";
import axios from "axios";
import Carousel from "react-multi-carousel";

import { AdsSelector } from "~/features/show-ads-selector";

import { useSwapStore } from "~/store";

import "react-multi-carousel/lib/styles.css";
import { useState } from "react";

export const AdvertisementViewer = () => {
  const [progress, setProgress] = useState<number>(0);

  // TODO: Get # of Ads programatically
  const NUM_ADS = 2;
  const MAX_PROGRESS = 100;

  const destAddress = useSwapStore((state) => state.destAddress);

  const AdButton = ({ link }: { link: string }) => {
    return (
      <Text color="blue">
        <Link href={link} target="_blank">
          <Button
            onClick={handleButtonClick}
            variant="outline"
            colorScheme="blue"
          >
            {link}
          </Button>
        </Link>
      </Text>
    );
  };
  const handleButtonClick = async () => {
    if (destAddress !== "") {
      await axios.post("/api/create_wallet", { address: destAddress });
      setProgress(Math.min(MAX_PROGRESS, progress + MAX_PROGRESS / NUM_ADS));
      alert("Congratulations! Your gas fee reduction reward will arrive soon!");
    } else {
      alert(
        "Input your destination address to be viable for the reducing gas fee reward"
      );
    }
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box bg="white">
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <AdsSelector
            title="Axelar"
            progress={progress}
            isRecommended={true}
            adUrl="/assets/ui/axelar.logo.svg"
            missions={[
              {
                title: "Know more about Axelar",
                content: <AdButton link={"https://axelar.network/"} />,
                id: "axelar-1",
              },
              {
                title: "Follow Axelar Twitter",
                content: (
                  <Tag variant="solid" colorScheme="blue">
                    Coming Soon
                  </Tag>
                ),
                id: "axelar-2",
              },
              {
                title: "Do a cross-chain transaction",
                content: (
                  <Tag variant="solid" colorScheme="blue">
                    Coming Soon
                  </Tag>
                ),
                id: "axelar-3",
              },
            ]}
          />
        </Box>
        <Box boxShadow="xl" p="6" rounded="md" bg="white">
          <AdsSelector
            title="FunctionLand"
            progress={progress}
            isRecommended={false}
            adUrl="/assets/chains/functionland.png"
            missions={[
              {
                title: "Know more about FunctionLand",
                content: <AdButton link={"https://fx.land/"} />,
                id: "functionLand-1",
              },
              {
                title: "Follow FX Twitter",
                content: (
                  <Tag variant="solid" colorScheme="blue">
                    Coming Soon
                  </Tag>
                ),
                id: "functionLand-2",
              },
              {
                title: "Buy a FunctionLand storage device",
                content: (
                  <Tag variant="solid" colorScheme="blue">
                    Coming Soon
                  </Tag>
                ),
                id: "functionLand-3",
              },
            ]}
          />
        </Box>
      </Carousel>
    </Box>
  );
};
