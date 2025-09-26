import React, { useEffect, useRef, useState } from "react";
import SVGA from "svgaplayerweb";

const SvgaFileLoader = ({
  children,
  className,
  src,
  identity,
  onClickHandle,
}) => {
  useEffect(() => {
    var player = new SVGA.Player(`#${identity}`);
    var parser = new SVGA.Parser(`#${identity}`);
    parser.load(src, function (videoItem) {
      player?.setVideoItem(videoItem);
      player?.startAnimation();
    });
    return () => {
      player?.clear();
    };
  }, []);

  return (
    <div onClick={onClickHandle} className={className} id={`${identity}`}>
      {children}
    </div>
  );
};

export default SvgaFileLoader;
