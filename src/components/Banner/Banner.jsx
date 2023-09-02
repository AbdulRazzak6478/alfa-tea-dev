import React, { useState } from "react";
import img1 from "../../assets/carousel/China-tea-fields.jpg";
import img2 from "../../assets/carousel/assam-tea.webp";
import img3 from "../../assets/carousel/field2.webp";
import img4 from "../../assets/carousel/field3.webp";
import img5 from "../../assets/carousel/field4.jpg";
import img6 from "../../assets/carousel/field5.jpg";
import img7 from "../../assets/carousel/field6.jpg";
// import img7 from "../../assets/sameSize/img.jpg";
// import "./carousel.css";
import "./Banner.css";

import { BiSolidChevronsLeft , BiSolidChevronsRight} from 'react-icons/bi';

export const src_object = [
  {
    id: 1,
    image: "../../assets/carousel/China-tea-fields.jpg",
    image: img1,
  },
  {
    id: 2,
    image: "../../assets/carousel/assam-tea.webp",
    image: img2,
  },
  {
    id: 3,
    image: "../../assets/carousel/field2.webp",
    image: img3,
  },
  {
    id: 4,
    image: "../../assets/carousel/field3.webp",
    image: img4,
  },
  {
    id: 5,
    image: "../../assets/carousel/field4.jpg",
    image: img5,
  },
  {
    id: 6,
    // image: "../../assets/carousel/field5.jpg",
    image: img6,
  },
  {
    id: 7,
    // image: "../../assets/carousel/field5.jpg",
    image: img7,
  },
];
const Banner = () => {
  const [current, setCurrent] = useState(0)
  return (
    <>
      <div className="carousel">
        <div className="carousel_wrapper">
          {src_object.map((image, index) => {
            return (
              <div
                key={index}
                className={
                  index === 0
                    ? "carousel_card carousel_card_active"
                    : "carousel_card"
                }
              >
                <img className="img_card" src={image.image} alt="img" />
              </div>
            );
          })}
          {/* <div className="carousel-left-arrow">&lsaquo;</div>
          <div className="carousel-right-arrow">&rsaquo;</div> */}
          <div className="carousel-left-arrow"><BiSolidChevronsLeft  /></div>
          <div className="carousel-right-arrow"><BiSolidChevronsRight  /></div>
          {/* <div className="carousel_card">
            <img className="img_card" src={img5} alt="img" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Banner;
