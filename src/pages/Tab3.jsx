import React from "react";
import PopUpWrapper from "../components/popups/PopUp";
import { images } from "../assets";
import DetailPopUp from "../components/popups/Detail";
import { usePopUpStore } from "../store/popUpStore";
import { RecordPopupTabThree } from "../components/popups/Record";
import TalentTreetGame from "../components/pages/page3/TalentTreetGame";
import Container from "../containers/container";
import useUserStore from "../store/userStore";
import { useOverallQuery } from "../hooks/queries/useOverallQuery";
import PointGame from "../components/pages/PointGame";
import WinnerBoard from "../components/leaderboard/WinnerBoard";
import { useWinnersDataTab3 } from "../hooks/queries/useTab3Query";

function Tab3({ tab }) {
  const { data: winnersData, isLoading } = useWinnersDataTab3();
  const { openPopUp, closePopUp } = usePopUpStore();
  const { user } = useUserStore();
  const { eventInfo } = useOverallQuery(user?.uid);
  return (
    <>
      <img
        className="absolute w-[22vw] h-[22vw] object-contain z-[99] top-[125vw] left-0"
        src={images.detailBtn}
        onClick={() =>
          openPopUp(
            <PopUpWrapper
              backgroundImage={images.smallBg}
              titleImage={images.titleDetails}
              onCloseClick={closePopUp}
              popUpHeight="120vw"
              popUpWidth="100%"
              popUpSize="100% 100%"
              popUpPos="center"
              popupTitleClass="w-[70%] z-[9] absolute top-[-5vw]"
              popupCloseClass="w-[8vw] h-[8vw]"
              className="h-[80vw] pt-[10vw] pb-[10vw] overflow-hidden"
            >
              <DetailPopUp tab={3} />
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
              className="h-[125vw] mt-[5vw] overflow-y-auto overflow-x-hidden"
            >
              <RecordPopupTabThree />
            </PopUpWrapper>
          )
        }
        alt=""
      />
      <Container image={images.talentTreatsGameBg} size="100% 100%" width="100%" height="220vw" className="flex flex-col items-center justify-start">
        <PointGame
          background={images.talentPointsBg}
          width="55%"
          height="22vw"
          pointIcon={images.talentPointsIcon}
          pointText={`My Talent Points:`}
          points={eventInfo?.gamePoints || 0}
          pointTextClassName="text-[white] text-[3vw] leading-3.5"
          className="flex items-center justify-start px-[5vw] f-tangoSansItalic gap-0.5 relative"
        />
        <TalentTreetGame gamePoints={eventInfo?.gamePoints || 0} />
      </Container>
      <Container
        image={images.winnersBg}
        size="100% 100%"
        width="100%"
        className="relative flex flex-col items-center justify-start px-[4vw] pt-[30vw] gap-[1vw] pb-[27vw]"
      >
        <img className="absolute w-[80%] top-[-4vw]" src={images.winnerTitle} alt="" />
        {isLoading ? (
          <span className="text-white text-[4vw] mt-[20vw] text-center block">Loading...</span>
        ) : winnersData?.count == 0 ? (
          <span className="text-white text-[4vw] mt-[20vw] text-center block">No Records Found</span>
        ) : (
          <WinnerBoard tab={tab} height="208vw" data={winnersData?.list} count={winnersData?.count} talent={true} />
        )}
      </Container>
    </>
  );
}

export default Tab3;
