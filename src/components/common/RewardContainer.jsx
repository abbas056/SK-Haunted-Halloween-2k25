import React, { useState } from "react";
import Container from "../../containers/container";
import { images } from "../../assets";
import { rewGet } from "../../utilities/imageContext";
import Carousel from "./Carousel";
import { getCountDays } from "../../utilities/helper";

const RewardItem = ({ _data, singleList, combined }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[0.5vw]">
      <Container width={singleList ? "8vw" : "12vw"} height={singleList ? "8vw" : "12vw"} className="flex items-center justify-center">
        <img className="w-full h-full object-contain" src={rewGet(_data?.desc)} alt="" />
      </Container>
      {_data?.price && (
        <div className="flex items-center justify-center text-[1.4vw] font-bold bg-amber-800 border-[#fff] border-[0.2vw]  rounded-[3vw] px-[1vw] py-[0.3vw]  text-center text-white">
          <img className="w-[2vw] h-[2vw] object-contain inline-block align-middle" src={images.beanIcon} alt="" />
          <span className="flex items-center justify-center"> {_data?.price}</span>
        </div>
      )}
      {!combined && (
        <Container
          image={images.rewNameBase}
          width={singleList ? "10vw" : "15vw"}
          size="100% 100%"
          height={singleList ? "5vw" : "10vw"}
          className="flex items-center justify-center px-2"
        >
          <span className={`${singleList ? "text-[1.2vw]" : "text-[1.6vw]"} text-center leading-none text-white`}>
            {_data?.desc} {_data?.count && `${getCountDays(_data?.desc, _data?.count)}`}
          </span>
        </Container>
      )}
    </div>
  );
};

const RewardSingleList = ({ combined, _data, singleList }) => {
  return _data?.map((data, _index) => {
    return (
      <div key={_index}>
        <RewardItem _data={data} combined={combined} key={_index} singleList={singleList} />
      </div>
    );
  });
};

const RewardCarouselList = ({ _data, tab }) => {
  const [indexx, setIndexx] = useState(0);
  const __data = _data?.find((d, i) => i == indexx);
  return (
    <div className="flex flex-col w-[100%] items-center">
      <Carousel setIndex={setIndexx} indicator className="w-[90%]" width="46vw" Infinite arrows>
        {_data?.map((data, _index) => {
          return (
            <div className={`flex flex-col items-center justify-center gap-[2vw]`}>
              {tab === 1 && (
                <Container
                  image={images.infoTextBase}
                  size="100% 100%"
                  width="100%"
                  height="5vw"
                  className="flex items-center justify-center text-center text-[2.8vw] text-[#9b511b] "
                >
                  Daily Rewards for top 3 Winners
                </Container>
              )}
              <Container
                image={images.infoTextBase}
                // width="25vw"
                size="100% 100%"
                height="5vw"
                className="flex items-center justify-center text-[3vw] px-4 text-[#9b511b]"
              >
                {data.rank && `Top ${data.rank} ${data.target ? `Target: ${data.target}` : ""}`}
              </Container>
              <div className={`min-w-[100%] flex items-start justify-center gap-1 `}>
                <RewardSingleList _data={data.rewards} combined={data?.combined} />
              </div>
            </div>
          );
        })}
      </Carousel>

      {__data?.combined && (
        <Container
          image={images.rewNameBase}
          size="100% 100%"
          height="14vw"
          width="40vw"
          className="flex justify-center items-center text-center leading-none text-[2.2vw] text-white"
        >
          <span className="w-[70%]">
            {__data?.rewards?.map((dd, ii) =>
              ii !== 0
                ? " + " + (dd?.percent ? dd.percent : dd.desc + " " + getCountDays(dd.desc, dd.count))
                : dd?.percent
                ? dd.percent
                : dd.desc + " " + getCountDays(dd.desc, dd.count)
            )}
          </span>
        </Container>
      )}
    </div>
  );
};

export default function RewardContainer({ rewards, singleList, tab }) {
  return (
    <Container
      image={images.rewardsBg}
      width={tab ? "80%" : singleList ? "95%" : "100%"}
      size="100% 100%"
      height={tab === 1 ? "45vw" : tab === 2 ? "40vw" : singleList ? "35vw" : "40vw"}
      className={`relative flex items-center justify-center gap-1 pt-2 mb-[3vw]`}
    >
      {singleList ? (
        <div className="flex flex-col items-center justify-center">
          <Container image={images.rankBase} size="100% 100%" className="absolute text-center px-2 text-[3vw] text-[#b14d4d] top-[4vw]">
            Event Gifts
          </Container>
          <div className="flex">
            <RewardSingleList _data={rewards} singleList={singleList} />
          </div>
        </div>
      ) : (
        <RewardCarouselList _data={rewards} tab={tab} />
      )}
    </Container>
  );
}
