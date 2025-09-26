import React from "react";
import { images } from "../assets";

function SeeMore({ active, handleChangeActive }) {
  return (
    <div className="m-auto flex items-center justify-center mt-4">
      {active ? (
        <button className="  w-[30vw] h-[10vw] text-[2.5vw] text-amber-50" onClick={handleChangeActive}>
          <img className="w-[100%]" src={images.seeMore} alt="" />
        </button>
      ) : (
        <button className="  w-[30vw] h-[10vw] text-[2.5vw] text-amber-50" onClick={handleChangeActive}>
          <img className="w-[100%]" src={images.seeLess} alt="" />
        </button>
      )}
    </div>
  );
}

export default SeeMore;
