import { api } from "../../axios";
import endpoints from "../../utilities/endpoints";
import { local } from "../../URL";
import getRecordInfo from "../../raw/dumyApis/getRecordInfo.json";
import getWinnerRank from "../../raw/dumyApis/getWinnerRank.json";
import getLeaderboard from "../../raw/dumyApis/getLeaderBoard.json";

const {
  tab1: { userGame, getRecord, getRechargeRecord, getWinner, todayRank, previousDayRank, claimChest },
} = endpoints;

// User Game Tab 1
export const fetchUserGameTab1 = async (playCount, requestHeader) => {
  try {
    const response = await api.post(
      `${userGame}${playCount}`,
      {},
      {
        headers: requestHeader,
      }
    );
    return response?.data;
  } catch (error) {
    console.error("Error fetching user game:", error);
    throw error;
  }
};
// Recharge Weapon Tab 1
export const fetchClaimChestTab1 = async (requestHeader) => {
  try {
    const response = await api.post(claimChest, {}, { headers: requestHeader });
    return response?.data;
  } catch (error) {
    console.error("Error recharging weapon:", error);
    throw error;
  }
};
// Update Event Record Tab 1
export const fetchEventRecordsTab1 = async (userId, pageNumber = 1) => {
  try {
    if (local) {
      const response = await api.get(`${getRecord(pageNumber, userId)}`);
      return response?.data?.data;
    } else {
      return getRecordInfo?.data;
    }
  } catch (error) {
    console.error("Error updating event record:", error);
    throw error;
  }
};
// Update Recharge Record Tab 1
export const fetchRechargeRecordsTab1 = async (userId, pageNumber = 1) => {
  try {
    if (local) {
      const response = await api.get(`${getRechargeRecord(pageNumber, userId)}`);
      return response?.data?.data;
    } else {
      return getRecordInfo?.data;
    }
  } catch (error) {
    console.error("Error updating event record:", error);
    throw error;
  }
};
// Event Winners
export const fetchWinnersDataTab1 = async () => {
  try {
    if (local) {
      const response = await api.get(`${getWinner}`);
      return response.data?.data;
    } else {
      return getWinnerRank?.data;
    }
  } catch (error) {
    console.error("Error fetching winners:", error);
    throw error;
  }
};

// Event Leaderboard Today
export const fetchLeaderboardTodayTab1 = async () => {
  try {
    if (local) {
      const response = await api.get(`${todayRank}`);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard today:", error);
    throw error;
  }
};

// Event Leaderboard Previous Day
export const fetchLeaderboardPreviousDayTab1 = async () => {
  try {
    if (local) {
      const response = await api.get(`${previousDayRank}`);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard previous day:", error);
    throw error;
  }
};
