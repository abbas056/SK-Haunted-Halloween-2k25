import axios from "axios";
import { images } from "../../assets";

export const overFlowHidden = () => {
  if (typeof window !== "undefined" && window.document) {
    // Save the current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.classList.add("no-scroll");
  }
};

export const overFlowAuto = () => {
  if (typeof window !== "undefined" && window.document) {
    // Retrieve the scroll position and reset
    const scrollY = parseInt(document.body.style.top || "0", 10) * -1;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.classList.remove("no-scroll");
    window.scrollTo(0, scrollY);
  }
};
export const slicePlease = (array, from, to) => {
  const cutting = array?.slice(from, to);
  return cutting;
};
export function goTo(isLive, userId, roomId) {
  if (window.UA.android) {
    let url = "streamkar://m.streamkar.com/route";
    if (isLive) {
      url = url + "/room?roomId=" + roomId;
    } else {
      url = url + "/user?userId=" + userId;
    }
    if (userId || roomId) {
      window.phone.routeViewPage(url);
    }
  } else {
    window.location.href = "http://www.kktv1.com/m/?roomid=" + userId + "";
  }
}
export const callGameApi = async (url, uid, uToken) => {
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: url,
    headers: {
      userId: uid,
      token: uToken,
    },
  };
  const result = await axios.request(config);
  return result.data;
};
export const captureImageError = (event) => {
  event.target.src = images.unknown;
  return true;
};
export const cross = () => {
  let cross;
  cross = images.closeIcon;
  return cross;
};
export const successAlert = (successTitle, data) => [
  {
    headtext: `${successTitle}`,
    data: <>{data}</>,
  },
];
export const unsuccessAlert = (oopsTitle, msj) => [
  {
    headtext: `${oopsTitle}`,
    data: <>{msj}</>,
  },
];
