import React, { useEffect, useState } from "react";
import { images } from "../../../assets";
import { usePopUpStore, useToastStore } from "../../../store/popUpStore";
import useUserStore from "../../../store/userStore";
import { checkpoints, houseArray, talentPath } from "../../../utilities/helper";
import GameControls from "./GameControls";
import { useTalentGameTab3 } from "../../../hooks/queries/useTab3Query";
import { popupsEndpoint } from "../../../utilities/popupsEndpoint";
import GamePopups from "../../popups/GamePopups";
import { useOverallQuery } from "../../../hooks/queries/useOverallQuery";
import { useQueryClient } from "@tanstack/react-query";

function TalentTreetGame() {
  const { openPopUp } = usePopUpStore();
  const { openToast } = useToastStore();
  const { user } = useUserStore();
  const { eventInfo, refetch } = useOverallQuery(user?.uid);
  const [combo, setCombo] = useState(1);
  const { mutate: playGame, isLoading } = useTalentGameTab3();
  const talentTreatIndex = (eventInfo && eventInfo?.talentTreatIndex) || 0;
  const queryClient = useQueryClient();
  // Animation states
  const [animatingMascot, setAnimatingMascot] = useState({
    state: false,
    image: images.mascot,
  });
  const [mascotIndex, setMascotIndex] = useState(0);

  const {
    tab3Popups: { successShot, insufficientPoints },
  } = popupsEndpoint;

  const curentIndex = checkpoints[talentTreatIndex];

  useEffect(() => {
    if (talentTreatIndex >= 0) {
      setMascotIndex(curentIndex === undefined ? 0 : curentIndex);
    }
  }, [eventInfo]);

  const handleGameClick = () => {
    if (!combo || isNaN(combo)) {
      openToast("Combo Number must be valid");
      return;
    }
    playGame(
      {
        playCount: combo,
        requestHeader: {
          userId: user?.uid,
          token: user?.token,
        },
      },
      {
        onSuccess: (playGameResponse) => {
          if (playGameResponse) {
            const errorCode = playGameResponse?.errorCode;
            const errorMessage = playGameResponse?.errorMessage || playGameResponse?.msg || "Something went wrong, Please try again later";

            if (errorCode === 0) {
              const rewards = playGameResponse?.data?.rewardList || [];
              const talentTreatFinalIndex = playGameResponse?.data?.talentTreatFinalIndex;
              const nextLvl = combo > 1 ? 7 : talentTreatFinalIndex == 0 ? 7 : talentTreatFinalIndex;
              const nextIndex = checkpoints[nextLvl];

              setAnimatingMascot({
                state: true,
                image: images.animations.mascotAnimation,
              });
              const timeinterval = setInterval(() => {
                setMascotIndex((prev) => {
                  if (prev < nextIndex) {
                    return prev + 1;
                  }
                  if (prev == checkpoints[checkpoints?.length - 1]) {
                    openPopUp(
                      <GamePopups
                        titleImage={successShot.title}
                        popupTitleClass="absolute top-0 w-[70%]"
                        backgroundImage={images.smallBg}
                        size="100% 100%"
                        width="100%"
                        height="100vw"
                        className="relative flex items-center justify-center h-[90vw] text-white"
                      >
                        {successShot.description({ rewards })}
                      </GamePopups>
                    );
                    setAnimatingMascot({
                      state: false,
                      image: images.mascot,
                    });
                    setCombo(1);
                    clearInterval(timeinterval);
                    refetch();
                    return 12;
                  }
                  openPopUp(
                    <GamePopups
                      titleImage={successShot.title}
                      popupTitleClass="absolute top-0 w-[70%]"
                      backgroundImage={images.smallBg}
                      size="100% 100%"
                      width="100%"
                      height="100vw"
                      className="relative flex items-center justify-center h-[90vw] text-white"
                    >
                      {successShot.description({ rewards })}
                    </GamePopups>
                  );
                  setAnimatingMascot({
                    state: false,
                    image: images.mascot,
                  });
                  setCombo(1);
                  clearInterval(timeinterval); // Stop the interval once the condition is met
                  refetch();
                  return prev;
                });
              }, 1000);
            } else if (errorCode === 10000004) {
              openPopUp(
                <GamePopups
                  titleImage={insufficientPoints.title}
                  popupTitleClass="absolute top-0 w-[70%]"
                  backgroundImage={images.smallBg}
                  size="100% 100%"
                  width="100%"
                  height="100vw"
                  className="relative flex items-center justify-center h-[60vw] text-white"
                >
                  {insufficientPoints.description}
                </GamePopups>
              );
              setCombo(1);
            } else {
              openPopUp(
                <GamePopups
                  titleImage={insufficientPoints.title}
                  popupTitleClass="absolute top-0 w-[70%]"
                  backgroundImage={images.smallBg}
                  size="100% 100%"
                  width="100%"
                  height="100vw"
                  className="relative flex items-center justify-center h-[60vw] text-white"
                >
                  {errorMessage}
                </GamePopups>
              );
              setCombo(1);
            }
          }
        },
      }
    );
  };
  return (
    <div className="w-full h-full relative">
      {houseArray?.map((house, index) => {
        // Check if this house should be colored (visited)
        const isVisited = talentTreatIndex >= index + 1;
        return (
          <img
            key={house.id}
            className={`absolute transition-all duration-300 ${!isVisited ? "grayscale" : ""}`}
            style={{
              width: house.width,
              height: house.height,
              left: house.left,
              bottom: house.bottom,
              top: house.top,
              right: house.right,
            }}
            src={house.house}
            alt={`House ${house.id}`}
          />
        );
      })}

      {/* Mascot positioned based on current progress with smooth transition */}
      <img
        className="absolute transition-all duration-700 ease-in-out w-[20vw] h-[20vw] object-contain"
        style={{
          left: `${talentPath[mascotIndex].x}vw`,
          top: `${talentPath[mascotIndex].y}vw`,
          transform: animatingMascot.state ? "scale(1.05)" : "scale(1)", // Slight scale during animation
        }}
        src={animatingMascot.image}
        alt="Mascot"
      />
      <GameControls
        combo={combo}
        setCombo={setCombo}
        handleGameClick={handleGameClick}
        isLoading={isLoading || animatingMascot.state} // Disable controls during animation
      />
    </div>
  );
}

export default TalentTreetGame;
