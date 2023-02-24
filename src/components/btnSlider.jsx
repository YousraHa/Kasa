import React from "react";
import "../css/carousel.css";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, 'button');
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    <span 
        onClick={moveSlide}
        class="material-icons" >
            {direction === "next" ? "navigate_next" : "chevron_left"}
    </span> 
    </button>
  );
}