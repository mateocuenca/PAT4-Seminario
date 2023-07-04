import React from "react";
import Navbar from "../Navbar";
import {
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
  Select,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableCaption,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Footer from "../Footer";

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
        {/* <Text as="h2" fontSize={["md", "md", "lg", "lg"]} p={4}>
          Sitio en Construcción
          {<InfoIcon ml={2} />}
        </Text> */}
        <StatGroup marginTop={6}>
          <Stat>
            <StatNumber>2400</StatNumber>
            <StatLabel fontSize={16}>Tareas completadas</StatLabel>
            <StatHelpText>
              <StatArrow type="increase" />
              23.36% más respecto al mes anterior
            </StatHelpText>
          </Stat>
        </StatGroup>

        <Tabs
          isFitted
          variant="soft-rounded"
          colorScheme="orange"
          marginTop={4}
        >
          <TabList mb="1em">
            <Tab>Diariamente</Tab>
            <Tab>Semanalmente</Tab>
          </TabList>
          <Center>
            <Select
              variant="outline"
              width="50%"
              size={["sm", "sm", "sm", "sm"]}
              borderColor="orange"
              focusBorderColor="#FFA600"
              borderRadius="full"
              fontSize={["sm", "sm", "md", "md"]}
              defaultValue={"option1"}
              marginTop={2}
            >
              <option value="option1">Todas las áreas</option>
              <option value="option1">Área 1</option>
              <option value="option2">Área 2</option>
              <option value="option3">Área 3</option>
            </Select>
          </Center>
          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table
                  variant="striped"
                  colorScheme="orange"
                  size={["sm", "md", "md", "md"]}
                  marginTop={2}
                  shadow="lg"
                >
                  <TableCaption>
                    200 tareas completadas en los últimos 7 días
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Día</Th>
                      <Th isNumeric>Completadas</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Domingo 02/07</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Sábado 01/07</Td>
                      <Td isNumeric>30</Td>
                    </Tr>
                    <Tr>
                      <Td>Viernes 30/06</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Jueves 29/06</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Miércoles 28/06</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Martes 27/06</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Lunes 26/06</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th></Th>
                      <Th isNumeric>En Total: 200</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer>
                <Table
                  variant="striped"
                  colorScheme="orange"
                  size={["sm", "md", "md", "md"]}
                >
                  <TableCaption>
                    680 tareas completadas en los últimos 30 días
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Día</Th>
                      <Th isNumeric>Completadas</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Del 25/06 al 02/07</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Del 25/06 al 02/07</Td>
                      <Td isNumeric>30</Td>
                    </Tr>
                    <Tr>
                      <Td>Del 25/06 al 02/07</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                    <Tr>
                      <Td>Del 25/06 al 02/07</Td>
                      <Td isNumeric>40</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th></Th>
                      <Th isNumeric>En Total: 680</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
};

export default Statistics;
