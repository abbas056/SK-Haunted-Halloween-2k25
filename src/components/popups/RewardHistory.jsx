import React from "react";
import { convertToTime, getCountDays } from "../../utilities/helper";
import { rewGet } from "../../utilities/imageContext";
import { images } from "../../assets";
import { Table, TableBody, TableData, TableHead, TableRow } from "../common/Table";

export default function RewardHistory({
  header,
  header2,
  data,
  tab,
  seemoreCondition,
  setPageIndex,
  pageIndex,
  rechargeData,
  seemoreConditionRecharge,
  rechargeIndex,
  setPageIndexRecharge,
}) {
  const itemsName = {
    1: "Pumpkin",
    2: "Candy",
    3: "Witch’s Hat",
    4: "Ghost Lantern",
    5: "Bloody Mask",
    6: "Skeleton Hand",
    7: "Magic potion",
  };
  return (
    <>
      <div className="w-[95%] max-h-[100vw] overflow-y-auto  mx-auto rounded-[2vw] border-[0.4vw] border-[#fff] overflow-hidden text-white">
        <Table className="w-full">
          <TableHead className="w-full">
            <TableRow className="w-full bg-[#922caf]">
              {header?.map((item, i) => (
                <TableData
                  className={`w-[10%] text-center text-[3vw] p-[1vw] ${i != header.length - 1 ? "border-r-[0.4vw] border-[#fff]" : ""}`}
                  key={i}
                >
                  {item}
                </TableData>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#ff9002]">
            {data?.length == 0 && (
              <TableRow className="h-[10vw] border-b-[0.4vw] border-[#fff]">
                <TableData colSpan={header.length} className="text-[2vw] text-center">
                  No data
                </TableData>
              </TableRow>
            )}
            {data?.map((item, i) => {
              return (
                <TableRow className="border-b-[0.4vw] border-[#fff]" key={i}>
                  <TableData className="w-[22vw] border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">
                    {convertToTime(item?.time)}
                  </TableData>
                  {tab === 1 && (
                    <>
                      <TableData className="w-[15vw] border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">
                        {Object.entries(item?.map).map(([key, value]) => {
                          if (key === "treatPoints") return null; // skip treatPoints
                          return (
                            <span key={key}>
                              {itemsName[key]} x{value} +{" "}
                            </span>
                          );
                        })}
                      </TableData>
                      <TableData className="w-[15vw] border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">
                        {item?.map?.treatPoints || 0}
                      </TableData>
                    </>
                  )}

                  <TableData className="flex justify-center items-center flex-wrap gap-[0.5vw] w-full p-[1vw] max-h-[40vw] overflow-y-auto text-[2vw]">
                    {item?.rewardDTOList?.length > 0 ? (
                      item?.rewardDTOList?.map((reward, i) => (
                        <span className="flex flex-col items-center gap-[1vw] w-[8vw] text-center" key={i}>
                          <img className="w-[6vw] h-[6vw]" src={rewGet(reward.desc)} alt="" />
                          <span className="text-[1.8vw] w-[7vw] text-center leading-none">
                            {reward.name} {getCountDays(reward.desc, reward.count)}
                          </span>
                        </span>
                      ))
                    ) : (
                      <span className="w-full block text-[2vw] text-center">No Rewards</span>
                    )}
                  </TableData>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      {seemoreCondition && (
        <img onClick={() => setPageIndex(pageIndex + 1)} className="w-[27vw] h-[12vw] mx-auto object-contain mt-3" src={images.seeMore} alt="" />
      )}

      {tab === 1 && (
        <>
          {" "}
          <span className="m-auto text-[4vw] text-center text-white flex justify-center mt-2 mb-2 f-sugarBomb">Grand Bonus Rewards</span>
          <div className="w-[95%]  mx-auto rounded-[2vw] border-[0.4vw] border-[#fff] overflow-hidden text-white">
            <Table className="w-full">
              <TableHead className="w-full">
                <TableRow className="w-full bg-[#922caf]">
                  {header2?.map((item, i) => (
                    <TableData className={`text-center text-[3vw] p-[1vw] ${i != header.length - 1 ? "border-r-[0.4vw] border-[#fff]" : ""}`} key={i}>
                      {item}
                    </TableData>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className="bg-[#ff9002]">
                {rechargeData?.length == 0 && (
                  <TableRow className="h-[10vw] border-b-[0.4vw] border-[#fff]">
                    <TableData colSpan={header.length} className="text-[2vw] text-center">
                      No data
                    </TableData>
                  </TableRow>
                )}
                {rechargeData?.map((item, i) => {
                  return (
                    <TableRow className="border-b-[0.4vw] border-[#fff]" key={i}>
                      <TableData className="w-[22vw] border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">
                        {convertToTime(item?.time)}
                      </TableData>
                      <TableData className="flex justify-center items-center flex-wrap gap-[0.5vw] w-full p-[1vw] max-h-[40vw] overflow-y-auto text-[2vw]">
                        {item?.rewardDTOList?.length > 0 ? (
                          item?.rewardDTOList?.map((reward) => (
                            <span className="flex flex-col items-center gap-[1vw] w-[8vw] text-center" key={reward.id}>
                              <img className="w-[6vw] h-[6vw]" src={rewGet(reward.desc)} alt="" />
                              <span className="text-[1.8vw] w-[7vw] text-center leading-none">
                                {reward.name} {getCountDays(reward.desc, reward.count)}
                              </span>
                            </span>
                          ))
                        ) : (
                          <span className="w-full block text-[2vw] text-center">No Rewards</span>
                        )}
                      </TableData>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
          {seemoreConditionRecharge && (
            <img
              onClick={() => setPageIndexRecharge(rechargeIndex + 1)}
              className="w-[27vw] h-[12vw] mx-auto object-contain"
              src={images.seeMore}
              alt=""
            />
          )}
        </>
      )}
    </>
  );
}
