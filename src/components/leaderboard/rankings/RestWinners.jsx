import React from "react";
import { images } from "../../../assets";
import Container from "../../../containers/container";
import { baseURL } from "../../../URL";
import { captureImageError, convertToPaginatedArray, getCountDays, getLevelUrl, goTo } from "../../../utilities/helper";
import Carousel from "../../common/Carousel";
import { rewGet } from "../../../utilities/imageContext";

function RestWinners({
  userName,
  userScore,
  userAvatar,
  userId,
  roomId,
  index,
  userLevel,
  actorLevel,
  listNumber,
  talent,
  score,
  description,
  estBean,
  previousDay,
  tab,
}) {
  const rewards = convertToPaginatedArray(description, 3);
  // helper function to chunk array into groups of n
  const chunkArray = (arr, size) => {
    return arr.reduce((acc, _, i) => {
      if (i % size === 0) acc.push(arr.slice(i, i + size));
      return acc;
    }, []);
  };

  const flatRewards = rewards.flat(2); // flatten to get actual items
  const chunkedRewards = chunkArray(flatRewards, 3);

  return (
    <Container
      className="text-white m-auto flex items-center justify-between pl-[3vw] pr-[2vw] text-[2.8vw]"
      key={index}
      image={images.userBase}
      size="100% 100%"
      width="100%"
      height="20vw"
    >
      <div className="flex items-center relative justify-center gap-[1vw]">
        <div className="flex-shrink-0 w-[4vw] text-end">{listNumber}.</div>
        <div className="flex-shrink-0 flex items-center justify-center gap-[1vw]">
          <img
            onError={captureImageError}
            className="rounded-[50%] absolute w-[12vw] top-[0vw] lef-[7.5vw]"
            src={userAvatar ? userAvatar : images.unknown}
            alt=""
          />
          <img onClick={() => goTo(true, userId, roomId)} className="w-[16vw] top-[-1vw] relative" src={images.frameRest} alt="" />
        </div>
        <div className="w-full text-left flex flex-col gap-[1vw]">
          <span className="w-[10vw] text-[2.5vw] font-bold leading-none whitespace-pre text-ellipsis overflow-x-hidden">{userName}</span>
          <img className="w-fit h-[3vw] object-contain" src={getLevelUrl(talent, talent ? actorLevel : userLevel)} alt="" />
        </div>
      </div>
      {estBean ? (
        <span className="min-w-[10vw] text-[1.6vw] leading-none bg-[#be04a9] px-1 py-0.5 text-center rounded-[5vw] border-amber-50 border">
          {previousDay ? "Won" : "Est"} {talent ? "Gems" : "Beans"}{" "}
          <img className="w-[2.5vw] h-[2.5vw] inline align-middle" src={talent ? images.gems : images.beanIcon} alt="" /> {estBean}
        </span>
      ) : (
        ""
      )}
      {description ? (
        <div>
          <Carousel width="30vw" Infinite>
            {chunkedRewards.map((group, groupIndex) => (
              <div key={groupIndex} className="w-[29vw] flex items-center justify-start gap-[1vw]">
                {group.map((item, index) => (
                  <div key={index} className="w-[7vw] flex flex-col items-center justify-center gap-[1vw]">
                    <img className="w-[6vw] h-[6vw] object-contain" src={rewGet(item?.desc)} alt="" />
                    <span className="whitespace-nowrap text-[2vw] leading-none">{getCountDays(item?.desc, item?.count)}</span>
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      ) : (
        <div className="w-[26vw] flex items-center justify-start gap-1 text-shadow-[0_0_1vw_rgba(0,0,0,.8)]">
          <img
            className="w-[6vw] h-[6vw] object-contain mb-[0.5vw] drop-shadow-[0_0_1vw_rgba(0,0,0,0.8)]"
            src={tab === 1 ? images.myDailyTreatPointsIcon : tab === 2 ? images.giftBox : talent ? images.gems : images.beanIcon}
            alt=""
          />
          <span className="text-[2.5vw] leading-none mr-[2vw]">{userScore}</span>
        </div>
      )}
    </Container>
  );
}

export default RestWinners;
