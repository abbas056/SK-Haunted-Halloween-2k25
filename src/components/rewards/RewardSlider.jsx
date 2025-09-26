import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { images } from "../../assets";

export const CarouselItem = ({ children }) => {
  return (
    <div className="gap-1 inline-flex items-center flex-col justify-center w-[100%] h-[100%] overflow-hidden relative">
      {children}
    </div>
  );
};

const RewardSlider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [highlightLeftArrow, setHighlightLeftArrow] = useState(false);
  const [highlightRightArrow, setHighlightRightArrow] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
        setHighlightLeftArrow(false);
        setHighlightRightArrow(true);
      }
    }, 1555555555500);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  const onClickLeft = () => {
    updateIndex(activeIndex - 1);
    setPaused(false);
    setHighlightLeftArrow(true);
    setHighlightRightArrow(false);
  };
  const onClickRight = () => {
    updateIndex(activeIndex + 1);
    setPaused(false);
    setHighlightLeftArrow(false);
    setHighlightRightArrow(true);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      updateIndex(activeIndex + 1);
      setHighlightLeftArrow(true);
      setHighlightRightArrow(false);
    },
    onSwipedRight: () => {
      updateIndex(activeIndex - 1);
      setHighlightLeftArrow(false);
      setHighlightRightArrow(true);
    },
  });

  return (
    <div
      {...handlers}
      className="w-[100%] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="w-[100%] whitespace-nowrap transition-transform"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" });
        })}
      </div>
      <div className="top-[17vw] justify-between w-[90%] left-0 right-0 m-auto absolute flex">
        <div>
          <img
            style={{ width: "5vw" }}
            className={highlightLeftArrow ? "grayscale-0" : "grayscale-25"}
            src={images.leftArrow}
            alt=""
            onClick={onClickLeft}
          />
        </div>
        <div>
          <img
            style={{ width: "5vw" }}
            className={highlightRightArrow ? "grayscale-0" : "grayscale-25"}
            src={images.rightArrow}
            alt=""
            onClick={onClickRight}
          />
        </div>
      </div>

      <div className="flex justify-center gap-1 absolute left-0 right-0 top-[38vw]">
        {React.Children.map(children, (child, index) => {
          return (
            <span
              className={`mt-[2vw] rounded-[50%] h-[1.6vw] w-[1.6vw] ${
                index === activeIndex ? "bg-[#ffffff]" : "bg-[#ffffff65]"
              }`}
              onClick={() => {
                updateIndex(index);
              }}
            ></span>
          );
        })}
      </div>
    </div>
  );
};

export default RewardSlider;
