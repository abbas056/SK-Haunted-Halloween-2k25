import React, { useEffect, useState } from "react";
import { images } from "../assets";
import {
  useReceivedLeaderboardPrevTab2,
  useReceivedLeaderboardTodayTab2,
  useSentLeaderboardPrevTab2,
  useSentLeaderboardTodayTab2,
  useStreamTab2,
} from "../hooks/queries/useTab2Query";
import useUserStore from "../store/userStore";
import { useOverallQuery } from "../hooks/queries/useOverallQuery";
import DailyTasksSection from "../components/pages/page2/DailyTasksSection";
import Container from "../containers/container";
import Board from "../components/pages/page1/Board";
import { currentDate, previousDate } from "../utilities/endpoints";
import { tabTwoBeansRewards, tabTwoGemsRewards } from "../raw/users/rewards";
import axios from "axios";

export default function Tab2({ tab, setTabs }) {
  const { user } = useUserStore();
  const [userTab, setUserTab] = useState("today");
  const [sentRecievedTab, setSentRecievedTab] = useState("sentBtn");
  const { eventInfo: userData } = useOverallQuery(user.uid);
  const { data: sentTodayData, isLoading: isLoadingsentTodayData } = useSentLeaderboardTodayTab2();
  const { data: sentPrevData, isLoading: isLoadingsentPrevData } = useSentLeaderboardPrevTab2();
  const { data: receiveTodayData, isLoading: isLoadingreceiveTodayData } = useReceivedLeaderboardTodayTab2();
  const { data: receivePrevData, isLoading: isLoadingreceivePrevData } = useReceivedLeaderboardPrevTab2();
  const { data: stream } = useStreamTab2();
  const [randomUser, setRandomUser] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const beansPotSentToday = (userData && userData?.beansPotInfo && userData?.beansPotInfo?.[`DAILY_CANDY_SEND_${currentDate}`]) || 0;
  const beansPotSentPrevDay = (userData && userData?.beansPotInfo && userData?.beansPotInfo?.[`DAILY_CANDY_SEND_${previousDate}`]) || 0;
  const beansPotReceiveToday = (userData && userData?.beansPotInfo && userData?.beansPotInfo?.[`DAILY_CANDY_RECEIVED_${currentDate}`]) || 0;
  const beansPotReceivePrevDay = (userData && userData?.beansPotInfo && userData?.beansPotInfo?.[`DAILY_CANDY_RECEIVED_${previousDate}`]) || 0;

  const isSent = sentRecievedTab === "sentBtn";
  const isReceive = sentRecievedTab === "receivedBtn";
  const isToday = userTab === "today";
  const isPrev = userTab === "prevDay";

  let beansPotValue;
  let isLoading;
  let todayData;
  let prevData;

  if (isSent && isToday) {
    beansPotValue = beansPotSentToday;
    isLoading = isLoadingsentTodayData;
    todayData = sentTodayData;
  } else if (isSent && isPrev) {
    beansPotValue = beansPotSentPrevDay;
    isLoading = isLoadingsentPrevData;
    prevData = sentPrevData;
  } else if (isReceive && isToday) {
    beansPotValue = beansPotReceiveToday;
    isLoading = isLoadingreceiveTodayData;
    todayData = receiveTodayData;
  } else {
    beansPotValue = beansPotReceivePrevDay;
    isLoading = isLoadingreceivePrevData;
    prevData = receivePrevData;
  }

  useEffect(() => {
    axios
      .get(`https://api.kktv9.com/api/activity/topRank/getTopRankByRegion?pageCount=10&pageIndex=0&rankType=0&userType=2&cityId=0`)
      .then((response) => {
        setRandomUser(response?.data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (randomUser?.length > 0) {
      const randomIndex = Math.floor(Math.random() * randomUser.length);
      const random = randomUser[randomIndex];
      setSelectedUserId(random?.userId);
    }
  }, [randomUser]);

  return (
    <>
      <Container image={images.taskSectionBg} size="100% 100%" width="100%" className="flex flex-col  items-center justify-start pb-[30vw]">
        <Container
          image={images.infoTextBg}
          size="100% 100%"
          width="65%"
          height="50vw"
          className="flex items-end justify-center pb-15 f-tangoSansItalic  text-[2.8vw] text-white text-center text-shadow-[0_0_3px_rgba(0,0,0,0.8)]"
        >
          <span>
            Complete Daily Task to gain candy <br />
            treat gifts in backpack & win <br />
            Amazing Rewards{" "}
          </span>
        </Container>
        <DailyTasksSection setTabs={setTabs} streamId={stream && stream[1]?.userId} randomUserId={selectedUserId} isLive={true} />
      </Container>
      <Board
        tab={tab}
        userTab={userTab}
        setUserTab={setUserTab}
        sentRecievedTab={sentRecievedTab}
        setSentRecievedTab={setSentRecievedTab}
        todayData={todayData}
        prevDayData={prevData}
        beansPotValue={beansPotValue}
        isLoadingData={isLoading}
        rewards={isSent ? tabTwoBeansRewards : tabTwoGemsRewards}
      />
    </>
  );
}
