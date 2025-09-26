import { api } from "../../axios";
import endpoints from "../../utilities/endpoints";
import { local } from "../../URL";
import getUserEventInfo from "../../raw/dumyApis/getUserInfo.json";
// Event Info
export const fetchEventInfo = async (userId) => {
  try {
    if (local) {
      const response = await api.get(`${endpoints.getUserEventInfo}${userId}`);
      return response?.data?.data;
    } else {
      return getUserEventInfo?.data;
    }
  } catch (error) {
    console.error("Error fetching event info:", error);
    throw error;
  }
};
