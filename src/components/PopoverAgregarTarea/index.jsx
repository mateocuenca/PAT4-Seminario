import { EditIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import FocusLock from "react-focus-lock";
import React, { forwardRef, useRef } from "react";

// 1. Create a text input component
const TextInput = forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} />
    </FormControl>
  );
});

// 2. Create a date picker component
const DatePicker = forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Input ref={ref} id={props.id} {...props} type="date" />
    </FormControl>
  );
});

// 3. Create a volunteer select component
const VolunteerSelect = forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={props.id}>{props.label}</FormLabel>
      <Select
        ref={ref}
        id={props.id}
        {...props}
        placeholder="Seleccionar voluntario"
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    </FormControl>
  );
});

// 2. Create the form
const Form = ({ firstFieldRef, onCancel, taskTitle, taskDateString }) => {
  return (
    <Stack spacing={4}>
      <TextInput
        label="Nombre de la tarea"
        id="taskTitle"
        ref={firstFieldRef}
        defaultValue={taskTitle}
      />
      <DatePicker
        label="Fecha de entrega"
        id="dueDate"
        defaultValue={taskDateString}
      />
      <VolunteerSelect label="Voluntario" id="volunteer" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button colorScheme="orange">Agregar Tarea</Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverAgregarTarea = ({ taskTitle, taskDateString }) => {
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
          <Button rightIcon={<EditIcon />} colorScheme="orange">
            Agregar Tarea
          </Button>
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
            />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default PopoverAgregarTarea;
