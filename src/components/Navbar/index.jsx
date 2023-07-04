import {
  Flex,
  Button,
  Spacer,
  HStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import solesLogo from "/public/soles-logo.png";
import { useRef } from "react";
import PersonIcon from "@mui/icons-material/Person";
import InsightsIcon from "@mui/icons-material/Insights";
import TodayIcon from "@mui/icons-material/Today";
import AssignmentIcon from "@mui/icons-material/Assignment";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LogoutIcon from "@mui/icons-material/Logout";
const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex
      as="nav"
      alignItems="center"
      h="64px"
      p="40px"
      paddingTop={["100px", "100px", "120px", "120px", "120px"]}
      justifyContent="center"
    >
      <VStack
        gap={4}
        alignItems="stretch"
        width={["100%", "100%", "80%", "70%", "45%"]}
      >
        <Image
          src={solesLogo}
          height={["50px", "40px", "50px", "60px"]}
          display={["flex", "none", "none", "none"]}
          objectFit="cover"
          alt="Logo de la fundación Soles"
          alignSelf="center"
        />
        <HStack>
          <Image
            src={solesLogo}
            height={["40px", "40px", "50px", "60px"]}
            display={["none", "flex", "flex", "flex"]}
            objectFit="cover"
            alt="Logo de la fundación Soles"
          />
          <Button
            leftIcon={<HamburgerIcon />}
            colorScheme="orange"
            variant="ghost"
            display={["flex", "none", "none", "none"]}
            ref={btnRef}
            onClick={onOpen}
            fontSize="35px"
            _hover={{
              background: "none",
              color: "orange.500",
            }}
            alignSelf="flex-start"
          ></Button>
          <Spacer />

          <Menu>
            <MenuButton
              as={Button}
              fontSize={("xs", "sm", "sm", "sm")}
              color="orange.900"
              bg="orange.200"
              leftIcon={<PersonIcon />}
              _active={{
                background: "none",
              }}
              _hover={{
                background: "none",
                fontWeight: "bold",
              }}
            >
              {`  Hola ${sessionStorage.getItem("username")}!`}
            </MenuButton>
            <MenuList>
              <NavLink to="/login">
                {({ isActive }) => {
                  return (
                    <MenuItem
                      variant="ghost"
                      color={isActive ? "orange.700" : "orange.500"}
                      fontSize={["xs", "xs", "md", "md"]}
                      fontWeight={isActive ? "bold" : "normal"}
                      _hover={{
                        background: "none",
                        color: "orange.500",
                      }}
                    >
                      {<LogoutIcon sx={{ marginRight: "8px" }} />}
                      Cerrar Sesión
                    </MenuItem>
                  );
                }}
              </NavLink>
            </MenuList>
          </Menu>
        </HStack>
        <Divider borderColor="orange.200" />

        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#faf5e5">
            <DrawerCloseButton color="orange.900" />
            <DrawerHeader color="orange.900">Menú</DrawerHeader>

            <DrawerBody>
              <VStack alignItems="left">
                <NavLink to="/home">
                  {({ isActive }) => {
                    return (
                      <Button
                        variant="ghost"
                        color={isActive ? "orange.700" : "orange.500"}
                        size={["md", "md", "md", "md"]}
                        onClick={onClose}
                        borderRadius={0}
                        leftIcon={<AssignmentIcon />}
                        fontWeight={isActive ? "bold" : "normal"}
                        borderBottom={isActive ? "2px solid brown" : "none"}
                      >
                        Todas
                      </Button>
                    );
                  }}
                </NavLink>
                <NavLink to="/today">
                  {({ isActive }) => {
                    return (
                      <Button
                        variant="ghost"
                        color={isActive ? "orange.700" : "orange.500"}
                        size={["md", "md", "md", "md"]}
                        onClick={onClose}
                        borderRadius={0}
                        leftIcon={<TodayIcon />}
                        fontWeight={isActive ? "bold" : "normal"}
                        borderBottom={isActive ? "2px solid brown" : "none"}
                      >
                        Hoy
                      </Button>
                    );
                  }}
                </NavLink>
                <NavLink to="/upcoming">
                  {({ isActive }) => {
                    return (
                      <Button
                        variant="ghost"
                        color={isActive ? "orange.700" : "orange.500"}
                        size={["md", "md", "md", "md"]}
                        onClick={onClose}
                        borderRadius={0}
                        leftIcon={<WatchLaterIcon />}
                        fontWeight={isActive ? "bold" : "normal"}
                        borderBottom={isActive ? "2px solid brown" : "none"}
                      >
                        Más Adelante
                      </Button>
                    );
                  }}
                </NavLink>
                <NavLink to="/statistics">
                  {({ isActive }) => {
                    return (
                      <Button
                        variant="ghost"
                        color={isActive ? "orange.700" : "orange.500"}
                        size={["md", "md", "md", "md"]}
                        onClick={onClose}
                        borderRadius={0}
                        leftIcon={<InsightsIcon />}
                        fontWeight={isActive ? "bold" : "normal"}
                        borderBottom={isActive ? "2px solid brown" : "none"}
                      >
                        Estadísticas
                      </Button>
                    );
                  }}
                </NavLink>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <HStack
          display={["none", "flex", "flex", "flex"]}
          paddingTop="20px"
          justifyContent="center"
        >
          <NavLink to="/home">
            {({ isActive }) => {
              return (
                <VStack gap={0}>
                  <AssignmentIcon
                    sx={isActive ? { color: "brown" } : { color: "#D27D2D" }}
                  />
                  <Button
                    variant="ghost"
                    color={isActive ? "orange.700" : "orange.500"}
                    size={["xs", "xs", "md", "md"]}
                    width="120px"
                    borderRadius={0}
                    borderBottom={isActive ? "2px solid brown" : "none"}
                    transition="width 0.5s ease"
                    _hover={{
                      background: "none",
                    }}
                    _before={{
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : 0,
                      height: isActive ? 0 : "2px",
                      background: "#D27D2D",
                      transition: "width 0.5s ease",
                    }}
                    _hover={{
                      _before: {
                        width: "100%",
                      },
                    }}
                    _active={{
                      background: "none",
                    }}
                    fontSize={("xs", "sm", "sm", "sm")}
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    Todas
                  </Button>
                </VStack>
              );
            }}
          </NavLink>
          <NavLink to="/today">
            {({ isActive }) => {
              return (
                <VStack gap={0}>
                  <TodayIcon
                    sx={isActive ? { color: "brown" } : { color: "#D27D2D" }}
                  />
                  <Button
                    variant="ghost"
                    color={isActive ? "orange.700" : "orange.500"}
                    size={["xs", "xs", "md", "md"]}
                    width="120px"
                    borderRadius={0}
                    borderBottom={isActive ? "2px solid brown" : "none"}
                    transition="width 0.5s ease"
                    _hover={{
                      background: "none",
                    }}
                    _before={{
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : 0,
                      height: isActive ? 0 : "2px",
                      background: "#D27D2D",
                      transition: "width 0.5s ease",
                    }}
                    _hover={{
                      _before: {
                        width: "100%",
                      },
                    }}
                    _active={{
                      background: "none",
                    }}
                    fontSize={("xs", "sm", "sm", "sm")}
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    Hoy
                  </Button>
                </VStack>
              );
            }}
          </NavLink>
          <NavLink to="/upcoming">
            {({ isActive }) => {
              return (
                <VStack gap={0}>
                  <WatchLaterIcon
                    sx={isActive ? { color: "brown" } : { color: "#D27D2D" }}
                  />
                  <Button
                    variant="ghost"
                    color={isActive ? "orange.700" : "orange.500"}
                    size={["xs", "xs", "md", "md"]}
                    width="120px"
                    borderRadius={0}
                    borderBottom={isActive ? "2px solid brown" : "none"}
                    transition="width 0.5s ease"
                    _hover={{
                      background: "none",
                    }}
                    _before={{
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : 0,
                      height: isActive ? 0 : "2px",
                      background: "#D27D2D",
                      transition: "width 0.5s ease",
                    }}
                    _hover={{
                      _before: {
                        width: "100%",
                      },
                    }}
                    _active={{
                      background: "none",
                    }}
                    fontSize={("xs", "sm", "sm", "sm")}
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    Más Adelante
                  </Button>
                </VStack>
              );
            }}
          </NavLink>
          <NavLink to="/statistics">
            {({ isActive }) => {
              return (
                <VStack gap={0}>
                  <InsightsIcon
                    sx={isActive ? { color: "brown" } : { color: "#D27D2D" }}
                  />
                  <Button
                    variant="ghost"
                    color={isActive ? "orange.700" : "orange.500"}
                    size={["xs", "xs", "md", "md"]}
                    width="120px"
                    borderRadius={0}
                    borderBottom={isActive ? "2px solid brown" : "none"}
                    transition="width 0.5s ease"
                    _hover={{
                      background: "none",
                    }}
                    _before={{
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : 0,
                      height: isActive ? 0 : "2px",
                      background: "#D27D2D",
                      transition: "width 0.5s ease",
                    }}
                    _hover={{
                      _before: {
                        width: "100%",
                      },
                    }}
                    _active={{
                      background: "none",
                    }}
                    fontSize={("xs", "sm", "sm", "sm")}
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    Estadísticas
                  </Button>
                </VStack>
              );
            }}
          </NavLink>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Navbar;
