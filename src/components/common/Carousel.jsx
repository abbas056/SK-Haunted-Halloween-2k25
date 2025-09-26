import React, { useState, Children, useEffect, useRef } from "react";
import { images } from "../../assets";
const widthSpan = 100;
const Carousel = ({ children, Infinite, arrows, indicator, className, width, height = "auto", setIndex = () => {} }) => {
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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlideHandler();
    }, 1500);
    return () => {
      clearInterval(interval);
    };
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
            <img className="absolute left-0 top-[12vw] object-contain w-[8vw] h-[8vw] z-[99]" src={images?.leftArrow} alt="" />
          </button>
        )}
        <div
          className="flex items-center overflow-x-hidden"
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
            <img className="absolute right-0 top-[12vw] object-contain w-[8vw] h-[8vw] z-[99]" src={images?.rightArrow} alt="" />
          </button>
        )}
      </div>
      {/* {indicator && (
        <div className={`absolute flex items-center justify-center gap-[1.5vw] flex-shrink-0  top-[35vw]`}>
          {Children?.map(arrayChildren, (child, index) => {
            return (
              <div
                className={`w-[1.5vw] h-[1.5vw] rounded-full flex-shrink-0 ${sliderPosition === index ? "bg-[#b44d06]" : "bg-[#9c745d]"}`}
                onClick={() => {
                  jumpToSlideHandler(index);
                }}
              ></div>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default Carousel;
