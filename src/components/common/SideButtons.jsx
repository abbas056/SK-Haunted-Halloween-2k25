import React from "react";

import { images } from "../../assets";
import LanguageDrop from "./LanguageDrop";
import { usePopUpStore } from "../../store/popUpStore";
import PopUpWrapper from "../popups/PopUp";
import EventGifting from "../popups/EventGifting";

import Guide from "../popups/Guide";
import RewardContainer from "./RewardContainer";
import { event_gift } from "../../raw/users/rewards";

export default function SideButtons({}) {
  const { openPopUp, closePopUp } = usePopUpStore();
  return (
    <>
      <LanguageDrop />
      <img
        className="absolute w-[22vw] h-[22vw] object-contain z-[99] top-[55vw] right-0"
        src={images.eventGiftingBtn}
        onClick={() =>
          openPopUp(
            <PopUpWrapper
              backgroundImage={images.largeBg}
              titleImage={images.titleEventGifting}
              onCloseClick={closePopUp}
              popUpHeight="165vw"
              popUpWidth="100%"
              popUpSize="100% 100%"
              popUpPos="center"
              popupTitleClass="w-[70%] z-[9] absolute top-[-8vw]"
              popupCloseClass="w-[8vw] h-[8vw]"
              className="h-[140vw] overflow-y-auto overflow-x-hidden"
            >
              <EventGifting />
            </PopUpWrapper>
          )
        }
        alt=""
      />
      <img
        className="absolute w-[22vw] h-[22vw] object-contain z-[99] top-[55vw] left-0"
        src={images.guideBtn}
        onClick={() =>
          openPopUp(
            <PopUpWrapper
              backgroundImage={images.largeBg}
              titleImage={images.titleGuide}
              onCloseClick={closePopUp}
              popUpHeight="165vw"
              popUpWidth="100%"
              popUpSize="100% 100%"
              popUpPos="center"
              popupTitleClass="w-[70%] z-[9] absolute top-[-8vw]"
              popupCloseClass="w-[8vw] h-[8vw]"
              className="h-[140vw] overflow-y-auto overflow-x-hidden"
            >
              <RewardContainer rewards={event_gift} singleList />
              <Guide />
            </PopUpWrapper>
          )
        }
        alt=""
      />
    </>
  );
}
