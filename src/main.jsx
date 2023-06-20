import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Box bg="#faf5e5" minHeight="100vh">
          <App />
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
