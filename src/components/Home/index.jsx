import Navbar from "../Navbar";
import { Heading, Container } from "@chakra-ui/react";
import TaskContainer from "../TaskContainer";
import { useEffect, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await fetch(
      "https://pat-4-database.vercel.app/tasks.json"
    );
    const data = await response.json();
    setTasks(data.tareas);
    console.log(data.tareas);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Navbar />
      <Container alignItems="left" marginTop={4} color="orange.500" px={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          Inbox
        </Heading>
        <TaskContainer tasks={tasks} />
      </Container>
    </>
  );
};

export default Home;
