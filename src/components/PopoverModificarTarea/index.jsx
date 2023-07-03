import { EditIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";
import React, { forwardRef, useRef, useState } from "react";
import axios from "axios";

const taskData = {};

function formatDate(dateString) {
  const parts = dateString.split("-"); // Split the date string by dashes
  const formattedDate = parts[2] + "-" + parts[1] + "-" + parts[0]; // Rearrange the parts
  return formattedDate;
}

// 1. Create a text input component
const TextInput = forwardRef((props, ref) => {
  const [taskTitle, setTaskTitle] = useState(props.defaultValue);
  return (
    <FormControl>
      <FormLabel
        htmlFor={props.id}
        fontSize={["sm", "sm", "md", "md"]}
        color="orange.800"
      >
        {props.label}
      </FormLabel>
      <Input
        ref={ref}
        id={props.id}
        {...props}
        onChange={(e) => {
          setTaskTitle(e.target.value);
          taskData.descripcion = e.target.value;
        }}
      />
    </FormControl>
  );
});

// 2. Create a date picker component
const DatePicker = forwardRef((props, ref) => {
  const [taskDate, setTaskDate] = useState(props.defaultValue);
  return (
    <FormControl>
      <FormLabel
        htmlFor={props.id}
        fontSize={["sm", "sm", "md", "md"]}
        color="orange.800"
      >
        {props.label}
      </FormLabel>
      <Input
        ref={ref}
        id={props.id}
        {...props}
        type="date"
        onChange={(e) => {
          setTaskDate(e.target.value);
          taskData.fechaFinalizacion = formatDate(e.target.value);
        }}
      />
    </FormControl>
  );
});

// 2. Create the form
const Form = ({
  firstFieldRef,
  onCancel,
  taskTitle,
  taskDateString,
  taskId,
  onTasksReload,
}) => {
  taskData.idTarea = taskId;

  const API_ENDPOINT =
    "https://fundacion-soles-a03e1e3a84ae.herokuapp.com/tareas/" + taskId;

  const handleTaskEdit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    };

    try {
      const response = await axios.put(API_ENDPOINT, taskData, config);
      onCancel();
      onTasksReload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleTaskEdit}>
      <Stack spacing={4}>
        <TextInput
          label="Nombre de la tarea"
          id="taskTitle"
          ref={firstFieldRef}
          defaultValue={taskTitle}
          fontSize={["sm", "sm", "md", "md"]}
          color="orange.900"
        />
        <DatePicker
          label="Fecha de entrega"
          id="dueDate"
          defaultValue={taskDateString}
          color="orange.900"
          fontSize={["sm", "sm", "md", "md"]}
        />
        <ButtonGroup display="flex" justifyContent="flex-end">
          <Button
            variant="outline"
            onClick={onCancel}
            fontSize={["sm", "sm", "md", "md"]}
          >
            Cancelar
          </Button>
          <Button
            colorScheme="orange"
            type="submit"
            fontSize={["sm", "sm", "md", "md"]}
          >
            Modificar
          </Button>
        </ButtonGroup>
      </Stack>
    </form>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverModificarTarea = ({
  taskTitle,
  taskDateString,
  taskId,
  onTasksReload,
}) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef(null);

  return (
    <>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size="sm" icon={<EditIcon />} color="orange.700" />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form
              firstFieldRef={firstFieldRef}
              onCancel={onClose}
              taskTitle={taskTitle}
              taskDateString={taskDateString}
              taskId={taskId}
              onTasksReload={onTasksReload}
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverModificarTarea;
