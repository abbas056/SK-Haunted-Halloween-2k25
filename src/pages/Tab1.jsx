import React, { useState } from "react";
import PointGame from "../components/pages/PointGame";
import Board from "../components/pages/page1/Board";
import { images } from "../assets";
import useUserStore from "../store/userStore";
import { useOverallQuery } from "../hooks/queries/useOverallQuery";
import { usePopUpStore } from "../store/popUpStore";
import PopUpWrapper from "../components/popups/PopUp";
import { RecordPopupTabOne } from "../components/popups/Record";
import DetailPopUp from "../components/popups/Detail";
import Container from "../containers/container";
import HauntedHouseGame from "../components/pages/page1/HauntedHouseGame";
import ChestBox from "../components/pages/page1/ChestBox";
import { useLeaderboardPreviousDayTab1, useLeaderboardTodayTab1 } from "../hooks/queries/useTab1Query";
import { tabOneBeansRewards } from "../raw/users/rewards";

export default function Tab1({ tab }) {
  const { user } = useUserStore();
  const { eventInfo } = useOverallQuery(user?.uid);
  const { openPopUp, closePopUp } = usePopUpStore();
  const [userTab, setUserTab] = useState("today");
  const { data: todayData, isLoading: isLoadingTodayData } = useLeaderboardTodayTab1();
  const { data: prevDayData, isLoading: isLoadingPrevDayData } = useLeaderboardPreviousDayTab1();
  const isLoading = userTab === "today" ? isLoadingTodayData : isLoadingPrevDayData;
  return (
    <>
      <img
        className="absolute w-[22vw] h-[22vw] object-contain z-[99] top-[125vw] left-0"
        src={images.detailBtn}
        onClick={() =>
          openPopUp(
            <PopUpWrapper
              backgroundImage={images.largeBg}
              titleImage={images.titleDetails}
              onCloseClick={closePopUp}
              popUpHeight="160vw"
              popUpWidth="100%"
              popUpSize="100% 100%"
              popUpPos="center"
              popupTitleClass="w-[70%] z-[9] absolute top-[-5vw]"
              popupCloseClass="w-[8vw] h-[8vw]"
              className="h-[140vw] overflow-y-auto overflow-x-hidden"
            >
              <span className="m-auto text-[2.5vw] text-center text-white flex justify-center mb-2">
                EACH PLAYER USERS WILL GET <br />
                RANDOM TREAT POINTS BETWEEN 5-10
              </span>
              <DetailPopUp tab={1} />
            </PopUpWrapper>
          )
        }
        alt=""
      />
      <img
        className="absolute w-[22vw] h-[22vw] object-contain z-[99] top-[125vw] right-0"
        src={images.recordBtn}
        onClick={() =>
          openPopUp(
            <PopUpWrapper
              backgroundImage={images.largeBg}
              titleImage={images.titleRecords}
              onCloseClick={closePopUp}
              popUpHeight="165vw"
              popUpWidth="100%"
              popUpSize="100% 100%"
              popUpPos="center"
              popupTitleClass="w-[70%] z-[9] absolute top-[-5vw]"
              popupCloseClass="w-[8vw] h-[8vw]"
              className="h-[140vw] mt-[5vw] overflow-y-auto overflow-x-hidden"
            >
              <RecordPopupTabOne />
            </PopUpWrapper>
          )
        }
        alt=""
      />
      <PointGame
        background={images.mySpookyPointsBg}
        width="55%"
        height="17vw"
        pointIcon={images.mySpookyPointsIcon}
        pointText={`My Spooky Points:`}
        points={eventInfo?.gamePoints || 0}
        pointTextClassName="text-[white] text-[3vw] leading-3.5"
        className="flex items-center justify-start px-[5vw] pt-[2vw] pb-[4vw]  f-tangoSansItalic m-auto gap-0.5"
      />
      <Container
        className="relative flex flex-col justify-start items-center pb-[8vw]"
        image={images.hauntedHouseSectionBg}
        width="100%"
        size="100% 100%"
      >
        <img className=" w-[80%] mb-[-5vw]" src={images.hauntedHouseTitle} alt="" />
        <HauntedHouseGame key={1} gamePoints={eventInfo?.gamePoints || 0} />
        <ChestBox value={eventInfo?.collectItems || 0} />
        <PointGame
          background={images.myDailyTreatPointsBg}
          width="60%"
          height="17vw"
          pointIcon={images.myDailyTreatPointsIcon}
          pointText={`My Daily Treat Points:`}
          points={eventInfo?.dailyTreatPoints || 0}
          pointTextClassName="text-[white] text-[3vw] leading-3.5"
          className="flex items-center justify-start px-[6vw] pt-[2vw] pb-[2vw] f-tangoSansItalic m-auto gap-0.5"
        />
      </Container>
      <Board
        tab={tab}
        userTab={userTab}
        setUserTab={setUserTab}
        todayData={todayData}
        prevDayData={prevDayData}
        isLoadingData={isLoading}
        rewards={tabOneBeansRewards}
      />
    </>
  );
}
