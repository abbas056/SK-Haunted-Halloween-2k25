import React from "react";
import SliderItems from "../../rewards/SliderItems";

import Beanspot from "../../rewards/Beanspot";
import Container from "../../../containers/container";
import { images } from "../../../assets";

function RewardsBox({ isBackground = true, rewards, counter, tab }) {
  return (
    <Container image={images.rewardsBg} width="100%" height="40vw" size="100% 100%" className=" m-auto flex justify-center  items-center px-5">
      <div className="w-[45%] flex items-center justify-center">
        <Beanspot isBackground={isBackground} beans={counter} />
      </div>
      <div className="w-[45%] flex items-center justify-center">
        <SliderItems isBackground={isBackground} rewards={rewards} tab={tab} />
      </div>
    </Container>
  );
}

export default RewardsBox;
