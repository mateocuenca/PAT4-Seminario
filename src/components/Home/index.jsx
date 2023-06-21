import Navbar from "../Navbar";
import { Heading, Container } from "@chakra-ui/react";
import TaskContainer from "../TaskContainer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container alignItems="left" marginTop={4} color="orange.500" px={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          Inbox
        </Heading>
        <TaskContainer />
      </Container>
    </>
  );
};

export default Home;
