import React from "react";
import TopWinners from "./rankings/TopWinners";
import Container from "../../containers/container";
import WinnerBoard from "./WinnerBoard";

function LeaderBoard({ tab, data, score, previousDay, estimatedBeans }) {
  const topData = data?.list?.length > 0 ? data?.list?.slice(0, 3) : [];
  const restData = data?.list?.length > 3 ? data?.list?.slice(3) : [];
  if (data?.count === 3) topData?.push({});

  return (
    <div className="w-[100%] relative">
      {data?.count === 0 ? (
        <span className="text-white text-[4vw] text-center block">No Records Found</span>
      ) : (
        <div className="w-[100%] flex flex-col justify-center items-center">
          <Container className="flex justify-center items-start w-[80%] mt-[25vw]" width="90%">
            {topData?.map(({ ranking, nickname, userScore, userLevel, actorLevel, portrait, userId, roomId }, index) => {
              const rank = ranking || index + 1;
              const percentage = rank === 1 ? 0.5 : rank === 2 ? 0.3 : rank === 3 ? 0.2 : null;
              const calculatedBeans = percentage ? parseInt(Math.ceil(estimatedBeans * percentage)) : undefined;
              return (
                <TopWinners
                  key={index}
                  userName={nickname}
                  userScore={userScore}
                  userAvatar={portrait}
                  userId={userId}
                  roomId={roomId ? roomId : userId}
                  index={rank}
                  userLevel={userLevel}
                  actorLevel={actorLevel}
                  calculatedBeans={calculatedBeans}
                  previousDay={previousDay}
                  tab={tab}
                />
              );
            })}
          </Container>
          <WinnerBoard tab={tab} height="145vw" data={restData} count={data?.count} score={score} />
        </div>
      )}
    </div>
  );
}

export default LeaderBoard;
