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
      <div
        className="bg-[#9823ae] border-[0.2vw] border-solid rounded-full flex items-center justify-center gap-[1vw] text-[2.5vw]"
        onClick={toggleDrop}
      >
        <span className="leading-none p-2 text-[#fff7f5]">{language}</span>
        <span
          className={`bg-yellow-400 p-[1vw_2vw] text-[3.5vw] ${
            isOpen ? "rotate-180 rounded-bl-full rounded-tl-full" : "rounded-br-full rounded-tr-full"
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen ? (
        <div className="bg-[#fff] flex flex-col gap-[1vw] text-[2.5vw]" id="languageDiv ">
          {langData?.map((items) => {
            return (
              <div
                className={language === items?.key ? "p-[1vw] bg-[#a75830] text-[#fff7f5]" : "p-[1vw] text-[#000]"}
                onClick={() => {
                  setLanguage(items?.key);
                  setisOpen(!isOpen);
                }}
              >
                {items?.key}
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
