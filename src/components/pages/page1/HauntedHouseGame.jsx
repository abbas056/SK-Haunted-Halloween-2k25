import React, { useEffect, useState } from "react";
import Container from "../../../containers/container";
import { images } from "../../../assets";
import { getDoorStatus } from "../../../utilities/helper";
import Controller from "./Controller";
import { usePopUpStore, useToastStore } from "../../../store/popUpStore";
import { useUserGameTab1 } from "../../../hooks/queries/useTab1Query";
import useUserStore from "../../../store/userStore";
import GamePopups from "../../popups/GamePopups";
import { popupsEndpoint } from "../../../utilities/popupsEndpoint";

function HauntedHouseGame({ gamePoints }) {
  const [combo, setCombo] = useState(1);
  const points = gamePoints / 30000;
  const { openPopUp } = usePopUpStore();
  const { openToast } = useToastStore();
  const { user } = useUserStore();
  const { mutate: playGame, data: playGameResponse, isLoading } = useUserGameTab1();
  const [itemName, setItemName] = useState("");
  const names = itemName
    .split("+") // split by +
    .map((part) => part.trim().replace(/^\d+\s*/, ""));
  const doorStatusArray = getDoorStatus(names);
  const {
    tab1Popups: { singleShotSuccess, multiplePlay, insufficientPoints },
  } = popupsEndpoint;

  useEffect(() => {
    if (playGameResponse) {
      const errorCode = playGameResponse?.errorCode;
      const errorMessage = playGameResponse?.errorMessage || playGameResponse?.msg || "Something went wrong, Please try again later";

      if (errorCode === 0) {
        const rewards = playGameResponse?.data?.rewardList || [];
        const itemMsg = playGameResponse?.data?.itemMsg || [];
        const treatPoints = playGameResponse?.data?.treatPoints || [];
        const hauntedResult = Object.keys(playGameResponse?.data?.hauntedResult).length;

        // Set item name first to update door status
        setItemName(itemMsg);

        // Add a small delay to show the door animation before popup
        setTimeout(() => {
          if (combo === 1) {
            openPopUp(
              <GamePopups
                titleImage={singleShotSuccess.title}
                popupTitleClass="absolute top-0 w-[60%]"
                backgroundImage={images.mediumBg}
                size="100% 100%"
                width="100%"
                height="100vw"
                className="relative flex items-center justify-center h-[100vw] text-white"
              >
                {singleShotSuccess.description({ treatPoints, itemMsg, rewards })}
              </GamePopups>
            );
            setCombo(1);
          } else {
            openPopUp(
              <GamePopups
                titleImage={multiplePlay.title}
                popupTitleClass="absolute top-0 w-[60%]"
                backgroundImage={images.mediumBg}
                size="100% 100%"
                width="100%"
                height="100vw"
                className="relative flex items-center justify-center h-[100vw] text-white"
              >
                {multiplePlay.description({ treatPoints, itemMsg, rewards, hauntedResult })}
              </GamePopups>
            );
            setCombo(1);
          }
          setTimeout(() => {
            setItemName("");
          }, 3000);
        }, 1000);
      } else if (errorCode === 10000004) {
        openPopUp(
          <GamePopups
            titleImage={insufficientPoints.title}
            popupTitleClass="absolute top-0 w-[60%]"
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
            popupTitleClass="absolute top-0 w-[60%]"
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

  return (
    <div id="haunted-house-game">
      <Container
        className="relative flex justify-center items-center m-auto"
        image={images.hauntedHouse}
        width="85vw"
        height="115vw"
        size="100% 100%"
      >
        {/* Game Content Here */}
        {doorStatusArray.map((door) => (
          <div
            key={door.id}
            className="absolute flex justify-center items-center"
            style={{
              width: door.width,
              height: door.height,
              left: door.left,
              right: door.right,
              top: door.top,
            }}
          >
            {/* Door Number */}
            <img
              className="absolute z-10"
              style={{
                width: "20vw",
                height: "7vw",
                left: "0%",
                right: "0%",
                margin: "auto",
                top: "-5vw",
              }}
              src={door.doorNumber}
              alt=""
            />
            {/* Shine Effect */}
            {door.isDoorOpen && (
              <img
                className="absolute z-20"
                style={{
                  width: "70%",
                  height: "70%",
                  left: "0%",
                  right: "0%",
                  margin: "auto",
                  top: "5vw",
                }}
                src={door.shine}
                alt=""
              />
            )}
            {/* Door Image */}
            <img
              className="absolute z-0"
              src={door.isDoorOpen ? door.openDoor : door.closeDoor}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        ))}
      </Container>
      <Controller
        combo={combo}
        setCombo={setCombo}
        max={points > 999 ? 999 : points}
        handleGameClick={handleGameClick}
        isLoading={isLoading}
        animation={false}
      />
    </div>
  );
}

export default HauntedHouseGame;
