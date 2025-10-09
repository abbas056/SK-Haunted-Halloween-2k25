import React, { useState } from "react";
import Container from "../../../containers/container";
import { images } from "./../../../assets/index";
import LeaderBoard from "../../leaderboard/LeaderBoad";
import UserTabButtons from "./UserTabButtons";
import RewardContainer from "../../common/RewardContainer";
import PotCounter from "../page2/PotCounter";
import SentReceivedButton from "../page2/SentReceivedButton";

const LeaderBoardData = ({ tab, sentRecievedTab, userTab, todayData, prevDayData, estimatedBeans }) => {
  if (sentRecievedTab) {
    switch (userTab) {
      case "today":
        return <LeaderBoard tab={tab} score data={todayData} estimatedBeans={estimatedBeans} />;
      case "prevDay":
        return <LeaderBoard tab={tab} score previousDay data={prevDayData} estimatedBeans={estimatedBeans} />;
      default:
        return null;
    }
  } else {
    switch (userTab) {
      case "today":
        return <LeaderBoard tab={tab} score data={todayData} estimatedBeans={estimatedBeans} />;
      case "prevDay":
        return <LeaderBoard tab={tab} score previousDay data={prevDayData} estimatedBeans={estimatedBeans} />;
      default:
        return null;
    }
  }
};

export default function Board({
  tab,
  userTab,
  setUserTab,
  todayData,
  prevDayData,
  beansPotValue,
  isLoadingData,
  sentRecievedTab,
  setSentRecievedTab,
  rewards,
}) {
  const isSent = sentRecievedTab === "sentBtn";
  return (
    <Container
      image={images.leaderboardBg}
      size="100% 100%"
      width="100%"
      height="380vw"
      className="flex flex-col items-center justify-start px-[4vw] py-[2vw] gap-[1vw] pb-[25vw]"
    >
      <img className="w-[80%] mt-[-8vw]" src={images.boardTitle} alt="" />
      {tab === 2 && (
        <Container
          image={images.infoTextBase}
          size="100% 100%"
          width="60%"
          height="6vw"
          className="flex items-center justify-center text-center text-[2.8vw] text-[#9b511b]  py-1"
        >
          Daily Rewards for top 3 Winners
        </Container>
      )}
      <RewardContainer rewards={rewards} tab={tab} />
      {tab === 2 && (
        <>
          <PotCounter
            potName={isSent ? "Beans Pot" : "Gems Pot"}
            potImg={isSent ? images.beansPot : images.gemsPot}
            icon={isSent ? images.beanIcon : images.gems}
            potValue={beansPotValue}
          />
          <SentReceivedButton onClick={setSentRecievedTab} sentRecievedTab={sentRecievedTab} />
          <Container
            image={images.infoTextBase}
            size="100% 100%"
            // width="75%"
            // height="8vw"
            className="flex items-center justify-center text-center text-[2.8vw] text-[#9b511b] px-2 py-1"
          >
            {isSent ? "Send" : "Receive"} More Candy Treat gifts, Get higher rank
          </Container>
        </>
      )}
      <UserTabButtons onClick={setUserTab} userTab={userTab} />
      <img className="w-[65%] " src={images.winnerTitle} alt="" />
      {isLoadingData ? (
        "Loading..."
      ) : (
        <LeaderBoardData
          tab={tab}
          sentRecievedTab={sentRecievedTab}
          userTab={userTab}
          todayData={todayData}
          prevDayData={prevDayData}
          estimatedBeans={beansPotValue}
        />
      )}
    </Container>
  );
}
