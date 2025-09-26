import { api } from "../../axios";
import endpoints from "../../utilities/endpoints";
import { local } from "../../URL";
import getRecordInfo from "../../raw/dumyApis/getRecordInfo.json";
import getWinnerRank from "../../raw/dumyApis/getWinnerRank.json";

const {
  tab3: { talentGame, getRecord, getWinner },
} = endpoints;

// Talent Game Tab 3
export const fetchTalentGameTab3 = async (playCount, requestHeader) => {
  try {
    const { data } = await api.post(
      `${talentGame(playCount)}`,
      {},
      {
        headers: requestHeader,
      }
    );
    return data;
  } catch (error) {
    console.error("Error fetching talent game:", error);
    throw error;
  }
};

export const fetchEventRecordsTab3 = async (userId) => {
  try {
    if (local) {
      const response = await api.get(`${getRecord}${userId}`);
      return response?.data?.data;
    } else {
      return getRecordInfo?.data;
    }
  } catch (error) {
    console.error("Error fetching event records:", error);
    throw error;
  }
};
// Event Winners
export const fetchWinnersDataTab3 = async () => {
  try {
    if (local) {
      const response = await api.get(`${getWinner}`);
      return response?.data?.data;
    } else {
      return getWinnerRank?.data;
    }
  } catch (error) {
    console.error("Error fetching winners:", error);
    throw error;
  }
};
