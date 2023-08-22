import React from "react";
import { Grid, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { motion } from 'framer-motion';
import useCustomFontStyle from "../hooks/useCustomFontStyle";
import brush from '../images/brush.png';

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";

// Implement the UI for the LandingSection component, use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  // Calling the useCustomFontStyle hook and passing it on to customFontStyle variable 
  const customFontStyle = useCustomFontStyle();

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#d5dadb"
    >
      <Grid
      templateColumns={{ base: "1fr", lg: "1fr 2fr" }}
      gap={10}
      alignItems="center"
      color="black"
    >
      <motion.img
        src="https://i.pravatar.cc/150?img=7"
        alt="Animated Image"
        animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
        }}
        style={{
          width: '70px',
          height: '70px',
          background: 'var(--accent)',
          overflow: "hidden",
          alignContent: "center",
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1
        }}
      />
      
      
      <VStack spacing={3} alignItems="flex-start">
        <motion.h6
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Heading as="h6" size="sm" paddingBottom="2rem" style={customFontStyle} color="#1d2e68">
          {greeting}
        </Heading>
        </motion.h6>
         <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        
      >
        <Heading as="h2" size="xl" 
        style={{
          ...customFontStyle,
          opacity:"85%",
          backgroundImage:`url(${brush})`, 
          backgroundSize:'200px', 
          backgroundPosition:'right', 
          backgroundRepeat:'no-repeat', 
          overflow:'hidden'
        }}>
          {bio1}
        <br></br>
          {bio2}
        </Heading>
      </motion.h2>
      </VStack>
    </Grid>

    </FullScreenSection>
  );
}

export default LandingSection;