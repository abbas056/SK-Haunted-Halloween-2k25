import React from "react";
import Container from "../containers/container";

export function ButtonsWithoutBG({ activeTab, buttonOne, buttonTwo, buttonWidth, buttonHeight, className, onClick, ...props }) {
  return (
    <div className={className} {...props}>
      <button onClick={() => onClick(buttonOne)}>
        <img
          className={`object-contain ${activeTab === buttonOne ? "" : "grayscale"}`}
          style={{
            width: buttonWidth,
            height: buttonHeight,
          }}
          src={buttonOne}
          alt=""
        />
      </button>
      <button onClick={() => onClick(buttonTwo)}>
        <img
          className={`object-contain ${activeTab === buttonTwo ? "" : "grayscale"}`}
          style={{
            width: buttonWidth,
            height: buttonHeight,
          }}
          src={buttonTwo}
          alt=""
        />
      </button>
    </div>
  );
}

function ButtonsWithBG({ backgroundImageSelection, ImageSelection, className, width = "45vw", height = "9vw", ...props }) {
  return (
    <Container image={backgroundImageSelection} width={width} height={height} postion="center" size="100% 100%" className={className} {...props}>
      <img className="w-[21vw] h-[10vw] object-contain" src={ImageSelection} alt="" />
    </Container>
  );
}

export default ButtonsWithBG;
