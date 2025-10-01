import React, { useState } from "react";
import { images } from "../../../assets";
import Container from "../../../containers/container";

function GameControls({ combo, setCombo, handleGameClick, isLoading }) {
  return (
    <div className="flex items-center justify-center w-full absolute bottom-0 left-0 right-0">
      <div className="flex justify-center items-center gap-2 text-white text-[3.2vw] f-tangoSansItalic">
        <Container
          className={`flex justify-center gap-4 ${combo === 1 ? "" : "grayscale"}`}
          width="15vw"
          height="8vw"
          image={images.speedBase}
          size="100% 100%"
        >
          <button onClick={() => setCombo(1)}>x 1</button>
        </Container>
        <Container
          className={`flex justify-center gap-4 ${combo === 7 ? "" : "grayscale"}`}
          width="15vw"
          height="8vw"
          image={images.speedBase}
          size="100% 100%"
        >
          <button onClick={() => setCombo(7)}>x 7</button>
        </Container>
        <Container
          className={`flex justify-center gap-4 ${combo === 77 ? "" : "grayscale"}`}
          width="15vw"
          height="8vw"
          image={images.speedBase}
          size="100% 100%"
        >
          <button onClick={() => setCombo(77)}>x 77</button>
        </Container>
      </div>
      <div className="flex flex-col items-center justify-center gap-1">
        <button disabled={isLoading} onClick={handleGameClick} className=" w-[30vw]">
          <img className={isLoading && "grayscale"} src={images.treatButton} alt="" />
        </button>
        <span className="text-white text-[2.5vw] ">1 Chance = 30k Points</span>
      </div>
    </div>
  );
}

export default GameControls;
