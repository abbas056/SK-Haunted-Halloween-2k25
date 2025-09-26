import React from "react";

export default function Toast({ message }) {
  return (
    <div className="fixed bottom-[1vw] z-[9999999] left-1/2 -translate-1/2 text-[3vw] w-full text-center">
      <span className="bg-[#621818c5] p-[2vw_3vw] rounded-full text-white">
        {message}
      </span>
    </div>
  );
}
