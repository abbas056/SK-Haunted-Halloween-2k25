import React, { useEffect, useState } from "react";
import Container from "../../../containers/container";
import { images } from "../../../assets";
import { usePopUpStore, useToastStore } from "../../../store/popUpStore";
import useUserStore from "../../../store/userStore";
import { useClaimChestTab1 } from "../../../hooks/queries/useTab1Query";
import { popupsEndpoint } from "../../../utilities/popupsEndpoint";
import GamePopups from "./../../popups/GamePopups";

function ChestBox({ value }) {
  const { openPopUp } = usePopUpStore();
  const { user } = useUserStore();
  const [openChestBox, setOpenChestBox] = useState(false);
  const { mutate: claimChest, data: claimChestResponse, isPending, status } = useClaimChestTab1();
  const {
    tab1Popups: { openChest, insufficientPoints },
  } = popupsEndpoint;

  useEffect(() => {
    if (claimChestResponse) {
      const errorCode = claimChestResponse?.errorCode;
      const errorMessage = claimChestResponse?.errorMessage || claimChestResponse?.msg || "Something went wrong, Please try again later";

      if (errorCode === 0) {
        // First, open the chest box to show animation
        setOpenChestBox(true);
        const rewards = claimChestResponse?.data?.rewardList || [];
        // Wait for chest opening animation before showing popup
        setTimeout(() => {
          openPopUp(
            <GamePopups
              titleImage={openChest.title}
              popupTitleClass="absolute top-0 w-[60%]"
              backgroundImage={images.smallBg}
              size="100% 100%"
              width="100%"
              height="100vw"
              className="relative flex items-center justify-center h-[70vw] text-white"
            >
              {openChest.description({ rewards })}
            </GamePopups>
          );

          // Close the chest after popup has been shown for some time
          setTimeout(() => {
            setOpenChestBox(false);
          }, 3000); // Close chest after 3 seconds of popup being shown
        }, 1000); // Wait 1 second for chest opening animation
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
      }
    }
  }, [claimChestResponse]);

  const handleClaimChest = () => {
    claimChest({
      userId: user?.uid,
      token: user?.token,
    });
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-3">
      <Container
        className="relative text-white"
        image={openChestBox ? images.chestBoxOpened : images.chestBoxClosed}
        width="75%"
        height="50vw"
        size="100% 100%"
      >
        <Container
          className="absolute flex justify-center items-center right-[16vw] top-[27vw] text-[3.2vw]"
          image={images.chestCounterBase}
          width="25%"
          height="8vw"
          size="100% 100%"
        >
          {value}/50
        </Container>
      </Container>
      <button disabled={value < 50 || isPending} className={`w-[50%] h-[12vw] ${isPending ? "grayscale" : ""}`} onClick={handleClaimChest}>
        <img className={`w-[95%] h-[12vw] ${value < 50 || isPending ? "grayscale" : ""}`} src={images.collectRewsButton} alt="Collect Rewards" />
      </button>
    </div>
  );
}

export default ChestBox;
