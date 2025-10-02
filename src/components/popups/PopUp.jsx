import React, { useEffect, useState } from "react";
import Container from "../../containers/container";
import { images } from "../../assets";
import useScrollStore from "../../store/useStore";

export default function PopUpWrapper({
  children,
  backgroundImage,
  titleImage,
  onCloseClick,
  popUpHeight = "auto",
  popUpWidth = "100%",
  popUpSize = "100% 100%",
  popUpPos = "10% 50%",
  popupTitleClass = "w-full h-[19vw] mt-[-12vw] object-contain",
  popupCloseClass,
  className,
  overlayClass,
}) {
  const { scroll, setScroll } = useScrollStore();
  const scrollOffSet = window.pageYOffset;
  useEffect(() => {
    if (!scroll) {
      setScroll(scrollOffSet);
      document.body.style.top = `${scrollOffSet}vw`;
    }
    document.body.style.position = "fixed";
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("position");
      if (scroll) window.scrollTo(0, scroll);
    };
  }, [scroll]);

  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-[#021d6b96] backdrop-blur-sm z-[9999] flex flex-col items-center justify-center ${overlayClass}`}
    >
      <Container
        width={popUpWidth}
        image={backgroundImage}
        size={popUpSize}
        postion={popUpPos}
        height={popUpHeight}
        className={`relative w-full flex flex-col items-center justify-center py-20`}
      >
        {titleImage && <img className={popupTitleClass} src={titleImage} />}
        <div className={`w-[73%]  ${className}`}>{children}</div>
        <img className={"absolute top-[-5vw] right-[3vw] w-[8vw] z-[999] " + popupCloseClass} src={images.closeIcon} onClick={onCloseClick} />
      </Container>
    </div>
  );
}
