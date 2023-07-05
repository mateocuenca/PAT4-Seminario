import React, { useState } from "react";
import {
  Checkbox,
  HStack,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import PersonIcon from "@mui/icons-material/Person";
import { CalendarIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import PopoverModificarTarea from "../PopoverModificarTarea";
import axios from "axios";

const Task = (props) => {
  const [checked, setChecked] = useState(false);
  const toggleCheck = () => setChecked(!checked);
  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  const isToday = function (date) {
    const today = new Date();

    if (today.toDateString() === date.toDateString()) {
      return true;
    }

    return false;
  };

  const isYesterday = function (date) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (yesterday.toDateString() === date.toDateString()) {
      return true;
    }

    return false;
  };

  const isPast = function (date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time of today's date to midnight (00:00:00)

    // Compare the time values of the dates
    if (today.getTime() > date.getTime()) {
      return true;
    }

    return false;
  };

  const isTomorrow = function (date) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    if (tomorrow.toDateString() === date.toDateString()) {
      return true;
    }

    return false;
  };

  const handleDeleteTask = async () => {
    const API_ENDPOINT =
      "https://fundacion-soles-a03e1e3a84ae.herokuapp.com/tareas/" +
      props.taskId;

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    try {
      const response = await axios.delete(API_ENDPOINT, config);
      console.log(response);
      props.onTasksReload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HStack gap={4}>
        <Checkbox
          colorScheme="orange"
          size="lg"
          spacing="1rem"
          borderColor="orange.600"
          onChange={toggleCheck}
        ></Checkbox>
        <Text
          color="orange.700"
          fontSize={["sm", "sm", "md", "md"]}
          textDecoration={checked ? "line-through" : "none"}
        >
          {props.taskTitle}
        </Text>
        <Spacer />
        <PopoverModificarTarea
          taskTitle={props.taskTitle}
          taskDateString={props.taskDateString}
          taskId={props.taskId}
          onTasksReload={props.onTasksReload}
        />
        <IconButton
          aria-label="Eliminar tarea"
          icon={<DeleteIcon />}
          size="sm"
          color="red"
          onClick={handleDeleteTask}
          display={
            sessionStorage.getItem("role") === "ROLE_COORDINADOR"
              ? "flex"
              : "none"
          }
        />
      </HStack>
      <HStack justifyContent="start" py={2} px={10}>
        <Text
          fontSize={["sm", "sm", "sm", "sm"]}
          color={
            isToday(props.taskDate)
              ? "green"
              : isYesterday(props.taskDate) || isPast(props.taskDate)
              ? "red"
              : isTomorrow(props.taskDate)
              ? "blue"
              : "purple"
          }
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
          textDecoration={checked ? "line-through" : "none"}
        >
          <CalendarIcon />{" "}
          {isToday(props.taskDate)
            ? "Hoy"
            : isYesterday(props.taskDate)
            ? "Ayer"
            : isTomorrow(props.taskDate)
            ? "Mañana"
            : `${
                dayNames[props.taskDate.getDay()]
              } ${props.taskDate.getDate()}/${
                String(props.taskDate.getMonth()).length > 1
                  ? props.taskDate.getMonth() + 1
                  : "0" + (props.taskDate.getMonth() + 1)
              }`}
        </Text>
        <Text
          fontSize={("xs", "sm", "sm", "sm")}
          color="orange.500"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
          textDecoration={checked ? "line-through" : "none"}
        >
          <PersonIcon sx={{ fontSize: "20px" }} />
          {props.taskOwner}
        </Text>
      </HStack>
    </>
  );
};

export default Task;
