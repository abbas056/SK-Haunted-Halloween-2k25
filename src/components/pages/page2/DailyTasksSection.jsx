import React from "react";
import { goTo, gotToTopUp, openShortPage } from "../../../utilities/helper";
import Container from "../../../containers/container";
import { images } from "../../../assets";
import { rewGet } from "../../../utilities/imageContext";
import PointGame from "../PointGame";
import useUserStore from "../../../store/userStore";
import { useOverallQuery } from "../../../hooks/queries/useOverallQuery";
import { currentDate } from "../../../utilities/endpoints";

function DailyTasksSection({ setTabs, streamId, randomUserId, isLive }) {
  const { user } = useUserStore();
  const { eventInfo } = useOverallQuery(user?.uid);
  const myDailyTasks = eventInfo?.taskInfoList || [];
  const myDailyCandySent = (eventInfo && eventInfo?.dailyCandySend) || 0;
  const myDailyCandyReceived = (eventInfo && eventInfo?.dailyCandyReceived) || 0;

  const redirectTo = (index) => {
    if (index === 0) {
      setTabs({ tab1: true });
      setTimeout(() => {
        const el = document.getElementById("haunted-house-game");
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    } else if (index === 1 || (index === 2) | (index === 3)) {
      goTo(isLive, streamId, streamId);
    } else if (index === 4) {
      gotToTopUp();
    } else if (index === 5) {
      goTo(false, randomUserId, randomUserId);
    } else if (index === 6) {
      openShortPage();
    }
  };
  return (
    <div className="w-[90%] flex flex-col items-center justify-center">
      <div className="w-full h-auto flex flex-col justify-center items-start text-white f-tangoSansItalic gap-1">
        {myDailyTasks.map((task, index) => (
          <div key={index} className="w-full flex items-center justify-center relative gap-1">
            <Container
              image={images.taskBase}
              size="100% 100%"
              width="60%"
              height="12vw"
              className="flex items-center justify-start pl-6 pr-4  pt-4 pb-2  relative text-[2.5vw] text-[#980b01]"
            >
              <span className="w-[90%] leading-4"> {task.desc}</span>
              {task.isComplete && <img className="w-[9vw] h-[8vw] absolute top-[2vw] right-[0vw]" src={images.completed} alt="" />}
            </Container>
            <button
              disabled={task.isComplete}
              className="w-[10%] h-[8vw]"
              onClick={() => {
                redirectTo(index);
              }}
            >
              <img className={`w-[8vw] h-[8vw] ${task.isComplete ? "grayscale" : ""}`} src={images.goBtn} alt="Go" />
            </button>
            {task?.rewardList?.map((reward, idx) => (
              <div className="w-[10%] flex flex-col items-center justify-center text-[1.3vw] gap-0.5" key={idx}>
                <img className="w-[6vw] h-[6vw]" src={rewGet(reward.desc)} alt="" />
                <span className="text-center">{reward.desc}</span>
              </div>
            ))}
            <div className="w-[10%] flex flex-col items-center justify-center gap-0.5 text-[1.3vw]">
              <img className="w-[6vw] h-[6vw]" src={images.giftBox} alt="" />
              <span className="text-center">Candy Treat x{task.bonus}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[90%] flex  items-center justify-center gap-1 mt-4 ">
        <PointGame
          background={images.myDailyCandySentBase}
          width="45%"
          height="14vw"
          pointIcon={images.myDailyCandySentIcon}
          pointText={`My Daily Candy Treat Sent:`}
          points={myDailyCandySent}
          pointTextClassName="text-[white] text-[2.5vw] leading-3 text-left"
          className="flex items-center justify-center px-4 f-tangoSansItalic shadow "
        />
        <PointGame
          background={images.myDailyCandyReceivedBase}
          width="45%"
          height="14vw"
          pointIcon={images.mMyDailyCandyReceivedIcon}
          pointText={`My Daily Candy Treat Received:`}
          points={myDailyCandyReceived}
          pointTextClassName="text-[white] text-[2.5vw] leading-3 text-left"
          className="flex items-center justify-center px-4 f-tangoSansItalic shadow "
        />
      </div>
    </div>
  );
}

export default DailyTasksSection;
