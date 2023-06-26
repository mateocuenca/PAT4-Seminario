import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Divider,
  FocusLock,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import { EditIcon } from "@chakra-ui/icons";
import { Form } from "react-router-dom";
import PopoverForm from "../PopoverModificarTarea";
import PopoverModificarTarea from "../PopoverModificarTarea";

const Task = (props) => {
  const [checked, setChecked] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
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

    console.log(date);

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
    console.log(tomorrow);

    if (tomorrow.toDateString() === date.toDateString()) {
      return true;
    }

    return false;
  };

  return (
    <>
      <HStack gap={4}>
        <Checkbox
          colorScheme="orange"
          size="lg"
          spacing="1rem"
          borderColor="orange.500"
          onChange={toggleCheck}
        ></Checkbox>
        <Text
          color="orange.600"
          fontSize="lg"
          textDecoration={checked ? "line-through" : "none"}
          onClick={onOpen}
          // cursor="pointer"
        >
          {props.taskTitle}
        </Text>
        <Spacer />
        <PopoverModificarTarea
          taskTitle={props.taskTitle}
          taskDateString={props.taskDateString}
        />
        {/* <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modificar Tarea</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>

            <ModalFooter>
              <Button colorScheme="orange" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button colorScheme="orange" variant="ghost">
                Secondary Action
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal> */}
      </HStack>
      <HStack justifyContent="start" py={2} px={10}>
        <Text
          fontSize="sm"
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
          onClick={onOpen}
          cursor="pointer"
        >
          <CalendarTodayIcon sx={{}} />{" "}
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
          fontSize="sm"
          color="orange.500"
          fontWeight="bold"
          display="flex"
          alignItems="center"
          gap={2}
          textDecoration={checked ? "line-through" : "none"}
          onClick={onOpen}
          cursor="pointer"
        >
          <PersonIcon />
          {props.taskOwner}
        </Text>
      </HStack>
    </>
  );
};

export default Task;
