import React, { useState } from "react";
import RewardsBox from "../pages/page1/RewardsBox";
import { images } from "../../assets";
import ButtonsWithBG, { ButtonsWithoutBG } from "../SubButtons";
import { dailyTalentRewards, dailyUserRewards, overallTalentRewards, overallUserRewards } from "../../raw/users/rewards";
import RewardContainer from "../common/RewardContainer";
import { currentDate } from "../../utilities/endpoints";
import { useOverallQuery } from "../../hooks/queries/useOverallQuery";
import Container from "../../containers/container";

const ForGifterRewards = ({ activeTab, userTab }) => {
  const { eventInfo } = useOverallQuery();
  const beansPot = (eventInfo && eventInfo?.beansPotInfo && eventInfo?.beansPotInfo?.[`DAILY_USER_${currentDate}`]) || 0;

  switch (activeTab) {
    case images.dailyBtn:
      return <RewardsBox key={5} isBackground={false} rewards={dailyUserRewards} counter={beansPot} />;
    case images.overallBtn:
      return (
        <div key={6}>
          <RewardContainer rewards={overallUserRewards} userTab={userTab} />
        </div>
      );
    default:
      return null;
  }
};
const ForTalentRewards = ({ activeTab, userTab }) => {
  const { eventInfo } = useOverallQuery();
  const gemsPot = (eventInfo && eventInfo?.beansPotInfo && eventInfo?.beansPotInfo?.[`DAILY_GEMS_${currentDate}`]) || 0;
  switch (activeTab) {
    case images.dailyBtn:
      return (
        <div className="mb-[3vw] text-white" key={3}>
          <RewardContainer rewards={dailyTalentRewards} userTab={userTab} />
          <div className="flex flex-col items-center gap-4">
            <img className="w-50" src={images.gemsPotCounterText} alt="" />
            <div className="flex flex-col items-start justify-center gap-3 ">
              <img className="w-[40vw] object-contain" src={images.gemsPot} alt="" />
              <Container
                image={images.rewNameBase}
                width="40vw"
                height="15vw"
                size="100% 100%"
                className="flex justify-center items-center m-auto gap-1"
              >
                <img className="inline-block align-middle w-[6vw] h-[6vw] ml-[-6vw]" src={images.gems} alt="" />
                <span className="inline-block align-middle text-[3.5vw] text-center">{gemsPot || 0}</span>
              </Container>
            </div>
          </div>
        </div>
      );
    case images.overallBtn:
      return (
        <div key={4}>
          <RewardContainer rewards={overallTalentRewards} userTab={userTab} />
        </div>
      );
    default:
      return null;
  }
};
const GifterTalentRewards = ({ userTab }) => {
  const [timeTab, setTimeTab] = useState(images.dailyBtn);
  switch (userTab) {
    case "Talent":
      return (
        <div key={7}>
          {/* daily and overall buttons */}
          <ButtonsWithoutBG
            className="flex items-center justify-center gap-[3vw] relative z-10 mb-[3vw]"
            buttonOne={images.dailyBtn}
            buttonTwo={images.overallBtn}
            buttonWidth={"25vw"}
            buttonHeight={"10vw"}
            activeTab={timeTab}
            onClick={setTimeTab}
          />
          {/* rewards box */}
          <ForTalentRewards key={1} activeTab={timeTab} userTab={userTab} />
        </div>
      );
    case "Gifter":
      return (
        <div key={8}>
          <ButtonsWithoutBG
            className="flex items-center justify-center gap-[3vw] relative z-10 mb-[3vw]"
            buttonOne={images.dailyBtn}
            buttonTwo={images.overallBtn}
            buttonWidth={"25vw"}
            buttonHeight={"10vw"}
            activeTab={timeTab}
            onClick={setTimeTab}
          />
          {/* rewards box */}
          <ForGifterRewards key={2} activeTab={timeTab} userTab={userTab} />
        </div>
      );
    default:
      return null;
  }
};

export default function GiftingRewards() {
  const [userTab, setUserTab] = useState("Talent");
  return (
    <div>
      <img className="w-[90%] m-auto" src={images.titleGiftingRewards} alt="" />
      <div className="flex items-center justify-center m-auto">
        <ButtonsWithoutBG
          className="flex items-center justify-center gap-[3vw] relative z-10 mb-[3vw]"
          buttonOne={images.talentBtn}
          buttonTwo={images.gifterBtn}
          buttonWidth={"32vw"}
          buttonHeight={"12vw"}
          activeTab={userTab === "Talent" ? images.talentBtn : images.gifterBtn}
          onClick={() => setUserTab(userTab === "Talent" ? "Gifter" : "Talent")}
        />
      </div>
      <GifterTalentRewards key={9} userTab={userTab} />
    </div>
  );
}
