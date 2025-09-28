import React, { useEffect, useState } from "react";
import { images } from "../../../assets";
import { usePopUpStore, useToastStore } from "../../../store/popUpStore";
import useUserStore from "../../../store/userStore";
import { houseArray } from "../../../utilities/helper";
import GameControls from "./GameControls";
import { useTalentGameTab3 } from "../../../hooks/queries/useTab3Query";
import { popupsEndpoint } from "../../../utilities/popupsEndpoint";
import GamePopups from "../../popups/GamePopups";
import { useOverallQuery } from "../../../hooks/queries/useOverallQuery";

function TalentTreetGame() {
  const { openPopUp } = usePopUpStore();
  const { openToast } = useToastStore();
  const { user } = useUserStore();
  const { eventInfo } = useOverallQuery(user?.uid);
  const [combo, setCombo] = useState(1);
  const { mutate: playGame, data: playGameResponse, isLoading } = useTalentGameTab3();
  const talentTreatIndex = (eventInfo && eventInfo?.talentTreatIndex) || 0;

  // Animation states
  const [animatingMascot, setAnimatingMascot] = useState(false);
  const [currentMascotPosition, setCurrentMascotPosition] = useState(talentTreatIndex);
  const [visibleHouses, setVisibleHouses] = useState(talentTreatIndex);

  const {
    tab3Popups: { successShot, insufficientPoints },
  } = popupsEndpoint;

  // Initialize states when component mounts or talentTreatIndex changes from API
  useEffect(() => {
    if (!animatingMascot) {
      setCurrentMascotPosition(talentTreatIndex);
      setVisibleHouses(talentTreatIndex);
    }
  }, [talentTreatIndex, animatingMascot]);

  // Function to get mascot position based on position index
  const getMascotPosition = (positionIndex) => {
    if (positionIndex === 0) {
      // Initial position
      return {
        left: "43vw",
        top: "0",
        width: "20vw",
        height: "20vw",
      };
    }

    // Find the house where mascot should be positioned
    const currentHouse = houseArray.find((house) => house.id === positionIndex);
    if (currentHouse) {
      return {
        left: currentHouse.left || "auto",
        right: currentHouse.right || "auto",
        top: currentHouse.top || "auto",
        bottom: currentHouse.bottom || "auto",
        width: "20vw",
        height: "20vw",
      };
    }

    // Fallback to initial position
    return {
      left: "43vw",
      top: "0",
      width: "20vw",
      height: "20vw",
    };
  };

  // Animation function
  const animateMascotMovement = async (finalIndex, onComplete) => {
    if (finalIndex <= currentMascotPosition) {
      onComplete();
      return;
    }

    setAnimatingMascot(true);

    // Move mascot step by step
    for (let i = currentMascotPosition + 1; i <= finalIndex; i++) {
      // Move mascot to next position
      setCurrentMascotPosition(i);

      // Wait for movement animation
      await new Promise((resolve) => setTimeout(resolve, 800)); // 800ms per step

      // Color the house after mascot reaches it
      setVisibleHouses(i);

      // Small pause after coloring house
      await new Promise((resolve) => setTimeout(resolve, 300));
    }

    setAnimatingMascot(false);
    onComplete();
  };

  useEffect(() => {
    if (playGameResponse) {
      const errorCode = playGameResponse?.errorCode;
      const errorMessage = playGameResponse?.errorMessage || playGameResponse?.msg || "Something went wrong, Please try again later";

      if (errorCode === 0) {
        const rewards = playGameResponse?.data?.rewardList || [];
        const talentTreatFinalIndex = playGameResponse?.data?.talentTreatFinalIndex || currentMascotPosition;

        // Animate mascot movement before showing popup
        animateMascotMovement(talentTreatFinalIndex, () => {
          // Show success popup after animation completes
          setTimeout(() => {
            openPopUp(
              <GamePopups
                titleImage={successShot.title}
                popupTitleClass="absolute top-0 w-[70%]"
                backgroundImage={images.smallBg}
                size="100% 100%"
                width="100%"
                height="100vw"
                className="relative flex items-center justify-center h-[100vw] text-white"
              >
                {successShot.description({ rewards })}
              </GamePopups>
            );
            setCombo(1);
          }, 500);
        });
      } else if (errorCode === 10000004) {
        openPopUp(
          <GamePopups
            titleImage={insufficientPoints.title}
            popupTitleClass="absolute top-0 w-[70%]"
            backgroundImage={images.smallBg}
            size="100% 100%"
            width="100%"
            height="100vw"
            className="relative flex items-center justify-center h-[100vw] text-white"
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
            className="relative flex items-center justify-center h-[100vw] text-white"
          >
            {errorMessage}
          </GamePopups>
        );
        setCombo(1);
      }
    }
  }, [playGameResponse]);

  const handleGameClick = () => {
    if (!combo || isNaN(combo)) {
      openToast("Combo Number must be valid");
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

  const mascotPosition = getMascotPosition(currentMascotPosition);

  return (
    <div className="w-full h-full relative">
      {houseArray?.map((house, i) => {
        // Check if this house should be colored (visited)
        const isVisited = house.id <= visibleHouses;

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
        className="absolute transition-all duration-700 ease-in-out"
        style={{
          left: mascotPosition.left,
          right: mascotPosition.right,
          top: mascotPosition.top,
          bottom: mascotPosition.bottom,
          width: mascotPosition.width,
          height: mascotPosition.height,
          transform: animatingMascot ? "scale(1.05)" : "scale(1)", // Slight scale during animation
        }}
        src={images.mascot}
        alt="Mascot"
      />

      <GameControls
        combo={combo}
        setCombo={setCombo}
        handleGameClick={handleGameClick}
        isLoading={isLoading || animatingMascot} // Disable controls during animation
      />
    </div>
  );
}

export default TalentTreetGame;
