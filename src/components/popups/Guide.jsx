import React, { useContext, useEffect, useState } from "react";
import { langData } from "../../raw/users/language"; // your full JSX-based langData
import { useLanguageStore } from "../../store/popUpStore";
import { images } from "../../assets/index";

// const GuideContentWithTable = ({ data }) => {
//   return (
//     <div>
//       {data.heading}
//       {data.description && data?.description}
//       {data.table && (
//         <table className="w-full" cellSpacing={0}>
//           <thead>
//             <tr>
//               {data.table.head.first}
//               {data.table.head.second}
//               {data?.table?.head?.third && data?.table?.head?.third}
//               {data?.table?.head?.fourth && data?.table?.head?.fourth}
//               {data?.table?.head?.fifth && data?.table?.head?.fifth}
//             </tr>
//           </thead>
//           <tbody>
//             {data.table.body.map((row, index) => (
//               <tr key={index}>
//                 {row.first}
//                 {row.second}
//                 {row?.third && row?.third}
//                 {row?.fourth && row?.fourth}
//                 {row?.fifth && row?.fifth}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

const GuideContentWithoutTable = ({ data, index }) => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (index === 1) {
      setOpen(true);
    }
  }, [index]);
  return (
    <div className="w-[100%] mx-auto bg-[#7304a6] rounded-[2vw] border-white border-[1px] overflow-hidden">
      <span className="w-full flex justify-between text-[4vw] items-center h-[10vw] text-white px-[2vw] f-sugarBomb" onClick={() => setOpen(!isOpen)}>
        <span className="w-[6vw] h-[6vw]"></span>
        {data?.section}
        <img className={`w-[6vw] h-[6vw] object-contain ${isOpen ? "rotate-180" : ""}`} src={images.arrowDown} alt="" />
      </span>
      {isOpen && (
        <div className="p-[2vw] bg-[#ff9002] border-white border-t-[1px] ">
          {Array.isArray(data?.content) ? (
            data?.content?.map((_data, _index) => (
              <div key={_index}>
                <span className="text-[3vw] uppercase text-white">{_data?.for}</span>
                {_data?.details && _data?.details}
              </div>
            ))
          ) : (
            <div className="text-[2.5vw] text-white">{data?.content}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default function Guide() {
  const { language } = useLanguageStore();
  const [{ guide }] = langData.filter((lang) => lang.key === language);
  return (
    <div className="w-[100%] m-auto mb-[4vw]">
      <span className="text-[6vw] my-2 text-center block text-white f-sugarBomb">How To Play</span>
      <div className="flex flex-col gap-[2vw]">
        {guide?.map((_data, _index) => {
          if (_data?.section == "Intro") {
            return <span className="text-[2.5vw] text-white text-center p-[2vw] ">{_data?.content}</span>;
          } else {
            return <GuideContentWithoutTable key={_index} data={_data} index={_index} />;
          }
        })}
      </div>
    </div>
  );
}
