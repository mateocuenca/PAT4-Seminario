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
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button colorScheme="orange">Modificar</Button>
      </ButtonGroup>
    </Stack>
  );
};

// 3. Create the Popover
// Ensure you set `closeOnBlur` prop to false so it doesn't close on outside click
const PopoverModificarTarea = ({ taskTitle, taskDateString }) => {
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
          <IconButton size="sm" icon={<EditIcon />} color="orange.500" />
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

export default PopoverModificarTarea;
