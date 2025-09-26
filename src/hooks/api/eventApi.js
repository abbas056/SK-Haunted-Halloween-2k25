import { api } from "../../axios";
import endpoints from "../../utilities/endpoints";
import { local } from "../../URL";
import getLeaderboard from "../../raw/dumyApis/getLeaderBoard.json";
// Event Leaderboard Talent Overall
export const fetchEventLeaderboardTalentsOverall = async () => {
  try {
    if (local) {
      const response = await api.get(endpoints.event.talentsOverall);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
// Event Leaderboard Talent Today
export const fetchEventLeaderboardTalentsToday = async () => {
  try {
    if (local) {
      const response = await api.get(endpoints.event.talentsToday);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
// Event Leaderboard Talent Previous Day
export const fetchEventLeaderboardTalentsPreviousDay = async () => {
  try {
    if (local) {
      const response = await api.get(endpoints.event.talentsPreviousday);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
// Event Leaderboard Gifters Overall
export const fetchEventLeaderboardGiftersOverall = async () => {
  try {
    if (local) {
      const response = await api.get(endpoints.event.giftersOverall);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
// Event Leaderboard Gifters Today
export const fetchEventLeaderboardGiftersToday = async () => {
  try {
    if (local) {
      const response = await api.get(endpoints.event.giftersToday);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
// Event Leaderboard Gifters Previous Day
export const fetchEventLeaderboardGiftersPreviousDay = async () => {
  try {
    if (local) {
      const response = await api.get(endpoints.event.giftersPreviousday);
      return response?.data?.data;
    } else {
      return getLeaderboard?.data;
    }
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
