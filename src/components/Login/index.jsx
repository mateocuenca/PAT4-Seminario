import {
  Container,
  Image,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  VStack,
} from "@chakra-ui/react";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useState } from "react";
import { Form, NavLink } from "react-router-dom";
import solesLogo from "/public/soles-logo.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleVisibleClick = () => setShow(!show);

  const API_ENDPOINT =
    "https://fundacion-soles-a03e1e3a84ae.herokuapp.com/api/v1/auth/backLogin";

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Create an object containing the username and password
    const loginData = {
      usernameOrEmail: username,
      password: password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      // Send a POST request to the login API
      const response = await axios.post(API_ENDPOINT, loginData, config);

      // Process the response and handle successful login
      // For example, you can redirect the user to a dashboard page
      console.log(response.data); // Assuming the API returns some data

      // Reset the form
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle error responses from the API, such as displaying an error message
      console.error(error);
    }
  };

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
      <form onSubmit={handleLogin}>
        <FormControl isRequired p={4}>
          <FormLabel requiredIndicator={false} color="#FF7600">
            Usuario
          </FormLabel>
          <Input
            variant="flushed"
            color="orange.500"
            focusBorderColor="#FFA600"
            borderColor="#FFA600"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              color="orange.500"
              colorScheme="orange"
              variant="ghost"
              size="sm"
              onClick={handleVisibleClick}
            >
              {<VisibilityIcon />}
            </Button>
          </InputGroup>
        </FormControl>
        <Button colorScheme="orange" p={4} my={10} type="submit">
          Iniciar Sesión
        </Button>
      </form>
    </Container>
  );
};

export default Login;
