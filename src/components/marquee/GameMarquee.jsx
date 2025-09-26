import React from "react";
import SingleMarquee from "./SingleMarquee";
import Marquee from "react-fast-marquee";

export default function GameMarquee({ data }) {
  const sliceData = data?.slice(0, 3);

  return (
    <div className="absolute w-[100vw] top-[46vw] h-fit">
      {sliceData?.length > 0 && (
        <Marquee gradient={false} speed={80}>
          {sliceData?.map((d, i) => (
            <SingleMarquee key={i} ranking={i + 1} image={d?.portrait && d?.portrait} score={d.userScore} userId={d.userId} name={d?.nickname} />
          ))}
        </Marquee>
      )}
    </div>
  );
}
