import {
  Container,
  Image,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
} from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import solesLogo from "/public/soles-logo.png";

const Login = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);
  return (
    <Container centerContent>
      <Image
        // objectFit="cover"
        w="15rem"
        src={solesLogo}
        m="auto"
        p={4}
        pt="20vh"
      ></Image>
      <FormControl isRequired p={4}>
        <FormLabel requiredIndicator={false} color="#FF7600">
          Usuario
        </FormLabel>
        <Input
          variant="flushed"
          color="orange.500"
          focusBorderColor="#FFA600"
          borderColor="#FFA600"
        />
      </FormControl>

      <FormControl isRequired p={4}>
        <FormLabel requiredIndicator={false} color="#FF7600">
          Contraseña
        </FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            variant="flushed"
            color="orange.500"
            focusBorderColor="#FFA600"
            borderColor="#FFA600"
          />
          <Button
            color="orange.500"
            colorScheme="orange"
            variant="ghost"
            size="sm"
            onClick={handleClick}
          >
            {<VisibilityIcon />}
          </Button>
        </InputGroup>
      </FormControl>
      <NavLink to="/home">
        <Button colorScheme="orange" p={4} my={10} type="submit">
          Iniciar Sesión
        </Button>
      </NavLink>
    </Container>
  );
};

export default Login;
