import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Statistics from "./components/Statistics";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/today" element={<Home />}></Route>
        <Route path="/upcoming" element={<Home />}></Route>
        <Route path="/statistics" element={<Statistics />}></Route>
      </Routes>
    </>
  );
}

export default App;
