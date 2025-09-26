import { images } from "../assets";
import { usePopUpStore } from "../store/popUpStore";
import PopUpWrapper from "../components/popups/PopUp";
import { Rewards } from "./popupsEndpoint";

export const useRewardHandler = () => {
  const { openPopUp, closePopUp } = usePopUpStore();

  const handleButtonReward = (buttonType, points) => {
    // Define rewards based on button type and points
    const rewards = [
      {
        type: 1,
        count: points,
        desc: "Beans",
      },
      {
        type: 4,
        id: 1663,
        count: 1,
        desc: "Special Frame",
      },
    ];

    // Show reward popup
    openPopUp(
      <PopUpWrapper
        backgroundImage={images.detailsBg}
        titleImage={images.congratsTitle}
        onCloseClick={closePopUp}
        popUpHeight="160vw"
        popUpWidth="100%"
        popUpSize="contain"
        popUpPos="center"
        popupTitleClass="w-full h-[15vw] object-contain z-[9]"
        popupCloseClass="w-[10vw] h-[10vw] object-contain"
        className="h-[140vw] mt-[-5vw]"
      >
        <div className="px-[2vw] text-[5vw] leading-[6vw] text-white">
          Congratulations! You have won:
          <Rewards rewards={[rewards]} />
        </div>
      </PopUpWrapper>
    );

    return rewards;
  };

  return { handleButtonReward };
};
