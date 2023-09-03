import React from "react";
import { BiLogoGmail } from 'react-icons/bi';
// import { IoCall } from 'react-icons/io';
import { MdCall } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
// import { FaLocationDot } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
// import "../../App.css";

const social_handler_object = [
    // {
    //     href:"https://github.com/AbdulRazzak6478",
    //     label:"Github",
    //     svg_icon:<GitHubIcon />,
    // },
    {
        href:"mailto:abdulrazzak4186@gmail.com",
        label:"Mail",
        svg_icon:BiLogoGmail,
    },
    {
        href:"tel:+919515426478",
        label:"Phone",
        svg_icon:MdCall,
    },
    {
        href:"https://www.instagram.com/marq_immu6478",
        label:"instagram",
        svg_icon:BsInstagram,
    },
    {
        href:"https://goo.gl/maps/YxwajwoTW2EkPtw28",
        label:"location",
        svg_icon:MdLocationOn,
    },
] 
const SocialHandles = () => {
    // const icons =<GitHubIcon />
  return (
    <>
      <div className="center">
        {/* <a
          href="https://github.com/AbdulRazzak6478"
          aria-label="github"
          target="_blank"
          rel="noreferrer"
          className="link link--icon"
        >
          <GitHubIcon />
        </a> */}
        <a
          href="mailto:abdulrazzak4186@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
          className="link link--icon"
        >
          <BiLogoGmail />
        </a>
        <a
          href="tel:+919515426478"
          target="_blank"
          rel="noreferrer"
          aria-label="github"
          className="link link--icon"
        >
          <MdCall />
        </a>
        {/* <a
          href="https://www.linkedin.com/in/mohammed-abdul-razzak-qureshi/"
          aria-label="github"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a> */}
        {/* <a
          // href="https://drive.google.com/file/d/1IBahA178010Uiu2Eq9tUbHV8NIR7ZR8P/view?usp=share_link"
          href="https://drive.google.com/file/d/1dnildTg1KL4YBq8AObI8tu1QB4vtOA8D/view?usp=share_link"
          aria-label="github"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <DescriptionIcon />
        </a> */}
        <a
          href="https://www.instagram.com/marq_immu6478"
          aria-label="github"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://goo.gl/maps/YxwajwoTW2EkPtw28"
          aria-label="github"
          className="link link--icon"
          target="_blank"
          rel="noreferrer"
        >
          <MdLocationOn />
        </a>
      </div>
    </>
  );
};

export default SocialHandles;
