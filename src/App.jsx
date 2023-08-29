import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "./Context/Theme";
import Header from "./components/Header/Header";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import { Button } from "@chakra-ui/react";
import { PiSignOutFill, PiSignInFill } from "react-icons/pi";
import Footer from "./components/Footer/Footer";

function App() {
  const [{ themename }] = React.useContext(ThemeContext);
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className={`${themename} app `}>
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          {/* <Login /> */}
          {/* <SignUp /> */}
          <Button colorScheme="teal" variant="solid">
            Button
          </Button>
          <Button colorScheme="teal" variant="outline">
            Button
          </Button>
          <Button
            leftIcon={<PiSignOutFill />}
            colorScheme="teal"
            variant="solid"
          >
            Email
          </Button>
          <Button
            rightIcon={<PiSignInFill />}
            colorScheme="teal"
            variant="outline"
          >
            Call us
          </Button>
          <h1>hello world</h1>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
