import React from "react";
import { captureImageError, goTo } from "../../utilities/helper";
import Container from "../../containers/container";
import { images } from "../../assets";

export default function SingleMarquee({ ranking, name, image, userId, score, tabs }) {
  const frame = images.tickerFrame;
  let rewardsWon = (
    <>
      {tabs.tab1 ? (
        <>
          has {score} <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.treatPointsIcon} alt="" /> Treat Point
          {score > 1 ? "s" : ""} & ranked {ranking} in the Haunted House game.
        </>
      ) : (
        <>has completed a daily Halloween task.</>
      )}
    </>
  );

  return (
    <div className="flex items-center relative ml-[2vw]">
      <a className="flex-shrink-0 relative mr-[-9vw]" onClick={() => goTo(0, userId, userId)}>
        <Container width="11vw" height="12vw" size="100% 100%" postion="center" image={frame} key={ranking} className="relative z-[1]"></Container>
        <img
          className="absolute z-[1] top-[6.8vw] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[8vw] h-[8vw] rounded-full"
          onErrorCapture={captureImageError}
          src={image ? image : images.unknown}
        />
      </a>
      <Container
        width="fit-content"
        height="10vw"
        size="100% 100%"
        image={"linear-gradient(to right, rgb(156 39 176 / 78%), rgb(156 39 176 / 78%), rgb(156 39 176 / 79%))"}
        key={ranking}
        className=" pl-[9vw] pr-[4vw] flex items-center justify-center rounded-full"
      >
        <span className="leading-none text-[2.8vw] text-center text-white text-shadow-[0_0_1vw_rgba(0,0,0)]">
          {name} {rewardsWon}
        </span>
      </Container>
    </div>
  );
}
