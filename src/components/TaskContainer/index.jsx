import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import Task from "../Task";
import { useParams } from "react-router-dom";
import PopoverAgregarTarea from "../PopoverAgregarTarea";

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

  let { category } = useParams();

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
    if (category === "today") {
      return isToday(stringToDate(task.fechaFinalizacion));
    } else if (category === "upcoming") {
      return isUpcoming(stringToDate(task.fechaFinalizacion));
    } else {
      return true;
    }
  });

  return (
    <VStack
      marginTop={8}
      divider={<StackDivider borderColor="orange.300" />}
      spacing={4}
      align="stretch"
    >
      {tasksByCategory
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
            taskOwner={task.nombreVoluntario}
            taskId={task.idTarea}
            onTasksReload={onTasksReload}
            key={task.idTarea}
          />
        ))}
      <PopoverAgregarTarea />
    </VStack>
  );
};

export default TaskContainer;
