import React, { useEffect, useState } from "react";
import { images } from "../../../assets";
import Controller from "./Controller";
import GamePopups from "./../../popups/GamePopups";
import { usePopUpStore, useToastStore } from "../../../store/popUpStore";
import { useRechargeWeaponTab1, useUserGameTab1 } from "../../../hooks/queries/useTab1Query";
import { popupsEndpoint } from "../../../utilities/popupsEndpoint";
import { useSvga } from "../../../hooks/svga/useSvga";
import CageAnimation from "./CageAnimation";
import useUserStore from "../../../store/userStore";
import Container from "../../../containers/container";

function HuntGame({ gamePoints, subTabs }) {
  const [combo, setCombo] = useState(1);
  const points = gamePoints / 30000;
  const { openPopUp } = usePopUpStore();
  const { openToast } = useToastStore();
  const { user } = useUserStore();
  const { mutate: playGame, data: playGameResponse, isLoading } = useUserGameTab1();
  const [cageAnimal, setCageAnimal] = useState("");
  const [animation, setAnimation] = useState({ start: false, type: "" });
  const [rechargeData, setRechargeData] = useState(null);
  const {
    tab1Popups: { singleShotSuccess, multiplePlay, insufficientPoints, rechargeNeeded, rechargeSuccessful, insufficientHuntPoints },
  } = popupsEndpoint;

  const { player: riffleSingleAnimation } = useSvga({
    src: subTabs.jungleHunt ? images.animations.blackRiffleSingleAnimation : images.animations.goldenRiffleSingleAnimation,
    id: "riffleSingleAnimation",
  });
  const { player: riffleComboAnimation } = useSvga({
    src: subTabs.jungleHunt ? images.animations.blackRiffleComboAnimation : images.animations.goldenRiffleComboAnimation,
    id: "riffleComboAnimation",
  });
  const animalPlayers = {
    lion: useSvga({ src: images.animations.lionTarget, id: "lionTarget" }).player,
    wolf: useSvga({ src: images.animations.wolfTarget, id: "wolfTarget" }).player,
    tiger: useSvga({ src: images.animations.tigerTarget, id: "tigerTarget" }).player,
    leopard: useSvga({ src: images.animations.leopardTarget, id: "leopardTarget" }).player,
    cheetah: useSvga({ src: images.animations.cheetahTarget, id: "cheetahTarget" }).player,
  };
  const handleGameAnimation = async (player, type) => {
    return new Promise((resolve) => {
      if (!player?.startAnimation) return resolve();
      setAnimation({ start: true, type });
      player.startAnimation();
      setTimeout(() => {
        player.pauseAnimation?.();
        setAnimation({ start: false, type: "" });
        resolve();
      }, 3000);
    });
  };
  function RechargeNeededDescription({ onRechargeComplete }) {
    const { mutate: recharge, isPending } = useRechargeWeaponTab1();
    const { user } = useUserStore();

    const handleRecharge = () => {
      recharge(
        {
          userId: user?.uid,
          token: user?.token,
        },
        {
          onSuccess: (data) => {
            onRechargeComplete(data); // pass to parent
          },
          onError: (error) => {
            onRechargeComplete({ errorCode: -1, errorMessage: error.message });
          },
        }
      );
    };

    return (
      <div className="h-full flex flex-col items-center justify-center">
        <div className="px-[2vw] text-[5vw] leading-[6vw] text-white">
          You need more <span className="text-[#ffe600]">weapon energy</span>
          <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.weponEnergyIcon} alt="" /> to play. Please recharge
          your <span className="text-[#ffe600]">weapon</span>{" "}
          <img className="w-[5vw] h-[5vw] object-contain inline-block align-middle" src={images.handGunIcon} alt="" /> by tapping the
          <span className="text-[#ffe600]">"Recharge"</span> button below. Each recharge costs{" "}
          <span className="text-[#ffe600]">100,000 Hunt Points.</span> <br />
          <Container
            className={`flex justify-center items-center relative m-auto px-[3vw] py-[3vw] mt-[5vw]  ${isPending ? "grayscale" : ""}`}
            image={images.textBase}
            width="55%"
            height="15vw"
            size="100% 100%"
          >
            <button disabled={isPending} onClick={handleRecharge} className={`f-tangoSans text-[4.5vw]`}>
              {isPending ? "Recharging.." : "Recharge"}
            </button>
          </Container>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (playGameResponse) {
      const errorCode = playGameResponse?.errorCode;
      const errorMessage = playGameResponse?.errorMessage || playGameResponse?.msg || "Something went wrong, Please try again later";

      if (errorCode === 0) {
        const animalMsg = playGameResponse?.data?.animalMsg || "";
        const rewards = playGameResponse?.data?.rewardList || [];
        const firstAnimal = animalMsg.split(" x ")[0]?.trim().split(" ")[0]?.toLowerCase();
        const targetPlayer = animalPlayers[firstAnimal] || animalPlayers["lion"];

        const showPopupAndCage = (popup) => {
          handleCageAnimation(firstAnimal);
          openPopUp(
            <GamePopups
              titleImage={popup.title}
              popupTitleClass="absolute top-0 w-[60%]"
              backgroundImage={images.gamePopupBg}
              size="100% 100%"
              width="100%"
              height="110vw"
              className="relative flex items-center justify-center h-[100vw] text-white"
            >
              {popup.description({ score: animalMsg, rewards })}
            </GamePopups>
          );
        };

        if (combo === 1) {
          handleGameAnimation(targetPlayer, `${firstAnimal}Target`).then(() => {
            handleGameAnimation(riffleSingleAnimation, "riffleSingleAnimation").then(() => {
              showPopupAndCage(singleShotSuccess);
              setCombo(1);
            });
          });
        } else {
          handleGameAnimation(targetPlayer, `${firstAnimal}Target`).then(() => {
            handleGameAnimation(riffleComboAnimation, "riffleComboAnimation").then(() => {
              showPopupAndCage(multiplePlay);
              setCombo(1);
            });
          });
        }
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
      } else if (errorCode === 10000012) {
        openPopUp(
          <GamePopups
            titleImage={images.rechargeNeeded}
            popupTitleClass="absolute top-0 w-[60%]"
            backgroundImage={images.gamePopupBg}
            size="100% 100%"
            width="100%"
            height="110vw"
            className="relative flex items-center justify-center h-[100vw] text-white"
          >
            <RechargeNeededDescription onRechargeComplete={setRechargeData} />
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
    }
  }, [playGameResponse]);

  useEffect(() => {
    if (rechargeData) {
      const errorCode = rechargeData?.errorCode;
      const errorMessage = rechargeData?.errorMessage || rechargeData?.msg || "Something went wrong, Please try again later";
      const rewards = rechargeData?.data?.rewardList || [];

      const popup = {
        0: rechargeSuccessful,
        10000004: insufficientHuntPoints,
      }[errorCode];

      openPopUp(
        <GamePopups
          titleImage={popup?.title || insufficientPoints.title}
          popupTitleClass="absolute top-0 w-[60%]"
          backgroundImage={images.gamePopupBg}
          size="100% 100%"
          width="100%"
          height="110vw"
          className="relative flex items-center justify-center h-[100vw] text-white"
        >
          {popup?.description ? popup.description({ rewards }) : errorMessage}
        </GamePopups>
      );
      setCombo(1);
      setRechargeData(null); // reset after use
    }
  }, [rechargeData]);

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

  const handleCageAnimation = (animal) => {
    setCageAnimal(animal);
  };

  const animalPositions = {
    lion: "right-[-15vw] top-[-18vw]",
    wolf: "right-[-17vw] bottom-[-6vw]",
    tiger: "left-[-18vw] bottom-[2vw]",
    leopard: "left-[-22vw] top-[-22vw]",
    cheetah: "left-[5vw] top-[-30vw] w-[50vw] h-[50vw]",
  };

  return (
    <>
      <div className="relative w-[85%] h-[85vw]">
        <img className="absolute w-[30vw] left-[0vw] top-[17vw]" src={images.leopard} alt="" />
        <img className="absolute w-[20vw] left-[30vw] top-[8vw]" src={images.cheetah} alt="" />
        <img className="absolute w-[28vw] right-[6vw] top-[16vw]" src={images.lion} alt="" />
        <img className="absolute w-[30vw] left-[2vw] bottom-[3vw]" src={images.tiger} alt="" />
        <img
          className={`absolute w-[25vw] left-[30vw] bottom-[25vw] transition-opacity duration-300 ${animation.start ? "opacity-0" : "opacity-100"}`}
          src={images.target}
          alt=""
        />
        <img className="absolute w-[30vw] right-[3vw] bottom-[2vw]" src={images.wolf} alt="" />
        {/* Target Animation Canvases */}
        {["lion", "wolf", "tiger", "leopard", "cheetah"].map((animal) => (
          <div
            key={animal}
            id={`${animal}Target`}
            className={`absolute w-full h-full left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 ${
              animation.start && animation.type === `${animal}Target` ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {!!cageAnimal && <CageAnimation show={!!cageAnimal} position={animalPositions[cageAnimal]} onEnd={() => setCageAnimal("")} />}{" "}
      </div>

      <Controller
        combo={combo}
        setCombo={setCombo}
        max={points > 999 ? 999 : points}
        handleGameClick={handleGameClick}
        isLoading={isLoading}
        subTabs={subTabs}
        animation={animation}
      />
    </>
  );
}

export default HuntGame;
