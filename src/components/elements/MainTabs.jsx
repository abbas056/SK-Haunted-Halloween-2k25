import React from "react";
import { images } from "../../assets";
import Tab1 from "../../pages/Tab1";
import Tab2 from "../../pages/Tab2";
import Tab3 from "./../../pages/Tab3";

function MainTabs({ tabs, setTabs }) {
  const tabSwitch = (id) => {
    let newCat = {
      tab1: false,
      tab2: false,
      tab3: false,
    };
    setTabs({ ...newCat, [id]: true });
  };
  const renderingTabs = () => {
    switch (true) {
      case tabs.tab1:
        return <Tab1 tab={1} />;
      case tabs.tab2:
        return <Tab2 tab={2} setTabs={setTabs} />;
      case tabs.tab3:
        return <Tab3 tab={3} />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="flex justify-center items-center gap-2 relative mt-[-25vw]">
        <button onClick={() => tabSwitch("tab1")} className={`${!tabs.tab1 ? "grayscale transition-all duration-200 ease-in-out" : ""}`}>
          <img className={`w-[30vw] h-[22vw] `} src={images.tab1} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab2")} className={`${!tabs.tab2 ? "grayscale transition-all duration-200 ease-in-out" : ""}`}>
          <img className={`w-[30vw] h-[22vw] `} src={images.tab2} alt="" />
        </button>
        <button onClick={() => tabSwitch("tab3")} className={`${!tabs.tab3 ? "grayscale transition-all duration-200 ease-in-out" : ""}`}>
          <img className={`w-[30vw] h-[22vw] `} src={images.tab3} alt="" />
        </button>
      </div>
      <div>{renderingTabs()}</div>
    </>
  );
}

export default MainTabs;
