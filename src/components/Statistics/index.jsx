import React from "react";
import Navbar from "../Navbar";
import { Container, Heading, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";

const Statistics = () => {
  return (
    <>
      <Navbar />
      <Container
        alignItems="left"
        marginTop={[10, 20, 20, 20, 20]}
        color="orange.700"
        px={6}
      >
        <Heading
          as="h1"
          size={["lg", "lg", "xl", "xl"]}
          color="orange.900"
          noOfLines={1}
        >
          Estadísticas
        </Heading>
        <Text as="h2" fontSize={["md", "md", "lg", "lg"]} p={4}>
          Sitio en Construcción
          {<InfoIcon ml={2} />}
        </Text>
      </Container>
    </>
  );
};

export default Statistics;
