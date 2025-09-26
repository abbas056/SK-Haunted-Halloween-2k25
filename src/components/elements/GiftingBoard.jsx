import React, { useState } from "react";
import Container from "../../containers/container";
import { images } from "../../assets";
import LeaderBoardGifter from "./LeaderBoardGifter";
import ButtonsWithBG, { ButtonsWithoutBG } from "../SubButtons";
import {
  useEventLeaderboardGiftersPreviousDay,
  useEventLeaderboardGiftersToday,
  useEventLeaderboardTalentsPreviousDay,
  useEventLeaderboardTalentsToday,
  useEventLeaderboardGiftersOverall,
  useEventLeaderboardTalentsOverall,
} from "../../hooks/queries/useEventQueries";
import { useOverallQuery } from "../../hooks/queries/useOverallQuery";
import { currentDate, previousDate } from "../../utilities/endpoints";

const getPercent = (talent) => {
  if (talent) return [0.4, 0.3, 0.1, 0.1, 0.1];
  else return [0.5, 0.3, 0.2];
};

const Today_yesterday_data = ({ dateTab, todayData, yesterdayData, talent, todayEst, yesterdayEst, percent }) => {
  switch (dateTab) {
    case images.todayBtn:
      return <LeaderBoardGifter data={todayData} talent={talent} estemated={todayEst} percentage={percent} />;
    case images.perviousDayBtn:
      return <LeaderBoardGifter previousDay data={yesterdayData} talent={talent} percentage={percent} estemated={yesterdayEst} />;
    default:
      return null;
  }
};

const Daily_Overall_Board = ({ timeTab, todayData, yesterdayData, overallData, talent, estBeans, percent }) => {
  const [dateTab, setDateTab] = useState(images.todayBtn);

  switch (timeTab) {
    case images.dailyBtn:
      return (
        <>
          <ButtonsWithoutBG
            className="flex items-center justify-center gap-[3vw] relative z-10 mb-[3vw]"
            buttonOne={images.todayBtn}
            buttonTwo={images.perviousDayBtn}
            buttonWidth={"20vw"}
            buttonHeight={"8vw"}
            activeTab={dateTab}
            onClick={setDateTab}
          />
          <Today_yesterday_data
            key={1}
            dateTab={dateTab}
            todayData={todayData}
            yesterdayData={yesterdayData}
            talent={talent}
            todayEst={estBeans?.todayEst}
            yesterdayEst={estBeans?.yesterdayEst}
            percent={percent}
          />
        </>
      );
    case images.overallBtn:
      return <LeaderBoardGifter key={2} data={overallData} talent={talent} />;

    default:
      return null;
  }
};

const Gifter_TALENTBoard = ({
  userTab,
  todayUserData,
  yesterdayUserData,
  overallUserData,
  todayTalentData,
  yesterdayTalentData,
  overallTalentData,
}) => {
  const [timeTab, setTimeTab] = useState(images.dailyBtn);

  const { eventInfo } = useOverallQuery();

  const estBeans = {
    talent: {
      todayEst: (eventInfo && eventInfo?.beansPotInfo && eventInfo?.beansPotInfo?.[`DAILY_GEMS_${currentDate}`]) || 0,
      yesterdayEst: (eventInfo && eventInfo?.beansPotInfo && eventInfo?.beansPotInfo?.[`DAILY_GEMS_${previousDate}`]) || 0,
    },
    user: {
      todayEst: (eventInfo && eventInfo?.beansPotInfo && eventInfo?.beansPotInfo?.[`DAILY_USER_${currentDate}`]) || 0,
      yesterdayEst: (eventInfo && eventInfo?.beansPotInfo && eventInfo?.beansPotInfo?.[`DAILY_USER_${previousDate}`]) || 0,
    },
  };

  switch (userTab) {
    case "Talent":
      return (
        <>
          <ButtonsWithoutBG
            className="flex items-center justify-center gap-3 relative z-10 mb-[3vw]"
            buttonOne={images.dailyBtn}
            buttonTwo={images.overallBtn}
            buttonWidth={"25vw"}
            buttonHeight={"10vw"}
            activeTab={timeTab}
            onClick={setTimeTab}
          />
          <Daily_Overall_Board
            key={3}
            timeTab={timeTab}
            todayData={todayTalentData}
            yesterdayData={yesterdayTalentData}
            overallData={overallTalentData}
            talent={true}
            estBeans={estBeans.talent}
            percent={getPercent(true)}
          />
        </>
      );
    case "Gifter":
      return (
        <>
          <ButtonsWithoutBG
            className="flex items-center justify-center gap-3 relative z-10 mb-[3vw]"
            buttonOne={images.dailyBtn}
            buttonTwo={images.overallBtn}
            buttonWidth={"25vw"}
            buttonHeight={"10vw"}
            activeTab={timeTab}
            onClick={setTimeTab}
          />
          <Daily_Overall_Board
            key={4}
            timeTab={timeTab}
            todayData={todayUserData}
            yesterdayData={yesterdayUserData}
            overallData={overallUserData}
            estBeans={estBeans.user}
            percent={getPercent(false)}
          />
        </>
      );

    default:
      return null;
  }
};

export default function GiftingBoard() {
  const [userTab, setUserTab] = useState("Talent");

  const { data: todayUserData, isLoading: isLoadingTodayUserData } = useEventLeaderboardGiftersToday();
  const { data: yesterdayUserData, isLoading: isLoadingYesterdayUserData } = useEventLeaderboardGiftersPreviousDay();
  const { data: overallUserData, isLoading: isLoadingOverallUserData } = useEventLeaderboardGiftersOverall();
  const { data: todayTalentData, isLoading: isLoadingTodayTalentData } = useEventLeaderboardTalentsToday();
  const { data: yesterdayTalentData, isLoading: isLoadingYesterdayTalentData } = useEventLeaderboardTalentsPreviousDay();
  const { data: overallTalentData, isLoading: isLoadingOverallTalentData } = useEventLeaderboardTalentsOverall();

  return (
    <div>
      <img className="mt-1 mb-1" src={images.titleLeaderboard} alt="" />
      <ButtonsWithoutBG
        className="flex items-center justify-center relative z-10 mb-[3vw] gap-3"
        buttonOne={images.talentBtn}
        buttonTwo={images.gifterBtn}
        buttonWidth={"32vw"}
        buttonHeight={"12vw"}
        activeTab={userTab === "Talent" ? images.talentBtn : images.gifterBtn}
        onClick={() => setUserTab(userTab === "Talent" ? "Gifter" : "Talent")}
      />
      {isLoadingTodayUserData ||
      isLoadingYesterdayUserData ||
      isLoadingOverallUserData ||
      isLoadingTodayTalentData ||
      isLoadingYesterdayTalentData ||
      isLoadingOverallTalentData ? (
        <span className="text-amber-950 text-[4vw] text-center block h-[50vw]">Loading...</span>
      ) : (
        <Gifter_TALENTBoard
          userTab={userTab}
          todayUserData={todayUserData}
          yesterdayUserData={yesterdayUserData}
          overallUserData={overallUserData}
          todayTalentData={todayTalentData}
          yesterdayTalentData={yesterdayTalentData}
          overallTalentData={overallTalentData}
        />
      )}
    </div>
  );
}
