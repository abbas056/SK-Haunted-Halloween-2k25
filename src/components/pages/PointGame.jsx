import React from "react";
import Container from "../../containers/container";

export default function PointGame({ background, pointIcon, pointText, points, pointTextClassName, className, width, height }) {
  return (
    <Container image={background} size="100% 100%" width={width} height={height} className={className}>
      <img className="w-[8vw] h-[8vw]" src={pointIcon} alt="" />
      <div className={`flex flex-col items-center justify-cente text-center ${pointTextClassName}`}>
        <span>{pointText}</span>
        <span>{points}</span>
      </div>
    </Container>
  );
}
