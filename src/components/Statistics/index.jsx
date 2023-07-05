import React, { useContext, useState } from "react";
import Navbar from "../Navbar";
import {
  CardBody,
  CardHeader,
  Center,
  Container,
  Heading,
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
import { AuthContext } from "../CheckSession";
import { Navigate } from "react-router-dom";
import Select from "react-select";

const Statistics = () => {
  const { user } = useContext(AuthContext);

  // if (!user) {
  //   return (
  //     <>
  //       <Navigate to="/login/?error=notLoggedIn" replace />;
  //     </>
  //   );
  // }

  const [select, setSelect] = useState({});

  const handleSelectChange = (selectedOption) => {
    setSelect(selectedOption.value);
  };

  const optionsVoluntario = [
    {
      value: {
        dom: 5,
        sab: 4,
        vie: 3,
        jue: 2,
        mie: 4,
        mar: 3,
        lun: 5,
        sem4: 16,
        sem3: 12,
        sem2: 15,
        sem1: 14,
        totalSemanal: 19,
        totalMensual: 57,
      },
      label: "Lucas Gomez",
    },
  ];

  const optionsCoordinador = [
    {
      value: {
        dom: 5,
        sab: 5,
        vie: 8,
        jue: 8,
        mie: 7,
        mar: 9,
        lun: 7,
        sem4: 36,
        sem3: 31,
        sem2: 28,
        sem1: 30,
        totalSemanal: 42,
        totalMensual: 125,
      },
      label: "Todas los voluntarios",
    },
    {
      value: {
        dom: 3,
        sab: 2,
        vie: 4,
        jue: 3,
        mie: 4,
        mar: 5,
        lun: 4,
        sem4: 19,
        sem3: 16,
        sem2: 15,
        sem1: 14,
        totalSemanal: 22,
        totalMensual: 64,
      },
      label: "Lucas Gomez",
    },
    {
      value: {
        dom: 2,
        sab: 3,
        vie: 4,
        jue: 5,
        mie: 3,
        mar: 4,
        lun: 3,
        sem4: 17,
        sem3: 15,
        sem2: 13,
        sem1: 16,
        totalSemanal: 20,
        totalMensual: 61,
      },
      label: "Silvia Montes",
    },
  ];

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
            <StatHelpText marginTop={4}>
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
            {/* <Select
              variant="outline"
              width="50%"
              size={["sm", "sm", "sm", "sm"]}
              borderColor="orange"
              focusBorderColor="#FFA600"
              borderRadius="full"
              fontSize={["sm", "sm", "md", "md"]}
              defaultValue={"option1"}
              marginTop={2}
              display={
                sessionStorage.getItem("role") === "ROLE_COORDINADOR"
                  ? "flex"
                  : "none"
              }
            >
              <option value="option1">Todos los voluntarios</option>
              <option value="option1">Lucas Gomez</option>
              <option value="option2">Silvia Montes</option>
            </Select> */}
            <Select
              placeholder={
                sessionStorage.getItem("role") === "ROLE_COORDINADOR"
                  ? "Seleccione un área"
                  : "Seleccione un voluntario"
              }
              name="volunteerSelect"
              options={
                sessionStorage.getItem("role") === "ROLE_COORDINADOR"
                  ? optionsCoordinador
                  : optionsVoluntario
              }
              onChange={handleSelectChange}
            ></Select>
          </Center>
          <TabPanels>
            <TabPanel>
              <TableContainer>
                <Table
                  variant="striped"
                  colorScheme="orange"
                  size={["sm", "md", "md", "md"]}
                  marginTop={2}
                  shadow="xl"
                  border="1px"
                  borderColor="orange.100"
                >
                  <TableCaption>
                    {select.totalSemanal} tareas completadas en los últimos 7
                    días
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Día</Th>
                      <Th isNumeric>Completadas</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Martes 04/07</Td>
                      <Td isNumeric>{select.mar}</Td>
                    </Tr>
                    <Tr>
                      <Td>Lunes 03/07</Td>
                      <Td isNumeric>{select.lun}</Td>
                    </Tr>
                    <Tr>
                      <Td>Domingo 02/07</Td>
                      <Td isNumeric>{select.mie}</Td>
                    </Tr>
                    <Tr>
                      <Td>Sábado 01/07</Td>
                      <Td isNumeric>{select.sab}</Td>
                    </Tr>
                    <Tr>
                      <Td>Viernes 30/06</Td>
                      <Td isNumeric>{select.vie}</Td>
                    </Tr>
                    <Tr>
                      <Td>Jueves 29/06</Td>
                      <Td isNumeric>{select.jue}</Td>
                    </Tr>
                    <Tr>
                      <Td>Miércoles 28/06</Td>
                      <Td isNumeric>{select.dom}</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th></Th>
                      <Th isNumeric>En Total: {select.totalSemanal}</Th>
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
                  shadow="xl"
                  border="1px"
                  borderColor="orange.100"
                >
                  <TableCaption>
                    {select.totalMensual} tareas completadas en los últimos 30
                    días
                  </TableCaption>
                  <Thead>
                    <Tr>
                      <Th>Día</Th>
                      <Th isNumeric>Completadas</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td>Del 27/06 al 04/07</Td>
                      <Td isNumeric>{select.sem4}</Td>
                    </Tr>
                    <Tr>
                      <Td>Del 19/06 al 26/06</Td>
                      <Td isNumeric>{select.sem3}</Td>
                    </Tr>
                    <Tr>
                      <Td>Del 11/06 al 18/06</Td>
                      <Td isNumeric>{select.sem2}</Td>
                    </Tr>
                    <Tr>
                      <Td>Del 03/06 al 10/06</Td>
                      <Td isNumeric>{select.sem1}</Td>
                    </Tr>
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th></Th>
                      <Th isNumeric>En Total: {select.totalMensual}</Th>
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
