import Navbar from "../Navbar";
import { Heading, Container, Spinner } from "@chakra-ui/react";
import TaskContainer from "../TaskContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SpinnerLoad from "../SpinnerLoad";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  let { category } = useParams();

  const getTasks = async () => {
    const API_ENDPOINT =
      "https://fundacion-soles-a03e1e3a84ae.herokuapp.com/tareas";

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    try {
      const response = await axios.get(API_ENDPOINT, config);
      setTasks(response.data);
      // Set loading to false when the tasks are retrieved
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onTasksReload = () => {
    setLoading(true); // Set loading to true to show the spinner
    getTasks(); // Reload tasks by calling the getTasks function
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <Navbar />
      <Container alignItems="left" marginTop={10} color="orange.500" px={6}>
        <Heading as="h1" size="3xl" noOfLines={1}>
          {category === "today"
            ? "Hoy"
            : category === "upcoming"
            ? "Más Adelante"
            : "Mis Tareas"}
        </Heading>
        {loading ? (
          <SpinnerLoad />
        ) : (
          <TaskContainer tasks={tasks} onTasksReload={onTasksReload} />
        )}
      </Container>
    </>
  );
};

export default Home;
