import React, { useEffect, useRef, useState } from "react";
import SVGA from "svgaplayerweb";

const SvgaMultiLoader = ({ cssClass, src, svgRef, identity, index }) => {
  useEffect(() => {
    var player = new SVGA.Player(`#${identity}`);
    var parser = new SVGA.Parser(`#${identity}`);
    parser.load(src, function (videoItem) {
      player?.setVideoItem(videoItem);
    });
    svgRef.current[index] = player;
    return () => {
      player?.clear();
    };
  }, []);

  return <div className={cssClass} id={`${identity}`}></div>;
};

export default SvgaMultiLoader;
