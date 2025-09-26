import { baseURL } from "../URL";

import user_Information from "../raw/apis/userInfo.json";
import user_record from "../raw/apis/userRecord.json";
import user_detail from "../raw/apis/userDetail.json";

import user_Rank from "../raw/apis/rank/userRank.json";
import talent_Rank from "../raw/apis/rank/talentRank.json";
import user_Rank_one from "../raw/apis/rank/tabOneRank.json";
import user_Rank_two from "../raw/apis/rank/tabTwoRank.json";
import user_Rank_three from "../raw/apis/rank/tabThreeRank.json";

import { drawGame, wheelGame } from "./helper";

let enviroment = 0;

export const getCallApi = async (key, whatData, myHeaders) => {
  let data;
  switch (whatData) {
    case "USERINFO":
      data = user_Information;
      break;
    case "USERRECORD":
      data = user_record;
      break;
    case "USERDETAIL":
      data = user_detail;
      break;
    case "USERRANK":
      data = user_Rank;
      break;
    case "TALENTRANK":
      data = talent_Rank;
      break;
    case "TABONERANK":
      data = user_Rank_one;
      break;
    case "TABTWORANK":
      data = user_Rank_two;
      break;
    case "TABTHREERANK":
      data = user_Rank_three;
      break;
  }
  if (enviroment === 1) {
    return data;
  } else {
    var requestOptions;
    if (myHeaders) {
      requestOptions = {
        method: "GET",
        redirect: "follow",
        headers: myHeaders,
      };
    } else {
      requestOptions = {
        method: "GET",
        redirect: "follow",
      };
    }
    const result = await fetch(baseURL + key, requestOptions);
    return result.json();
  }
};

export const postCallApi = async (query, myHeaders, checkPlay, myRaw) => {
  let resData;
  switch (checkPlay) {
    case "DRAW":
      resData = drawGame(1, 14);
      break;
    case "WHEEL":
      resData = wheelGame(0, 6);
      break;
    case "VIPWHEEL":
      resData = wheelGame(7, 13);
      break;
  }
  if (enviroment === 1) {
    return resData;
  } else {
    if (myRaw) {
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: myRaw,
        redirect: "follow",
      };

      const result = await fetch(baseURL + query, requestOptions);
      return result.json();
    } else {
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        redirect: "follow",
      };
      const result = await fetch(baseURL + query, requestOptions);
      return result.json();
    }
  }
};
