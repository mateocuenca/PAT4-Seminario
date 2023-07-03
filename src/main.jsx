import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Box bgGradient="linear(to-r, #faf5e5, #faf2ee)" minHeight="100vh">
          <App />
        </Box>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
