import React from "react";
import Container from "../../containers/container";
import { images } from "../../assets";
import { captureImageError, getLevelUrl, goTo } from "../../utilities/helper";

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
export default function TopEventProfiles({ data, talent, percentage, beans, previousDay }) {
  return (
    <div className="flex items-start w-[100%] mx-auto justify-center gap-[1vw] f-tangoSansItalic">
      {data?.map((item, index) => {
        const ranking = item?.ranking ? item?.ranking : index + 1;
        const estBean = parseInt(Math.ceil(beans * (percentage?.length > 0 ? percentage[index] : 1)));
        return (
          <Container size="100% 100%" image={topBase(ranking)} className={`${topBaseCss(ranking)} ${topFrameOrder(ranking)}`}>
            {item?.userId && (
              <div className={`relative flex flex-col items-center justify-center text-[2.5vw] text-white gap-3`}>
                <div className="relative mt-[-7vw]">
                  <Container
                    image={topFrame(ranking)}
                    width="16vw"
                    height="16vw"
                    className="z-10 flex items-center justify-center"
                    onClick={() => goTo(true, item?.userId, item?.roomId ? item?.roomId : item?.userId)}
                  ></Container>
                  <img
                    onError={captureImageError}
                    className="w-[60%] h-[60%] rounded-full object-cover absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src={item?.portrait ? item?.portrait : images.unknown}
                    alt=""
                  />
                </div>
                <div className="flex flex-col items-center justify-center gap-[0.5vw] ml-[-2vw]">
                  <span className="text-white text-[2.5vw] font-bold leading-none w-[85%] text-center whitespace-pre text-ellipsis overflow-x-hidden">
                    {item?.nickname}
                  </span>
                  <img className="w-fit h-[3vw] object-contain" src={getLevelUrl(talent, talent ? item?.actorLevel : item?.userLevel)} alt="" />
                  <span className="text-white text-[2vw]">
                    <img
                      className="w-[4vw] h-[4vw] inline align-middle object-contain bg-[#5a3301] rounded-full border-[0.3vw] border-white p-[0.4vw] mr-[0.5vw]"
                      src={talent ? images.gems : images.beanIcon}
                      alt=""
                    />
                    {item?.userScore}
                  </span>
                  {estBean && !isNaN(estBean) ? (
                    <span className="text-white px-[1vw] text-[2vw] leading-none font-bold w-full text-center">
                      <img className="inline w-[4vw] align-middle h-[4vw] object-contain" src={talent ? images.gems : images.beanIcon} alt="" />{" "}
                      {previousDay ? "Won" : "Est"} {talent ? "Gems:" : "Beans:"}{" "}
                      <span className="text-white text-[2.2vw] leading-[2.2vw] font-bold">{estBean}</span>
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            )}
          </Container>
        );
      })}
    </div>
  );
}
