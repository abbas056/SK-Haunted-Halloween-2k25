import React from "react";
import { images } from "../../../assets";
import { getLevelUrl, goTo } from "../../../utilities/helper";
import Container from "../../../containers/container";

const topFrame = (key) => {
  switch (key) {
    case 1:
      return images.frame1;
    case 2:
      return images.frame2;
    case 3:
      return images.frame3;
    default:
      return images.frame3;
  }
};

const topBase = (key) => {
  switch (key) {
    case 1:
      return images.firstBase;
    case 2:
      return images.secondBase;
    case 3:
      return images.thirdBase;
    default:
      return images.thirdBase;
  }
};
const topBaseCss = (key) => {
  switch (key) {
    case 1:
      return "w-[40vw] h-[40vw]";
    case 2:
      return "w-[40vw] h-[40vw]";
    case 3:
      return "w-[40vw] h-[40vw]";
    default:
      return "";
  }
};
const topFrameOrder = (key) => {
  switch (key) {
    case 1:
      return "order-2  mt-[-15vw] ";
    case 2:
      return "order-1 mt-[30vw] mr-[-18vw]";
    case 3:
      return "order-3 mt-[30vw] ml-[-18vw]";
    default:
      return "order-1";
  }
};
function TopWinners({ tab, userName, userScore, userAvatar, userId, roomId, index, userLevel, actorLevel, talent, calculatedBeans, previousDay }) {
  return (
    <Container image={topBase(index)} size="100% 100%" className={`${topBaseCss(index)} ${topFrameOrder(index)}`}>
      <div className={`relative flex flex-col items-center justify-center text-[3vw] text-white f-tangoSansItalic`}>
        {userId && (
          <>
            <div className="flex items-center justify-center relative">
              <img
                className={`w-[14vw] h-[14vw] top-[0.5vw] left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[50%] absolute m-auto`}
                src={userAvatar ? userAvatar : images.unknown}
                alt=""
              />
              <img onClick={() => goTo(true, userId, roomId)} className={`relative w-[20vw] h-[20vw] mt-[-10vw]`} src={topFrame(index)} alt="" />
            </div>
            <div className={`flex flex-col items-center justify-center gap-1`}>
              <div className="text-center ">{userName && userName.slice(0, 8)}</div>
              <img className="w-fit h-[4vw]" src={getLevelUrl(talent, talent ? actorLevel : userLevel)} alt="" />
              <div className="flex items-center justify-center gap-[1vw]">
                <img className="w-[8vw] h-[9vw]" src={tab === 1 ? images.myDailyTreatPointsIcon : images.giftBox} alt="" />
                <span className="text-[3vw] font-bold mt-[0.5vw]">{userScore}</span>
              </div>
              {tab === 2 && index <= 3 ? (
                <div className=" flex items-center justify-center text-[2vw] mt-2">
                  <span className="flex items-center justify-center">
                    <img className="w-[4vw] h-[4vw] bg-[#5a3301] rounded-[50%] px-[0.1vw] py-[0.1vw]" src={images.beanIcon} alt="" />{" "}
                    {previousDay ? "Won" : "Estimated"} Beans: <div className="ml-[0.5vw] flex items-center justify-center"> {calculatedBeans}</div>
                  </span>
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}

export default TopWinners;
