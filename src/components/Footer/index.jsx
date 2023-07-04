import { Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <VStack
      as="footer"
      marginTop={8}
      paddingBottom={4}
      alignItems="center"
      spacing={4}
    >
      <Text fontSize="sm" color="gray.500">
        &copy; 2023 - Grupo PAT4 Seminario
      </Text>
    </VStack>
  );
};

export default Footer;
