import { useEffect, useRef } from "react";

import SVGA from "svgaplayerweb";

const useSvga = ({ src, id }) => {
  const player = useRef(null);
  useEffect(() => {
    const players = new SVGA.Player(`#${id}`);
    const parsers = new SVGA.Parser(`#${id}`);
    parsers.load(src, function (videoItem) {
      players?.setVideoItem(videoItem);
      // players?.startAnimation();
      player.current = players;
    });
    return () => {
      players.clear();
    };
  }, [player]);
  return { player: player.current };
};

export { useSvga };
