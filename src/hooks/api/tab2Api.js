import { api } from "../../axios";
import endpoints from "../../utilities/endpoints";
import { local } from "../../URL";
import getLeaderboard from "../../raw/dumyApis/getLeaderBoard.json";

const {
  tab2: { sentTodayRank, sentPrevRank, receivedTodayRank, receivedPrevRank, streamUser },
} = endpoints;

// Event Leaderboard Today
export const fetchLeaderboardSentTodayTab2 = async () => {
  try {
    if (local) {
      const response = await api.get(`${sentTodayRank}`);
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
export const fetchLeaderboardSentPrevTab2 = async () => {
  try {
    if (local) {
      const response = await api.get(`${sentPrevRank}`);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard previous day:", error);
    throw error;
  }
};

// Event Leaderboard Today
export const fetchLeaderboardReceivedTodayTab2 = async () => {
  try {
    if (local) {
      const response = await api.get(`${receivedTodayRank}`);
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
export const fetchLeaderboardReceivedPrevTab2 = async () => {
  try {
    if (local) {
      const response = await api.get(`${receivedPrevRank}`);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard previous day:", error);
    throw error;
  }
};

export const fetchStreamTab2 = async () => {
  try {
    if (local) {
      const response = await api.get(`${streamUser}`);
      return response?.data?.roomList;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard previous day:", error);
    throw error;
  }
};
