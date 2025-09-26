import React from "react";
import TopEventProfiles from "./TopEventProfiles";
import WinnerBoard from "../leaderboard/WinnerBoard";
import Container from "../../containers/container";

export default function LeaderBoardGifter({ data, talent, percentage, estemated, previousDay }) {
  const topData = data?.list?.length > 0 ? data?.list?.slice(0, 3) : [];
  const restData = data?.list?.length > 3 ? data?.list?.slice(3) : [];

  if (data?.count === 3) topData?.push({});
  if (data?.count === 0) {
    return (
      <div className="w-full block h-[50vw]">
        <span className="w-fit mx-auto mt-[10vw] block text-[4vw] text-white">No Data Found</span>
      </div>
    );
  }
  return (
    <>
      <Container className="flex justify-center items-center mt-[25vw]" width="100%">
        <TopEventProfiles previousDay={previousDay} data={topData} talent={talent} percentage={percentage} beans={estemated} />
      </Container>
      <WinnerBoard
        previousDay={previousDay}
        percentage={percentage}
        beans={estemated}
        talent={talent}
        width="100%"
        height="140vw"
        data={restData}
        count={data?.count}
      />
    </>
  );
}
