import React from "react";
import { images } from "../../../assets";

function SentReceivedButton({ onClick, sentRecievedTab }) {
  return (
    <div className={`flex items-center justify-center gap-2 text-[#7c401a]`}>
      <button
        onClick={() => onClick("sentBtn")}
        className={`w-[35vw] h-[12vw] flex items-center justify-center text-[2.8vw] transition-all duration-200 ease-in-out ${
          sentRecievedTab === "sentBtn" ? "grayscale-0" : "grayscale"
        }`}
      >
        <img className="w-full" src={images.treatSentButton} alt="" />
      </button>
      <button
        onClick={() => onClick("receivedBtn")}
        className={`w-[35vw] h-[12vw] flex items-center justify-center text-[2.8vw] transition-all duration-200 ease-in-out ${
          sentRecievedTab === "receivedBtn" ? "grayscale-0" : "grayscale"
        }`}
      >
        <img className="w-full" src={images.treatReceivedButton} alt="" />
      </button>
    </div>
  );
}

export default SentReceivedButton;
