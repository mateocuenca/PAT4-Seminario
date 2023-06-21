import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import Task from "../Task";

const TaskContainer = () => {
  return (
    <VStack
      marginTop={8}
      divider={<StackDivider borderColor="orange.300" />}
      spacing={4}
      align="stretch"
    >
      <Task
        taskTitle="Llevar a los niños al parque"
        taskDate={new Date(2023, 5, 19)}
        taskOwner="Lucas Gomez"
      />
      <Task
        taskTitle="Visitar hospital de niños"
        taskDate={new Date(2023, 5, 20)}
        taskOwner="Juan Perez"
      />
      <Task
        taskTitle="Limpiar cocina"
        taskDate={new Date(2023, 5, 21)}
        taskOwner="Nacho Gomez"
      />
      <Task
        taskTitle="Enviar mensaje de agradecimiento a donantes de la campaña de abril"
        taskDate={new Date(2023, 5, 23)}
        taskOwner="Ivan Gonzalez"
      />
    </VStack>
  );
};

export default TaskContainer;
