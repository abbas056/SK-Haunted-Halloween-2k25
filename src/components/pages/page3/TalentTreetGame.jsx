import React, { useState, useEffect, useRef } from "react";
import { images } from "../../../assets";
import GameControls from "./GameControls";

function TalentTreetGame() {
  const [currentHouse, setCurrentHouse] = useState(0);
  const [coloredHouses, setColoredHouses] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isMoving, setIsMoving] = useState(false);

  // mascot starts at the top now
  const [mascotPosition, setMascotPosition] = useState({ x: 46, y: 150 });

  // fixed duration per step (ms) — increase to make walking slower
  const STEP_DURATION_MS = 1400;
  const [mascotTransitionMs, setMascotTransitionMs] = useState(STEP_DURATION_MS);

  const isMountedRef = useRef(true);
  useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  // House positions reversed - now flowing from top to bottom
  // House 1 is now at the top (previously house 7), House 7 is now at the bottom (previously house 1)
  const housePositions = [
    { x: 27, y: 148 }, // House 1 - top (was house 7)
    { x: 70, y: 135 }, // House 2 - (was house 6)
    { x: 17, y: 105 }, // House 3 - (was house 5)
    { x: 81, y: 85 }, // House 4 - (was house 4)
    { x: 17, y: 52 }, // House 5 - (was house 3)
    { x: 77, y: 22 }, // House 6 - (was house 2)
    { x: 25, y: 8 }, // House 7 - bottom (was house 1)
  ];

  // House images mapping - keeping the same visual order but now house 1 uses the previous house 7 image
  const houseImages = {
    1: images.house7, // Top house now uses house7 image
    2: images.house6,
    3: images.house5,
    4: images.house4,
    5: images.house3,
    6: images.house2,
    7: images.house1, // Bottom house now uses house1 image
  };

  const wait = (ms) => new Promise((res) => setTimeout(res, ms));

  const generateRandomNumber = () => {
    if (isMoving) return;

    const minHouse = currentHouse + 1;
    if (minHouse > 7) return; // already at last house

    const maxHouse = 7;
    const randomNum = Math.floor(Math.random() * (maxHouse - minHouse + 1)) + minHouse;

    // walk step-by-step from minHouse to randomNum
    walkStepByStep(minHouse, randomNum);
  };

  // Walk mascot step-by-step between house indices (1-based)
  const walkStepByStep = async (start, end) => {
    if (!isMountedRef.current) return;
    setIsMoving(true);

    for (let step = start; step <= end; step++) {
      if (!isMountedRef.current) break;

      const target = housePositions[step - 1];

      // Use a fixed duration for each step so travel feels slow and consistent
      setMascotTransitionMs(STEP_DURATION_MS);

      // move mascot to target (CSS transition will animate it slowly)
      setMascotPosition({ x: target.x, y: target.y });

      // wait exactly the step duration (+ small buffer) before marking arrival
      await wait(STEP_DURATION_MS + 60);

      if (!isMountedRef.current) break;

      // when mascot reaches this house, color it and update currentHouse
      setColoredHouses((prev) => (prev.includes(step) ? prev : [...prev, step]));
      setCurrentHouse(step);
    }

    // finished walking
    if (isMountedRef.current) {
      setIsMoving(false);
      if (end === 7) setShowPopup(true);
    }
  };

  const resetGame = () => {
    setCurrentHouse(0);
    setColoredHouses([]);
    setShowPopup(false);
    setIsMoving(false);
    setMascotPosition({ x: 46, y: 150 }); // reset to top position
  };

  const House = ({ houseNumber, position, isColored }) => {
    const houseImage = houseImages[houseNumber] || images.house1;
    return (
      <div
        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500`}
        style={{
          left: `${position.x}vw`,
          bottom: `${position.y}vw`,
        }}
      >
        <div
          className={`w-[20vw] h-[20vw] relative transition-all duration-500 ${
            isColored ? "filter brightness-110 saturate-110" : "filter grayscale brightness-50"
          }`}
        >
          <img src={houseImage} alt={`House ${houseNumber}`} className="w-full h-auto" />
        </div>
      </div>
    );
  };

  const Mascot = () => (
    <div
      className={`absolute transform -translate-x-1/2 transition-all ease-linear z-20 ${isMoving ? "scale-105" : "scale-100"}`}
      style={{
        left: `${mascotPosition.x}vw`,
        bottom: `${mascotPosition.y}vw`,
        transition: `left ${mascotTransitionMs}ms linear, bottom ${mascotTransitionMs}ms linear`,
      }}
    >
      <div className="relative z-10">
        <img className={`w-[20vw] h-[20vw] transition-transform duration-300 ${isMoving ? "animate-bounce" : ""}`} src={images.mascot} alt="Mascot" />
      </div>
    </div>
  );

  return (
    <>
      <div className="w-[95%] h-full relative">
        {housePositions.map((position, index) => (
          <House key={index} houseNumber={index + 1} position={position} isColored={coloredHouses.includes(index + 1)} />
        ))}
        <Mascot />

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gradient-to-br from-orange-400 to-red-500 p-8 rounded-xl shadow-2xl text-center max-w-md mx-4">
              <h2 className="text-3xl font-bold text-white mb-4">Congratulations!</h2>
              <p className="text-white mb-6">You have completed all levels!</p>
              <button onClick={resetGame} className="px-6 py-3 bg-white text-black rounded">
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Control */}
      <GameControls generateRandomNumber={generateRandomNumber} disabled={isMoving} />
    </>
  );
}

export default TalentTreetGame;
