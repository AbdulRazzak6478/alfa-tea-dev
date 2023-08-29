import React from "react";
import  Navbar  from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/Theme.jsx";
import Logo from "../../assets/logo.png";

import "./Header.css";
const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3 className="logo-header">
          <a href="#home" className="logo">
           ALFA TEA
           {/* <img src={Logo} alt="logo" /> */}
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
 export default Header;