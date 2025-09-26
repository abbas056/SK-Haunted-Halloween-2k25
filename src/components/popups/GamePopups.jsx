import React from "react";
import PopUpWrapper from "./PopUp";
import { images } from "../../assets";
import { usePopUpStore } from "../../store/popUpStore";

export default function GamePopups({ backgroundImage, titleImage, popupTitleClass, children, className }) {
  const { closePopUp } = usePopUpStore();
  return (
    <PopUpWrapper
      backgroundImage={backgroundImage || images.successBg}
      onCloseClick={closePopUp}
      height="auto"
      width="100%"
      titleImage={titleImage}
      popupTitleClass={`${popupTitleClass}`}
      className={`mx-auto min-h-[60vw] max-h-[90vw] mb-[6vw] flex text-center pl-[2vw] justify-center ${className}`}
    >
      {children}
    </PopUpWrapper>
  );
}
