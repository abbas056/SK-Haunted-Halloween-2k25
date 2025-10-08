import React from "react";
import { TableBody, Table, TableHead, TableData, TableRow } from "../common/Table";
import { rewGet } from "../../utilities/imageContext";
import { getCountDays } from "../../utilities/helper";
import { tabOneGameRewards, tabOneRechargeWeapon, tabTwoGameRewards } from "../../raw/users/rewards";

export default function DetailPopUp({ tab }) {
  const header =
    tab === 1 ? [`Button Name/ Required Points`, "Door No", "Item Name", "Rewards"] : ["Button Name", "Talent Points Required", "Rewards"];
  const rewardsData = tab === 1 ? tabOneGameRewards : tabTwoGameRewards;
  const header2 = ["Button Name", "Rewards"];

  return (
    <>
      <div className="w-[100%] mx-auto rounded-[2vw] border-[0.4vw] border-[#fff] overflow-hidden text-white">
        <Table className="w-full h-full">
          <TableHead className="w-full">
            <TableRow className="w-full bg-[#8813a8]">
              {header?.map((item, i) => (
                <TableData className={`text-center text-[2vw] p-[1vw] ${i !== header.length - 1 ? "border-r-[0.4vw] border-[#fff]" : ""}`} key={i}>
                  {item}
                </TableData>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className="bg-[#ff9002]">
            {rewardsData?.map((item, i) =>
              item.sections.map((section, sectionIndex) => (
                <TableRow className="border-b-[0.4vw] border-[#fff]" key={`${i}-${sectionIndex}`}>
                  {/* Button Name (Rowspan) */}
                  {sectionIndex === 0 && (
                    <TableData className="border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center" rowSpan={item.sections.length}>
                      {item.button} <br /> {item.level}
                    </TableData>
                  )}

                  {/* Dynamic Column */}
                  {tab === 1 ? (
                    <>
                      <TableData className="border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">{section.doorNum}</TableData>

                      <TableData className="border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">{section.itemName}</TableData>
                    </>
                  ) : (
                    <TableData className="border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center">{section.type}</TableData>
                  )}

                  {/* Rewards */}
                  <TableData className="flex flex-wrap gap-[1vw] w-[35vw] p-[1vw] items-start justify-center">
                    {section.rewards.map((reward, index) =>
                      reward.count == 0 ? (
                        <span key={index} className="w-full text-[2vw] leading-[5vw] text-center">
                          {reward.name}
                        </span>
                      ) : (
                        <span key={index} className="flex flex-col items-center gap-[1vw]">
                          <img className="w-[5vw] h-[5vw]" src={rewGet(reward.name)} alt="" />
                          <span className="text-[1.8vw] w-[10vw] text-center leading-none">
                            {reward.name} {getCountDays(reward.name, reward.count)}
                          </span>
                        </span>
                      )
                    )}
                  </TableData>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Recharge Weapon Table (Only if tab === 1) */}
      {tab === 1 && (
        <div className="flex flex-col justify-center">
          <span className="m-auto text-[5vw] text-center text-white mt-5 f-sugarBomb">Grand Bonus Rewards</span>

          <div className="w-[100%] mt-[4vw] mx-auto rounded-[2vw] border-[0.4vw] border-[#fff] overflow-hidden text-white">
            <Table className="w-full">
              <TableHead className="w-full">
                <TableRow className="w-full bg-[#8813a8]">
                  {header2.map((item, i) => (
                    <TableData
                      className={`text-center text-[2vw] p-[1vw] ${i !== header2.length - 1 ? "border-r-[0.4vw] border-[#fff]" : ""}`}
                      key={i}
                    >
                      {item}
                    </TableData>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className="bg-[#ff9002]">
                {tabOneRechargeWeapon?.map((item, i) =>
                  item.sections.map((section, sectionIndex) => (
                    <TableRow className="border-b-[0.4vw] border-[#fff]" key={`${i}-${sectionIndex}`}>
                      {/* Button Name (Rowspan) */}
                      {sectionIndex === 0 && (
                        <TableData className="border-r-[0.4vw] p-[1vw] border-[#fff] text-[2vw] text-center" rowSpan={item.sections.length}>
                          {item.button}
                        </TableData>
                      )}

                      {/* Rewards */}
                      <TableData className="flex flex-wrap gap-[1vw] w-[35vw] p-[1vw]">
                        {section.rewards.map((reward, index) =>
                          reward.count == 0 ? (
                            <span key={index} className="w-full text-[2vw] leading-[5vw] text-center">
                              {reward.name}
                            </span>
                          ) : (
                            <span key={index} className="flex flex-col items-center gap-[1vw]">
                              <img className="w-[5vw] h-[5vw]" src={rewGet(reward.name)} alt="" />
                              <span className="text-[1.8vw] w-[10vw] text-center leading-none">
                                {reward.name} {getCountDays(reward.name, reward.count)}
                              </span>
                            </span>
                          )
                        )}
                      </TableData>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </>
  );
}
