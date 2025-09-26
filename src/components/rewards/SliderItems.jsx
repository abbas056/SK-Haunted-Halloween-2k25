import React from "react";
import { images } from "../../assets";
import { getOrdinal } from "../../utilities/helper";
import Carousel from "../common/Carousel";
import Container from "../../containers/container";
import { rewGet } from "../../utilities/imageContext";

const SliderItemIndex = ({ index }) => {
  return (
    <Container
      image={images.rankBase}
      width="16vw"
      height="6vw"
      size="100% 100%"
      className="flex justify-center items-center text-center text-[2.8vw] text-[#aa4040] p-2"
    >
      Top {index} <sup>{getOrdinal(index)}</sup>
    </Container>
  );
};
const SliderItemIndexWithBackground = ({ index }) => {
  return (
    <div className="w-[25vw] flex items-center justify-center text-[2.6vw] text-center bg-[#545454] rounded-4xl px-1 py-0.5 text-white border-[1.5px] border-[#8c8787]">
      {index}
    </div>
  );
};

const SliderItem = ({ item, index }) => {
  return (
    <div className="flex flex-col items-center text-white">
      <Container width="100%" height="100%" className="flex flex-col items-center justify-center">
        <img className="w-[18vw] h-[18vw] z-10 object-contain" src={rewGet(item.desc)} alt="" key={index} />
      </Container>
      <Container image={images.rewNameBase} width="18vw" height="8vw" size="100% 100%" className="flex justify-center items-center p-2">
        <div className="inline-block align-middle text-[1.8vw] leading-none text-center">{item.percent}</div>
      </Container>
    </div>
  );
};
const SliderItems = ({ isBackground, rewards, tab }) =>
  rewards?.length > 0 && (
    <Carousel className="w-full" width="28vw" Infinite arrows={!tab} indicator={!tab}>
      {rewards?.map((item, i) => {
        let index = item.rank;
        return (
          <div className="w-full flex flex-col items-center" key={i}>
            {isBackground ? <SliderItemIndexWithBackground index={index} /> : <SliderItemIndex index={item.rank} />}
            <SliderItem item={item} index={index} />
          </div>
        );
      })}
    </Carousel>
  );

export default SliderItems;
