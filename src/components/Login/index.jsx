import {
  Container,
  Image,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Button,
  VStack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Card,
  CardHeader,
  CardBody,
  Heading,
  CardFooter,
  HStack,
} from "@chakra-ui/react";

import { useContext, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import solesLogo from "/public/soles-logo.png";
import axios from "axios";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { AuthContext } from "../CheckSession";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const handleVisibleClick = () => setShow(!show);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const errorNotLoggedIn = searchParams.get("error");

  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    const API_ENDPOINT =
      "https://fundacion-soles-a03e1e3a84ae.herokuapp.com/api/v1/auth/backLogin";
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

      sessionStorage.setItem("role", response.data.roles[0]);

      // Save username to session storage
      sessionStorage.setItem("username", username);

      // Save user to context
      setUser(response.data);

      // Save the token to session storage or state for future use if needed
      sessionStorage.setItem("token", response.data.accessToken);

      // sessionStorage.setItem("role", response.data.role);

      // Redirect to the '/home' route
      navigate("/home");

      // Reset the form
      setUsername("");
      setPassword("");
    } catch (error) {
      // Handle error responses from the API, such as displaying an error message
      console.error(error);

      if (error.response.status === 400) {
        setError("Usuario o contraseña incorrectos");
      } else {
        setError("Error del servidor");
      }
    }
  };

  return (
    <Container centerContent height="100vh" justifyContent="space-around">
      <Card p={6} bgGradient="linear(to-r, #faf5e5, #Faf5e5)" shadow="2xl">
        {/* {errorNotLoggedIn && (
          <Alert
            status="error"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <HStack>
              <AlertIcon />
              <AlertTitle>Error!</AlertTitle>
            </HStack>
            <AlertDescription fontSize={["sm", "sm", "md", "md"]}>
              Debes iniciar sesión para acceder a esta página
            </AlertDescription>
          </Alert>
        )} */}
        <VStack spacing={2}>
          <Image w="15rem" src={solesLogo} p={4}></Image>
          <CardHeader>
            <Heading
              size={["sm", "sm", "md", "md"]}
              color="orange.900"
              fontWeight="bold"
            >
              Sistema de Gestión de Tareas
            </Heading>
          </CardHeader>
          {error && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>{error}</AlertTitle>
            </Alert>
          )}
        </VStack>
        <CardBody>
          <form onSubmit={handleLogin} style={{ textAlign: "center" }}>
            <FormControl isRequired p={4}>
              <FormLabel
                requiredIndicator={false}
                color="orange.900"
                fontSize={["sm", "sm", "md", "md"]}
              >
                Usuario
              </FormLabel>
              <Input
                variant="flushed"
                color="orange.900"
                focusBorderColor="#FFA600"
                borderColor="#FFA600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fontSize={["sm", "sm", "md", "md"]}
              />
            </FormControl>

            <FormControl isRequired p={4}>
              <FormLabel
                requiredIndicator={false}
                color="orange.900"
                fontSize={["sm", "sm", "md", "md"]}
              >
                Contraseña
              </FormLabel>
              <InputGroup>
                <Input
                  type={show ? "text" : "password"}
                  variant="flushed"
                  color="orange.900"
                  focusBorderColor="#FFA600"
                  borderColor="#FFA600"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fontSize={["sm", "sm", "md", "md"]}
                />
                <Button
                  color="orange.500"
                  colorScheme="orange"
                  variant="ghost"
                  size="sm"
                  onClick={handleVisibleClick}
                >
                  {show ? (
                    <ViewOffIcon boxSize={6} />
                  ) : (
                    <ViewIcon boxSize={6} />
                  )}
                </Button>
              </InputGroup>
            </FormControl>
            <Button colorScheme="orange" p={4} my={10} type="submit">
              Iniciar Sesión
            </Button>
          </form>
          <CardFooter></CardFooter>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
