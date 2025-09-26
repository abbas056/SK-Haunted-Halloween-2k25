import React from "react";
import { images } from "../../../assets";

function GameSection({ animation }) {
  return (
    <div className="flex items-center justify-center w-[85%] h-[90vw]  mt-[12vw]">
      {!animation ? (
        <img className="w-[70%] h-auto" src={images.flower} alt="" />
      ) : (
        <img className="w-[85%] h-auto" src={images.flowerAnimation} alt="" />
      )}
    </div>
  );
}

export default GameSection;
