import { goTo } from "./helper";
import { baseURL } from "./URL";

export async function getfollowapi(user, followId) {
  try {
    const response = await fetch(
      baseURL +
        "/meShow/entrance?parameter=%7B%22FuncTag%22:10003001,%22token%22:%22" +
        user.token +
        "%22,%22userId%22:%22" +
        user.uid +
        "%22,%22followedIds%22:%22" +
        followId +
        "%22%7D"
    )
      .then((_res) => _res.json())
      .then((__res) => __res?.TagCode)
      .catch((_error) => console.log(_error));
    return response;
  } catch (error) {
    return error;
  }
}

export const getBroadDetail = (min, max, number) => {
  fetch(
    `${baseURL}/meShow/entrance?parameter=%7B%22platform%22%3A2%2C%22a%22%3A1%2C%22c%22%3A12002%2C%22v%22%3A1224%2C%22l%22%3A%22en%22%2C%22FuncTag%22%3A20010302%2C%22userId%22%3A502184260%2C%22cataId%22%3A1275%2C%22area%22%3A0%2C%22start%22%3A0%2C%22offset%22%3A${number}%7D`
  )
    .then((result) => {
      return result.json();
    })
    .then((response) => {
      if (response?.TagCode == "00000000")
        goTo(1, response?.roomList[0]?.userId, response?.roomList[0]?.userId);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const goGiftersProfile = (userId) => {
  fetch(
    `${baseURL}/api/activity/eidF/getLeaderboardInfoV2?eventDesc=20250424_rise_to_glory&rankIndex=11&pageNum=1&pageSize=10&type=1&dayIndex=${userId}`
  )
    .then((result) => {
      return result.json();
    })
    .then((response) => {
      goTo(1, response?.data?.list[0]?.userId, response?.data?.list[0]?.userId);
    })
    .catch((error) => {
      console.log(error);
    });
};

function gotToProfile(id) {
  // body...
  window.phone.routeViewPage(
    "streamkar://m.streamkar.com/route/room?roomId=" + id + ""
  );
}

export function gotToTopUp() {
  // body...
  try {
    // showToast("Opening topup page...");
    window.phone.routeViewPage("streamkar://m.streamkar.com/route/pay");
  } catch (_error) {
    console.error(_error);
    window.alert("Open topup page page error...");
  }
}
