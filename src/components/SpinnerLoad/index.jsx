import { Spinner, VStack } from "@chakra-ui/react";
import React from "react";

const SpinnerLoad = () => {
  return (
    <VStack
      marginTop={8}
      alignItems="center"
      justifyContent="center"
      height="50vh"
    >
      <Spinner size="xl" />
    </VStack>
  );
};

export default SpinnerLoad;
