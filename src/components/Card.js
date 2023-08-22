import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import useCustomFontStyle from "../hooks/useCustomFontStyle";
import { motion } from "framer-motion";

// The Card component will represent a styled card element that takes in 3 props: title, description, and imageSrc
const Card = ({ title, description, imageSrc }) => {
  // Calling the useCustomFontStyle hook and passing it on to customFontStyle variable 
  const customFontStyle = useCustomFontStyle();

  // Implement the UI for the Card component using Chakra UI
  // The card displays a title, description, an image, and a "Learn More" link with a right arrow icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <VStack
        spacing={4}
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="3xl"
        shadow="lg"
        maxWidth="25.25rem"
        height="28.25rem"
        gap="1.25rem"
        p={4}
        alignItems="flex=start"
        backgroundColor="#EDEFEE" // Secondary Accent Color
        opacity="80%"
        style={customFontStyle}
      >
        <Image src={imageSrc} alt={title} maxH="200px" color="grey" />

        <Heading as="h6" size="sm" color="#1f0318">
          {title}
        </Heading>
        <Text color="#1f0318" textAlign="justify">{description}</Text>

        <HStack spacing={2}>
          <Text color="#1c6b85">See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#1c6b85" />
        </HStack>
      </VStack>
    </motion.div>
  );
};

export default Card;