import { StackDivider, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Task from "../Task";
import { useLocation } from "react-router-dom";
import PopoverAgregarTarea from "../PopoverAgregarTarea";
import Footer from "../Footer";

const TaskContainer = ({ tasks, onTasksReload }) => {
  const stringToDate = function (dateString) {
    const dateComponents = dateString.split("-");
    const day = parseInt(dateComponents[0]);
    const month = parseInt(dateComponents[1]) - 1; // Subtract 1 since months are zero-based (0 - 11)
    const year = parseInt(dateComponents[2]);

    return new Date(year, month, day);
  };

  const convertDateFormat = function (dateString) {
    const parts = dateString.split("-");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    return `${year}-${month}-${day}`;
  };

  let location = useLocation();

  const isToday = function (date) {
    const today = new Date();

    if (today.toDateString() === date.toDateString()) {
      return true;
    }

    return false;
  };

  const isUpcoming = function (date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Set the time of today's date to midnight (00:00:00)

    // Compare the time values of the dates
    if (today.getTime() < date.getTime()) {
      return true;
    }

    return false;
  };

  const tasksByCategory = tasks.filter((task) => {
    if (location.pathname === "/today") {
      return isToday(stringToDate(task.fechaFinalizacion));
    } else if (location.pathname === "/upcoming") {
      return isUpcoming(stringToDate(task.fechaFinalizacion));
    } else {
      return true;
    }
  });

  return (
    <>
      <VStack
        marginTop={8}
        divider={<StackDivider borderColor="orange.300" />}
        spacing={4}
        align="stretch"
      >
        {sessionStorage.getItem("role") === "ROLE_VOLUNTARIO"
          ? tasksByCategory
              .sort((a, b) => {
                const dateA = stringToDate(a.fechaFinalizacion);
                const dateB = stringToDate(b.fechaFinalizacion);
                return dateA - dateB;
              })
              .filter((task) => task.voluntario.nombre === "Lucas")
              .map((task) => (
                <Task
                  taskTitle={task.descripcion}
                  taskDate={stringToDate(task.fechaFinalizacion)}
                  taskDateString={convertDateFormat(task.fechaFinalizacion)}
                  taskOwner={
                    task.voluntario.nombre + " " + task.voluntario.apellido
                  }
                  taskId={task.idTarea}
                  onTasksReload={onTasksReload}
                  key={task.idTarea}
                />
              ))
          : tasksByCategory
              .sort((a, b) => {
                const dateA = stringToDate(a.fechaFinalizacion);
                const dateB = stringToDate(b.fechaFinalizacion);
                return dateA - dateB;
              })
              .map((task) => (
                <Task
                  taskTitle={task.descripcion}
                  taskDate={stringToDate(task.fechaFinalizacion)}
                  taskDateString={convertDateFormat(task.fechaFinalizacion)}
                  taskOwner={
                    task.voluntario.nombre + " " + task.voluntario.apellido
                  }
                  taskId={task.idTarea}
                  onTasksReload={onTasksReload}
                  key={task.idTarea}
                />
              ))}
        <PopoverAgregarTarea onTasksReload={onTasksReload} />
      </VStack>
      <Footer />
    </>
  );
};

export default TaskContainer;
