import React from "react";
import { images } from "../../../assets";
const TalentGameControllers = ({ combo, setCombo, handleGameClick, isLoading }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 gap-2">
      <div className="flex items-center justify-center text-white gap-2 text-[3.5vw]">
        <span
          className={`flex items-center justify-center w-[15vw] h-[7vw] border-2 border-amber-50 rounded-[5vw] bg-[#c37138] ${
            combo === 1 ? "grayscale-0" : "grayscale-100"
          }`}
          onClick={() => setCombo(1)}
        >
          x 1
        </span>
        <span
          className={`flex items-center justify-center w-[15vw] h-[7vw] border-2 border-amber-50 rounded-[5vw] bg-[#c37138] ${
            combo === 10 ? "grayscale-0" : "grayscale-100"
          }`}
          onClick={() => setCombo(10)}
        >
          x 10
        </span>
        <span
          className={`flex items-center justify-center w-[15vw] h-[7vw] border-2 border-amber-50 rounded-[5vw] bg-[#c37138] ${
            combo === 100 ? "grayscale-0" : "grayscale-100"
          }`}
          onClick={() => setCombo(100)}
        >
          x 100
        </span>
      </div>
      <button disabled={isLoading} onClick={handleGameClick}>
        <img className={`w-[45vw] ${isLoading ? "grayscale" : ""}`} src={images.bloomPetalsButton} alt="" />
      </button>
    </div>
  );
};

export default TalentGameControllers;
