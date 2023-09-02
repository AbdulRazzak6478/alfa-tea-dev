import React from "react";
import  Navbar  from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/Theme.jsx";
import Logo from "../../assets/logo.png";

import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3 className="logo-header">
          <Link to="/#home" className="logo">
           ALFA TEA
           {/* <img src={Logo} alt="logo" /> */}
          </Link>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
 export default Header;