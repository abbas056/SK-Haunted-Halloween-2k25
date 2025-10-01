import React, { useState } from "react";
import { images } from "./assets";
import Container from "./containers/container";
import MainTabs from "./components/elements/MainTabs";
import SideButtons from "./components/common/SideButtons";
import { usePopUpStore, useToastStore } from "./store/popUpStore";
import GameMarquee from "./components/marquee/GameMarquee";
import { useLeaderboardTodayTab1 } from "./hooks/queries/useTab1Query";
import Toast from "./components/common/Toast";
import { useSentLeaderboardTodayTab2 } from "./hooks/queries/useTab2Query";

function App() {
  const [tabs, setTabs] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
  });

  const { popUp } = usePopUpStore();
  const { toast } = useToastStore();
  const { data: todayData } = useLeaderboardTodayTab1();
  const { data: sentTodayData } = useSentLeaderboardTodayTab2();

  return (
    <>
      <span id="extraContent"></span>
      <Container
        className="w-full min-h-screen overflow-x-hidden"
        image={tabs.tab1 ? images.background1 : tabs.tab2 ? images.background2 : images.tab3Bg}
        size="100% 100%"
        width="100vw"
      >
        {popUp.message && popUp.message}
        {toast.message && <Toast message={toast.message} />}
        <SideButtons />
        <Container image={images.header} width="100%" height="130vw" size="100% 100%">
          {tabs.tab1 || tabs.tab2 ? <GameMarquee tabs={tabs} data={tabs.tab1 ? todayData?.list : sentTodayData?.list} /> : null}
        </Container>
        <MainTabs tabs={tabs} setTabs={setTabs} />
        <span className="py-[2vw] text-white text-[4vw] text-center block">All Rights Reserved</span>
      </Container>
    </>
  );
}

export default App;
