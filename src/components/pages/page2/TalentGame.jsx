import React, { useEffect, useState } from "react";
import { usePopUpStore, useToastStore } from "../../../store/popUpStore";
import useUserStore from "../../../store/userStore";
import { useTalentGameTab2 } from "../../../hooks/queries/useTab2Query";
import { popupsEndpoint } from "../../../utilities/popupsEndpoint";
import Container from "../../../containers/container";
import { images } from "../../../assets";
import GameSection from "./GameSection";
import TalentGameControllers from "./TalentGameControllers";
import GamePopups from "../../popups/GamePopups";

export default function TalentGame() {
  const [combo, setCombo] = useState(1);
  const [animation, setAnimation] = useState(false);

  const { openPopUp } = usePopUpStore();
  const { openToast } = useToastStore();
  const { user } = useUserStore();
  const { mutate: playGame, data: playGameResponse, isLoading } = useTalentGameTab2();
  const {
    tab2Popups: { singleShotSuccess, insufficientPoints },
  } = popupsEndpoint;
  useEffect(() => {
    if (playGameResponse) {
      const errorCode = playGameResponse?.errorCode;
      const errorMessage = playGameResponse?.errorMessage
        ? playGameResponse?.errorMessage
        : playGameResponse?.msg
        ? playGameResponse?.msg
        : "Something went wrong, Please try again later";
      if (errorCode == 0) {
        const rewards = playGameResponse?.data?.rewardList;
        setAnimation(true);
        setTimeout(() => {
          openPopUp(
            <GamePopups
              titleImage={singleShotSuccess.title}
              popupTitleClass="absolute top-0 w-[60%]"
              backgroundImage={images.gamePopupBg}
              size="100% 100%"
              width="100%"
              height="110vw"
              className="relative flex items-center justify-center h-[100vw] text-white"
            >
              {singleShotSuccess.description({
                rewards,
              })}
            </GamePopups>
          );
          setAnimation(false);
        }, 2000);
      } else if (errorCode === 10000004) {
        openPopUp(
          <GamePopups
            titleImage={insufficientPoints.title}
            popupTitleClass="absolute top-0 w-[60%]"
            backgroundImage={images.gamePopupBg}
            size="100% 100%"
            width="100%"
            height="110vw"
            className="relative flex items-center justify-center h-[100vw] text-white"
          >
            {insufficientPoints.description}
          </GamePopups>
        );
      } else {
        openPopUp(
          <GamePopups
            titleImage={insufficientPoints.title}
            popupTitleClass="absolute top-0 w-[60%]"
            backgroundImage={images.gamePopupBg}
            size="100% 100%"
            width="100%"
            height="110vw"
            className="relative flex items-center justify-center h-[100vw] text-white"
          >
            {errorMessage}
          </GamePopups>
        );
      }
      setCombo(1);
    }
  }, [playGameResponse]);

  const handleGameClick = () => {
    if (isNaN(combo)) {
      openToast("Combo Number Can not be empty");
      return;
    }
    if (combo == 0) {
      openToast("Combo Number Can not be Zero");
      return;
    }
    playGame({
      playCount: combo,
      requestHeader: {
        userId: user?.uid,
        token: user?.token,
      },
    });
  };
  return (
    <>
      <Container image={images.GameSectionBg} size="100% 100%" width="100%" height="150vw" className="flex flex-col items-center justify-start ">
        <GameSection animation={animation} />
        <TalentGameControllers combo={combo} setCombo={setCombo} handleGameClick={handleGameClick} isLoading={isLoading} />
      </Container>
      {/* <GamePopup open={alert} result={alertpopup} close={closePopup} /> */}
    </>
  );
}
