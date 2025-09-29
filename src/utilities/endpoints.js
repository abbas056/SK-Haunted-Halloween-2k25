const cd = new Date();
// Get the previous day
const pd = new Date(cd);
pd.setDate(cd.getDate() - 1);
// Function to format a date in "YYYY-MM-DD" format
const formatDate = (date) => {
  const year = date.getUTCFullYear();
  const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
  const day = date.getUTCDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};
// Format the current and previous dates
const CurrentDate = formatDate(cd);
const PreviousDate = formatDate(pd);
// Get the current date in UTC
const currentUTCDate = new Date();
const currentUTCHour = currentUTCDate.getUTCHours();

// Get the previous hour in UTC
const previousUTCDate = new Date(currentUTCDate);
previousUTCDate.setUTCHours(currentUTCHour - 1);

// Function to format a number in two digits
const formatTwoDigits = (number) => {
  return number.toString().padStart(2, "0");
};

// Format the current and previous UTC hours
const CurrentUTCHour = parseInt(formatTwoDigits(currentUTCHour));
const PreviousUTCHour = parseInt(formatTwoDigits(previousUTCDate.getUTCHours()));

export const currentDate = CurrentDate;
export const previousDate = PreviousDate;
export const currentHour = CurrentUTCHour;
export const previousHour = PreviousUTCHour;

var eventDesc = "20251024_haunted_halloween";

const endpoints = {
  getUserEventInfo: "/api/activity/halloween2025/getUserEventInfo?userId=",
  tab1: {
    userGame: "/api/activity/halloween2025/playGame?type=1&playCount=",
    claimChest: "/api/activity/halloween2025/playGame?type=2&playCount=1",
    getRecord: (pageNumber, userId) =>
      `/api/activity/eidF/getRecordInfoV2?eventDesc=${eventDesc}&type=1&rankIndex=21&pageSize=20&pageNum=${pageNumber}&userId=${userId}`,
    getRechargeRecord: (pageNumber, userId) =>
      `/api/activity/eidF/getRecordInfoV2?eventDesc=${eventDesc}&type=3&rankIndex=21&pageSize=20&pageNum=${pageNumber}&userId=${userId}`,
    todayRank: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=17&pageNum=1&pageSize=20&dayIndex=${currentDate}`,
    previousDayRank: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=17&pageNum=1&pageSize=20&dayIndex=${previousDate}`,
  },
  tab2: {
    sentTodayRank: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${currentDate}`,
    sentPrevRank: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=15&pageNum=1&pageSize=20&dayIndex=${previousDate}`,
    receivedTodayRank: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${currentDate}`,
    receivedPrevRank: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=16&pageNum=1&pageSize=20&dayIndex=${previousDate}`,
    streamUser: `/meShow/entrance?parameter=%7B%22platform%22%3A2%2C%22a%22%3A1%2C%22c%22%3A12002%2C%22v%22%3A1224%2C%22l%22%3A%22en%22%2C%22FuncTag%22%3A20010302%2C%22cataId%22%3A1275%2C%22area%22%3A0%2C%22start%22%3A0%2C%22offset%22%3A2%7D`,
  },
  tab3: {
    talentGame: (playCount) => `/api/activity/halloween2025/playGame?type=3&playCount=${playCount}`,
    getRecord: `/api/activity/eidF/getRecordInfoV2?eventDesc=${eventDesc}&type=2&rankIndex=21&pageNum=1&pageSize=20&userId=`,
    getWinner: `/api/activity/eidF/getWinnerRankInfo?eventDesc=${eventDesc}&rankIndex=2&pageNum=1&pageSize=20`,
  },
  event: {
    giftersOverall: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=11&pageNum=1&pageSize=20`,
    talentsOverall: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=12&pageNum=1&pageSize=20`,
    giftersToday: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${currentDate}`,
    giftersPreviousday: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=13&pageNum=1&pageSize=20&dayIndex=${previousDate}`,
    talentsToday: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${currentDate}`,
    talentsPreviousday: `/api/activity/eidF/getLeaderboardInfoV2?eventDesc=${eventDesc}&rankIndex=14&pageNum=1&pageSize=20&dayIndex=${previousDate}`,
  },
};

export default endpoints;
