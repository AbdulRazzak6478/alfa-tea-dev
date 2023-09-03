import React from "react";
import "./Introduction.css";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { ThemeContext } from "../../Context/Theme";
// import profile from "../../assets/profile2.jpg";
import { IoMdExit } from "react-icons/io";

const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="diff">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src="" alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, I am{" "}
                <span className="diff">Mohammed Abdul Razzak Qureshi</span>{" "}
                from <span className="diff"> Malakpet, Hyderabad</span>. I
                am about to complete my graduation in{" "}
                <span className="diff">
                  Computer Science & Engineering
                </span>{" "}
                in the year of 2023 from Deccan College of Engineering and
                technology affilated to Osmania University ,Hyderabad, Telangana
                State .
              </h4>
              <h4>Some of my interests apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <IoMdExit />
                </span>
                <span>Technology </span>
              </h4>
              <h4 className="different">
                <span className="icons">
                  <IoMdExit fontSize={"30px"} />
                </span>
                <span>Cricket Enthusiast </span>
              </h4>
              <h4 className="different">
                <span className="icons">
                  <IoMdExit />
                </span>
                <span>Watching Movies (Action,comedy) </span>
              </h4>
              <h4 className="different">
                <span className="icons">
                  <IoMdExit />
                </span>
                <span>Travelling </span>
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Introduction;
