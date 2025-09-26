import { images } from "../assets";
import Carousel from "../components/common/Carousel";
import Container from "../containers/container";
import { convertToPaginatedArray, getCountDays } from "./helper";
import { rewGet } from "./imageContext";

const Reward = ({ desc, count, textCss }) => {
  return (
    <span className="flex flex-col items-center gap-[1vw]">
      <Container image={images.rewardsBg} size="100% 100%" width="15vw" height="15vw" className="flex items-center justify-center px-3 pt-3 pb-1">
        <div className="flex flex-col items-center justify-center">
          <img className="z-10 w-[10vw] h-[10vw] object-contain" src={rewGet(desc)} alt="" />
        </div>
      </Container>
      <span className={`text-[2vw] w-[15vw] leading-none text-center ${textCss}`}>
        {desc} {getCountDays(desc, count)}
      </span>
    </span>
  );
};
const Rewards = ({ rewards }) => {
  return (
    <Carousel width="60vw" className="w-full mt-[3vw]" Infinite arrows>
      {rewards?.map((data, index) => (
        <div key={index} className="flex items-start justify-center gap-[2vw]">
          {data?.map((reward, index) => (
            <Reward key={index} desc={reward?.desc} count={reward?.count} textCss={"text-[#ffcd00]"} />
          ))}
        </div>
      ))}
    </Carousel>
  );
};
export const popupsEndpoint = {
  tab2Popups: {
    singleShotSuccess: {
      title: images.beautfulBloom,
      description: ({ rewards }) => (
        <span className="px-[2vw] text-[5vw] leading-[6vw] text-white">
          You’ve successfully bloomed the petals{" "}
          <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.flowerIcon} alt="" /> and have won{" "}
          <Rewards rewards={convertToPaginatedArray(rewards, 3)} />
        </span>
      ),
    },
    insufficientPoints: {
      title: images.oopsTitle,
      description: (
        <div className="h-full flex flex-col items-center justify-center">
          <span className="px-[2vw] text-[5vw] leading-[6vw] text-white">
            You don’t have enough Talent Points{" "}
            <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.talentPointsIcon} alt="" /> to bloom petals right
            now. Receive more event gifts to earn Talent Points and try again!
          </span>
        </div>
      ),
    },
  },
  tab1Popups: {
    singleShotSuccess: {
      title: images.titleDoorUnlock,
      description: ({ treatPoints, itemMsg, rewards }) => (
        <span className="px-[2vw] text-[4vw] leading-[6vw] text-white">
          You have unlocked a haunted door and found a <span className="text-[#ffcd00]">{itemMsg}</span> <br />. You have also won
          <Rewards rewards={convertToPaginatedArray(rewards, 3)} /> and earned {treatPoints}{" "}
          <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.treatPointsIcon} alt="" /> Treat Points.
        </span>
      ),
    },
    multiplePlay: {
      title: images.titleGreatFind,
      description: ({ treatPoints, itemMsg, rewards, hauntedResult }) => (
        <span className="px-[2vw] text-[4vw] leading-[6vw] text-white">
          You have unlocked <span className="text-[#ffcd00]">{hauntedResult}</span> haunted doors and discovered{" "}
          <span className="text-[#ffcd00]">{itemMsg}</span>
          <br />. You have also won <Rewards rewards={convertToPaginatedArray(rewards, 3)} /> and earned{" "}
          <span className="text-[#ffcd00]">{treatPoints}</span>{" "}
          <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.treatPointsIcon} alt="" /> Treat Points.
        </span>
      ),
    },
    insufficientPoints: {
      title: images.titleOops,
      description: (
        <div className="h-full flex flex-col items-center justify-center">
          <span className="px-[2vw] text-[5vw] leading-[6vw] text-white">
            You don’t have enough Spooky Points
            <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.spookyPointsIcon} alt="" /> to play right now. Send
            to open a haunted door right now. Send more event gifts & come back again!
          </span>
        </div>
      ),
    },
    openChest: {
      title: images.titleChestOpen,
      description: ({ rewards }) => (
        <span className="px-[2vw] text-[4vw] leading-[6vw] text-white">
          You have opened the haunted chest{" "}
          <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.chestOpenIcon} alt="" /> and received the Bonus Grand
          Reward <Rewards rewards={convertToPaginatedArray(rewards, 3)} />
        </span>
      ),
    },
  },
};
