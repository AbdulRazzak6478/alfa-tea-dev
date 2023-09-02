import React from "react";
import { ThemeContext } from "../../Context/Theme";
import "./Navbar.css";
import { GrMenu } from 'react-icons/gr';
import { CgClose } from 'react-icons/cg';
import {PiSunFill} from "react-icons/pi";
import {FaMoon} from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { PiSignOutFill } from "react-icons/pi";
import { BiLogIn } from "react-icons/bi";
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
            <Link
              to="/#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav "
            >
              Home
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="/#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="/#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Categories
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="/#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Products
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              to="/#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </Link>
          </li>
          {/* </ul> */}
          <Link to={"/login"} className=" btn" rel="noreferrer" onClick={()=>setShowNavList(!showNavList)}>
            <Button
              leftIcon={<BiLogIn size={"25px"} />}
              colorScheme="messenger"
              variant="solid"
            >
              Login
            </Button>
          </Link>
          <Link to={"/signup"} className="btn" onClick={()=>setShowNavList(!showNavList)}>
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
            className="nav__theme"
            aria-label="toggle theme"
            style={{ backgroundColor: "inherit" }}
          >
            <span className="">{themename === "dark" ? <PiSunFill size={'25px'}  /> : <FaMoon size={'25px'} />}</span>
          </button>
          <button
            type="button"
            onClick={toggleNavList}
            className="btn btn--icon nav__hamburger"
            aria-label="toggle navigation"
          >
            {showNavList ? <CgClose size={'25px'} /> : <GrMenu size={'25px'} />}
          </button>
      </nav>
    </>
  );
};
export default Navbar;
