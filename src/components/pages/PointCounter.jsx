import React from "react";
import { images } from "../../assets";
import Container from "../../containers/container";

function PointCounter({ energy }) {
  const maxEnergy = 1000;

  // Calculate width percentage based on energy (max 100%)
  const fillPercentage = Math.min((energy / maxEnergy) * 100, 100);

  return (
    <Container image={images.EnergybarBase} width="50vw" height="12vw" className="flex items-center f-tangoSansItalic">
      <span className="w-[77%] ml-[8.5vw] h-[4vw] rounded-[1vw] flex justify-start items-center overflow-hidden mt-[0.5vw] relative">
        <img className="h-[5vw]" style={{ width: `${fillPercentage}%` }} src={images.FilledBar} alt="Filled energy bar" />
        <span className="absolute left-[13vw] top-[0.3vw] m-auto text-[2.8vw] text-white">{energy} Energy</span>
      </span>
    </Container>
  );
}

export default PointCounter;
