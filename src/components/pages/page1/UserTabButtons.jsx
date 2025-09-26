import React from "react";
import { images } from "../../../assets";

function UserTabButtons({ onClick, userTab }) {
  return (
    <div className={`mx-auto pl-[4vw] pr-[5vw] pb-[4vw] flex items-center justify-center gap-2 text-[#7c401a]`}>
      <button
        onClick={() => onClick("today")}
        className={`w-[28vw] h-[10vw] flex items-center justify-center text-[2.8vw] transition-all duration-200 ease-in-out ${
          userTab === "today" ? "grayscale-0" : "grayscale"
        }`}
      >
        <img className="w-full" src={images.todaySelected} alt="" />
      </button>
      <button
        onClick={() => onClick("prevDay")}
        className={`w-[28vw] h-[10vw] flex items-center justify-center text-[2.8vw] transition-all duration-200 ease-in-out ${
          userTab === "prevDay" ? "grayscale-0" : "grayscale"
        }`}
      >
        <img className="w-full" src={images.prevSelected} alt="" />
      </button>
    </div>
  );
}

export default UserTabButtons;
