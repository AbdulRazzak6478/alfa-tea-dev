import React from "react";
import { ThemeContext } from "../../Context/Theme";
import "./Navbar.css";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Button } from "@chakra-ui/react";
import { PiSignInFill, PiSignOutFill } from "react-icons/pi";
import { VscSignIn } from "react-icons/vsc";
import { BiLogIn, BiSignal2 } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav "
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Categories
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Products
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          {/* </ul> */}
          <Link to={"/login"} className=" btn" rel="noreferrer">
            <Button
              leftIcon={<BiLogIn size={"25px"} />}
              colorScheme="messenger"
              variant="solid"
            >
              Login
            </Button>
          </Link>
          <Link to={"/signup"} className="btn">
            <Button
              rightIcon={<PiSignOutFill size={"25px"} />}
              colorScheme="blue"
              variant="outline"
            >
              Sign Up
            </Button>
          </Link>
          </ul>
          <button
            type="button"
            onClick={toggeltheme}
            className="btn btn--icon nav__theme"
            aria-label="toggle theme"
            style={{ backgroundColor: "inherit" }}
          >
            {themename === "dark" ? <WbSunnyIcon /> : <Brightness2Icon />}
          </button>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? <CloseIcon /> : <MenuIcon />}
          </button>
      </nav>
    </>
  );
};
export default Navbar;
