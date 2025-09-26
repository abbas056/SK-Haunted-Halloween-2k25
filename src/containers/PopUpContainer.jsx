import React, { useEffect, useState } from "react";
import { usePopUpStore } from "../store/popUpStore";
import { bodyFixes } from "../utilities/helper";

export default function PopUpContainer({ children }) {
  const { closePopUp } = usePopUpStore();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    document.body.style.position = "fixed";
    // document.body.style.top = `${height}vw`;
    document.body.style.overflowY = "hidden";
    setHeight(window.pageYOffset);
    return () => {
      document.body.style.overflowY = "auto";
      document.body.style.removeProperty("top");
      document.body.style.removeProperty("position");
      window.scrollTo(0, scroll);
    };
  }, [height]);

  return (
    <div className="flex justify-center items-center w-full h-screen z-[10]">
      <div className="z-[13] relative flex flex-col items-center justify-center">
        {children}
      </div>
      <div
        className="z-[11] fixed top-0 left-0 w-screen h-screen overflow-hidden bg-[#0000004f] backdrop-blur-[2vw]"
        onClick={closePopUp}
      ></div>
    </div>
  );
}
