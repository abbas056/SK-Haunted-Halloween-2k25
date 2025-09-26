import React from "react";
import Container from "../../containers/container";

export default function PointGame({ background, pointIcon, pointText, pointTextClassName, className, width, height }) {
  return (
    <Container image={background} size="100% 100%" width={width} height={height} className={className}>
      <img className="w-[8vw] h-[8vw]" src={pointIcon} alt="" />
      <span className={`leading-none text-left  ${pointTextClassName}`}>{pointText}</span>
    </Container>
  );
}
