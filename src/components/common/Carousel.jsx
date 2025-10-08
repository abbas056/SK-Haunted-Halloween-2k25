import React, { useState, Children, useEffect, useRef } from "react";
import { images } from "../../assets";
const widthSpan = 100;
const Carousel = ({ children, Infinite, arrows, indicator, tab, dailyBtn, singleList, className, width, height = "auto", setIndex = () => {} }) => {
  const carouselRef = useRef(0);
  const itemRef = useRef([]);

  const itemRefHandle = (el) => {
    if (el && !itemRef.current.includes(el)) {
      itemRef.current.push(el);
    }
  };

  const [sliderPosition, setSliderPosition] = useState(0);
  const [touchStartPos, setTouchStartPos] = useState(0);
  const [touchEndPos, setTouchEndPos] = useState(0);
  const [touch, setTouch] = useState(false);
  const [swiper, setSwiper] = useState(false);
  const [activeArrow, setActiveArrow] = useState("next"); // Track which arrow is active

  useEffect(() => {
    if (!singleList) {
      const interval = setInterval(() => {
        nextSlideHandler();
      }, 1500);
      return () => {
        clearInterval(interval);
      };
    }
  }, [sliderPosition]);

  const prevSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition > 0) {
      newPosition = newPosition - 1;
    } else if (Infinite) {
      newPosition = children?.length - 1;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
    setIndex(newPosition);
    setActiveArrow("prev"); // Set previous arrow as active
  };
  const nextSlideHandler = () => {
    let newPosition = sliderPosition;
    if (newPosition < children?.length - 1) {
      newPosition = newPosition + 1;
    } else if (newPosition > children?.length - 1 && newPosition < children?.length) {
      newPosition = 0;
    } else if (Infinite) {
      newPosition = 0;
    }
    translateFullSlides(newPosition);
    setSliderPosition(newPosition);
    setIndex(newPosition);
    setActiveArrow("next"); // Set next arrow as active
  };
  const touchStartHandler = (e) => {
    setTouchStartPos(e.targetTouches[0].clientX);
    setTouchEndPos(e.targetTouches[0].clientX);
    setTouch(true);
  };
  const touchMoveHandler = (e) => {
    setTouchEndPos(e.targetTouches[0].clientX);
    const frameWidth = carouselRef?.current?.offsetWidth;
    const translateDist = ((touchEndPos - touchStartPos) / frameWidth) * 100;
    translatePartialSlides(translateDist);
    if (touch === true) {
      setSwiper(true);
    }
  };
  const touchEndHandler = (e) => {
    if (swiper) {
      if (touchStartPos - touchEndPos > 75) {
        nextSlideHandler();
      } else if (touchStartPos - touchEndPos < -75) {
        prevSlideHandler();
      } else {
        jumpToSlideHandler(sliderPosition);
      }
    }
    setTouch(false);
    setSwiper(false);
  };
  const jumpToSlideHandler = (index) => {
    translateFullSlides(index);
    setSliderPosition(index);
    setIndex(index);
  };
  const translatePartialSlides = (toTranslate) => {
    let currentTranslate = -sliderPosition * widthSpan;
    let totalTranslate = currentTranslate + toTranslate;
    itemRef?.current?.forEach((elem) => {
      elem.style.transform = `translateX(${totalTranslate}%)`;
    });
  };
  const translateFullSlides = (newPos) => {
    let toTranslate = -widthSpan * newPos;
    itemRef?.current?.forEach((elem) => {
      elem.style.transform = `translateX(${toTranslate}%)`;
    });
  };
  const arrayChildren = Children.toArray(children);
  return (
    <div className="w-full gap-[2vw] flex flex-col items-center justify-center relative">
      <div className={`flex items-center justify-center relative ${className}`}>
        {arrayChildren?.length != 1 && arrows && (
          <button onClick={prevSlideHandler}>
            <img
              className={`absolute left-0 ${tab === 1 ? "top-[7vw]" : "top-[12vw]"} object-contain ${
                dailyBtn ? "w-[5vw] h-[5vw]" : "w-[9vw] h-[9vw]"
              } z-[99] transition-all ${activeArrow === "prev" ? "grayscale-0" : "grayscale"}`}
              src={dailyBtn ? images.previous : images?.leftArrow}
              alt=""
            />
          </button>
        )}
        <div
          className="flex items-center overflow-hidden"
          style={{
            width: width,
            height: height,
          }}
          ref={carouselRef}
          onTouchStart={(e) => {
            touchStartHandler(e);
          }}
          onTouchMove={(e) => {
            touchMoveHandler(e);
          }}
          onTouchEnd={(e) => {
            touchEndHandler(e);
          }}
        >
          {Children.map(arrayChildren, (child, index) => {
            return (
              <div key={index} className="flex items-center justify-center">
                <div
                  style={{
                    width: width,
                    height: height,
                  }}
                  className="w-fit inline-block align-top transition-all duration-500 ease-linear"
                  ref={itemRefHandle}
                >
                  {child}
                </div>
              </div>
            );
          })}
        </div>
        {arrayChildren?.length != 1 && arrows && (
          <button onClick={nextSlideHandler}>
            <img
              className={`absolute right-0 ${tab === 1 ? "top-[7vw]" : "top-[12vw]"} object-contain ${
                dailyBtn ? "w-[5vw] h-[5vw]" : "w-[9vw] h-[9vw]"
              } z-[99] transition-all ${activeArrow === "next" ? "grayscale-0" : "grayscale"}`}
              src={dailyBtn ? images.next : images?.rightArrow}
              alt=""
            />
          </button>
        )}
      </div>
      {(dailyBtn || singleList) && (
        <div className={`absolute flex items-center justify-center gap-[1vw] flex-shrink-0 ${dailyBtn ? "top-[22.5vw]" : "top-[22vw]"}`}>
          {Children?.map(arrayChildren, (child, index) => {
            return (
              <div
                key={index}
                className={`${singleList ? "w-[1.7vw] h-[1.7vw]" : "w-[1.5vw] h-[1.5vw]"} rounded-full flex-shrink-0 ${
                  singleList ? (sliderPosition === index ? "bg-[#c651dc]" : "bg-[#7304a6]") : sliderPosition === index ? "bg-[#f9ee02]" : "bg-[white]"
                }`}
                onClick={() => {
                  jumpToSlideHandler(index);
                }}
              ></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
