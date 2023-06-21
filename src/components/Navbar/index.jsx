import {
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      alignItems="center"
      bg="transparent"
      h="64px"
      p="40px"
      justifyContent="space-between"
      // position="fixed"
      // top="0"
      // left="0"
      // right="0"
      zIndex={1}
    >
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Categories"
          icon={<HamburgerIcon />}
          variant="ghost"
          colorScheme="orange"
          display={["flex", "flex", "none", "none"]}
        ></MenuButton>
        <MenuList>
          <NavLink to="/home">
            <MenuItem>Inbox</MenuItem>
          </NavLink>
          <NavLink to="/home/today">
            <MenuItem>Hoy</MenuItem>
          </NavLink>
          <NavLink to="/home/upcoming">
            <MenuItem>Más adelante</MenuItem>
          </NavLink>
          <NavLink to="/home/statistics">
            <MenuItem>Estadísticas</MenuItem>
          </NavLink>
        </MenuList>
      </Menu>
      <Spacer display={["flex", "flex", "none", "none"]} />

      <NavLink to="/home">
        <Image
          w="15rem"
          src="src/assets/soles-logo.png"
          m="auto"
          p={10}
        ></Image>
      </NavLink>
      <Spacer />

      <HStack spacing="20px" display={["none", "none", "flex", "flex"]}>
        <NavLink to="/home">
          <Button variant="ghost" colorScheme="orange" size="lg">
            Inbox
          </Button>
        </NavLink>
        <NavLink to="/home/today">
          <Button variant="ghost" colorScheme="orange" size="lg">
            Hoy
          </Button>
        </NavLink>
        <NavLink to="/home/upcoming">
          <Button variant="ghost" colorScheme="orange" size="lg">
            Más adelante
          </Button>
        </NavLink>
        <NavLink to="/home/statistics">
          <Button variant="ghost" colorScheme="orange" size="lg">
            Estadísticas
          </Button>
        </NavLink>
      </HStack>
      <Spacer display={["none", "none", "flex", "flex"]} />
    </Flex>
  );
};

export default Navbar;
