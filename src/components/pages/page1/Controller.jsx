import React from "react";
import { images } from "../../../assets";
import { inputFunction } from "../../../utilities/helper";
import Container from "../../../containers/container";

export default function Controller({ handleGameClick, combo, setCombo, max, isLoading }) {
  const handleInput = (event) => {
    setCombo(parseInt(inputFunction(max, event)));
  };
  return (
    <div className="w-[85vw] flex items-end justify-center  text-amber-50">
      <div className="w-[30vw] shrink-0 flex flex-col justify-center items-center gap-1">
        <Container image={images.speedBase} width="20vw" height="10vw" size="100% 100%" className="flex items-center justify-center p-3">
          x{" "}
          <input
            className="ml-[1vw] w-[8vw] bg-transparent text-[#ffebb3] placeholder:text-[#ffebb389] outline-none text-shadow"
            type="number"
            placeholder="1"
            value={combo}
            onChange={handleInput}
          />
        </Container>
        <div className="flex items-center justify-center text-[2.5vw]">Max value = 999</div>
      </div>
      {/* <img className={subTabs.jungleHunt ? "w-[40vw]" : "w-[37vw]"} src={subTabs.jungleHunt ? images.blackRiffle : images.goldenRiffle} alt="" /> */}
      {/* 
      <div
        className={`shrink-0 w-[60vw] h-[60vw] absolute left-[40%] -translate-1/2 ${combo === 1 ? "opacity-100" : "opacity-0"} `}
        id="riffleSingleAnimation"
      />
      <div
        className={`shrink-0 w-[60vw] h-[60vw] absolute left-[40%] -translate-1/2 ${combo > 1 ? "opacity-100" : "opacity-0"}  `}
        id="riffleComboAnimation"
      /> */}

      <div className="w-[40vw] shrink-0 flex flex-col items-center z-10 gap-1">
        <button disabled={isLoading}>
          <img
            className={`w-[100% h-auto object-contain  ${isLoading ? "grayscale" : ""}`}
            onClick={handleGameClick}
            src={images.openButton}
            alt=""
          />
        </button>
        <span className="flex items-center justify-center text-[2.5vw] leading-none p-[1vw_2vw]">30K Spooky Pts Req</span>
      </div>
    </div>
  );
}
