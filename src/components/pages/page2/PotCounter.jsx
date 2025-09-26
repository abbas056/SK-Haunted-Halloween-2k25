import React from "react";
import Container from "../../../containers/container";
import { images } from "../../../assets";

function PotCounter({ potName, potImg, icon, potValue }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Container
        className="flex items-center justify-center text-[#9b511b] text-[4vw]"
        width="80%"
        height="7vw"
        image={images.rankBase}
        size="100% 100% "
      >
        <span>{potName}</span>
      </Container>
      <img className="w-[35vw] h-[35vw] object-contain" src={potImg} alt="" />
      <Container image={images.rewNameBase} width="90%" height="14vw" size="100% 100%" className="flex justify-center items-center text-white gap-1">
        <img className=" w-[5vw] h-[-5vw]" src={icon} alt="" />
        <span className="text-[4vw]">{potValue || 0}</span>
      </Container>
    </div>
  );
}

export default PotCounter;
