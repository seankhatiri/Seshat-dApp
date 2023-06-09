import Image from "next/image";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Progress,
  Tag,
  Text,
} from "@chakra-ui/react";

interface MissionProps {
  title: string;
  content: any;
  id: string;
}

interface AdsSelectorProps {
  title: string;
  adUrl: string;
  isRecommended: boolean;
  progress: number;
  missions: Array<MissionProps>;
}

export const AdsSelector: React.FC<AdsSelectorProps> = ({
  title,
  adUrl,
  missions,
  isRecommended,
  progress,
}) => {
  const Icon = ({ src = "", alt = "" }) => (
    <Image src={src} alt={alt} width={100} height={100} className="mx-auto" />
  );

  const Ad = () => <Icon src={adUrl} alt="advertisement" />;

  return (
    <Box>
      <HStack justify="space-between">
        <Box py="4">
          <Text as="b" color="black">
            {title} Mission
            {isRecommended ? (
              <Tag variant="solid" colorScheme="blue" mx="2">
                <Text as="b">Recommended </Text>
              </Tag>
            ) : (
              <></>
            )}
          </Text>
        </Box>
      </HStack>
      <Progress value={progress} my="2" />
      <Text as="b" color="black" align="center">
        {title}
      </Text>
      <Box>
        <Ad />
      </Box>
      <Box py="4">
        <Text color="black" as="b">
          Missions
        </Text>
      </Box>
      <Accordion allowToggle>
        {missions.map((mission) => (
          <AccordionItem key={mission.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  <Text color="black">{mission.title}</Text>
                </Box>
                <AccordionIcon as={Button} />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{mission.content}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};
