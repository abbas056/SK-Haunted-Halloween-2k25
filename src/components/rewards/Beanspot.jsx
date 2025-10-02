import React from "react";
import Container from "../../containers/container";
import { images } from "../../assets";

export default function Beanspot({ isBackground, beans }) {
  return (
    <div className=" flex flex-col items-center text-white">
      <Container
        image={images.rankBase}
        width="16vw"
        height="6vw"
        size="100% 100%"
        className="flex justify-center items-center text-center text-[2.6vw] text-[#aa4040]"
      >
        Beans Pot
      </Container>
      <div className="flex flex-col items-center">
        <Container width="100%" height="100%" className="flex flex-col items-center justify-center">
          <img className="w-[18vw] h-[18vw] z-10 object-contain" src={images.beansPot} alt="" />
        </Container>
        <Container image={images.rewNameBase} width="18vw" height="8vw" size="100% 100%" className="flex justify-center items-center p-2">
          <img className="inline-block align-middle w-[3vw] ml-[-3vw]" src={images.beanIcon} alt="" />
          <span className="inline-block align-middle text-[2vw] text-center">{beans || 0}</span>
        </Container>
      </div>
    </div>
  );
}
