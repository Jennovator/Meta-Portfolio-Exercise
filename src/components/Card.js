import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

// The Card component will represent a styled card element that takes in 3 props: title, description, and imageSrc
const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component using Chakra UI
  // The card displays a title, description, an image, and a "Learn More" link with a right arrow icon
  return (
    <VStack
      spacing={4}
      borderWidth="1px"
      borderColor="gray.200"
      borderRadius="md"
      p={4}
      alignItems="felx=start"
      backgroundColor="white"
    >
      <Image
        src={imageSrc} atl={title} maxH="200px" objectFit="cover" />
      <Heading as="h2" size="md" color="black" >
        {title}
      </Heading>
      <Text color="grey">{description}</Text>
      <HStack spacing={2} color="blue.500">
        <Text>Learn More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;