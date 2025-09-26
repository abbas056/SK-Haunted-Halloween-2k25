import React, { useRef, useState } from "react";
import SeeMore from "../SeeMore";
import RestWinners from "./rankings/RestWinners";

export default function WinnerBoard({ tab, data, count, width = "86%", height, talent, score, percentage, beans, previousDay }) {
  const [active, setActive] = useState(true);
  const restBoard = useRef(null);
  const handleChangeActive = () => {
    setActive((previous) => {
      return !previous;
    });
    if (!active) {
      restBoard.current.scrollTop = 0;
    }
  };
  return (
    <div className="w-[100%] flex flex-col justify-center items-center f-tangoSansItalic">
      <div
        ref={restBoard}
        className={`flex flex-col m-auto gap-1 ${!active ? "overflow-y-scroll" : "overflow-hidden"}`}
        style={{ height: height, width: width }}
      >
        {data &&
          data?.map(
            (
              {
                ranking, // ranking is the key for the ranking
                nickname,
                userScore,
                userLevel,
                actorLevel,
                portrait,
                userId,
                roomId,
                desc,
              },
              index
            ) => {
              const estBean = parseInt(Math.ceil(beans * (percentage?.length > 0 ? percentage[ranking - 1] : null)));
              return (
                <div key={index}>
                  <RestWinners
                    previousDay={previousDay}
                    userName={nickname}
                    userScore={userScore}
                    userAvatar={portrait}
                    index={index}
                    userId={userId}
                    listNumber={ranking || index + 1}
                    userLevel={userLevel}
                    actorLevel={actorLevel}
                    roomId={roomId ? roomId : userId}
                    talent={talent}
                    score={score}
                    estBean={estBean}
                    description={desc ? (Array.isArray(desc) ? desc : JSON.parse(desc)) : undefined}
                    tab={tab}
                  />
                </div>
              );
            }
          )}
      </div>
      {count > 10 ? <SeeMore active={active} handleChangeActive={handleChangeActive} /> : null}
    </div>
  );
}
