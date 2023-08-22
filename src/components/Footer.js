import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import useCustomFontStyle from "../hooks/useCustomFontStyle";

const Footer = () => {
  // Calling the useCustomFontStyle hook and passing it on to customFontStyle variable 
  const customFontStyle = useCustomFontStyle();

  return (
    <Box backgroundColor="#18181b" style={customFontStyle}>
      <footer>
        <Flex
          margin="0 auto"
          px={12}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
        >
          <p>Pete • © 2023</p>
        </Flex>
      </footer>
    </Box>
  );
};
export default Footer;
