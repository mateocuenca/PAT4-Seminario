import Home from "./components/Home";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import Statistics from "./components/Statistics";
import { AuthContext } from "./components/CheckSession";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/today" element={<Home />}></Route>
          <Route path="/upcoming" element={<Home />}></Route>
          <Route path="/statistics" element={<Statistics />}></Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
