import Navbar from "../Navbar";
import {
  Heading,
  Container,
  Spinner,
  useDisclosure,
  ScaleFade,
} from "@chakra-ui/react";
import TaskContainer from "../TaskContainer";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import SpinnerLoad from "../SpinnerLoad";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  let { category } = useParams();

  let location = useLocation();

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
          {location.pathname === "/today"
            ? "Hoy"
            : location.pathname === "/upcoming"
            ? "Más Adelante"
            : "Todas las tareas"}
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
