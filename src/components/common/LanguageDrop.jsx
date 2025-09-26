import React, { useContext } from "react";
import { langData } from "../../raw/users/language";
import { useLanguageStore } from "../../store/popUpStore";

export default function LanguageDrop() {
  const { language, setLanguage } = useLanguageStore();
  const [isOpen, setisOpen] = React.useState(false);
  const toggleDrop = () => {
    setisOpen(!isOpen);
  };

  return (
    <div className="absolute  flex flex-col gap-[0.2vw] z-[1] top-[2vw] right-[2vw]">
      <button className="border-[0.2vw] border-solid rounded-full flex items-center justify-center gap-[1vw] bg-[#a75830]" onClick={toggleDrop}>
        <span className="leading-none p-[1vw_2vw] text-[#fff7f5]">{language}</span>
        <span className={`bg-yellow-400 p-[1vw_2vw] ${isOpen ? "rotate-180 rounded-bl-full rounded-tl-full" : "rounded-br-full rounded-tr-full"}`}>
          ▼
        </span>
      </button>
      {isOpen ? (
        <div className="bg-[#fff] flex flex-col gap-[1vw]" id="languageDiv">
          {langData?.map((items) => {
            return (
              <button
                className={language === items?.key ? "p-[1.5vw] bg-[#a75830] text-[#fff7f5]" : "p-[1.5vw] text-[#000]"}
                onClick={() => {
                  setLanguage(items?.key);
                  setisOpen(!isOpen);
                }}
              >
                {items?.key}
              </button>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
