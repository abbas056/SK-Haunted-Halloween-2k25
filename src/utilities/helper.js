import { images } from "../assets";
import { useToastStore } from "../store/popUpStore";
import { baseURL } from "../URL";
const { openToast } = useToastStore();

function convertToMultiplierText(input) {
  const match = input.match(/(\d+(?:\.\d+)?)%/); // handles 40% or 40.5%
  if (!match) return null;
  const multiplier = parseFloat(match[1]);
  return `${multiplier}% of Pot`;
}
export const getCountDays = (input, count) => {
  if (input?.includes("beanbag") || input?.includes("Bean Bag")) {
    return `worth ${count} Beans`;
  } else if (input?.includes("beanspot") || input?.includes("beans pot")) {
    return convertToMultiplierText(count);
  } else if (input?.includes("Beans") || input?.includes("bean") || input?.includes("gems") || input?.includes("Gems")) {
    return `x${count}`;
  } else {
    return `x${count <= 1 ? count + " day" : count + " days"}`;
  }
};
export const captureImageError = (event) => {
  event.target.src = images.unknown;
  return true;
};

export const bodyFixes = (check, scroll, set) => {
  if (check) {
    document.body.style.overflowY = "auto";
    document.body.style.removeProperty("top");
    document.body.style.removeProperty("position");
    window.scrollTo(0, scroll);
  } else {
    document.body.style.position = "fixed";
    // document.body.style.top = `${scroll}vw`;
    document.body.style.overflowY = "hidden";
    set(window.pageYOffset);
  }
};
export function convertToPaginatedArray(flatArray, itemsPerPage) {
  if (flatArray?.length > itemsPerPage) {
    const paginatedArray = [];
    for (let i = 0; i < flatArray.length; i += itemsPerPage) {
      const page = flatArray.slice(i, i + itemsPerPage);
      paginatedArray.push(page);
    }
    return paginatedArray;
  }
  return [flatArray];
}
export function createMarkup(markUp) {
  return { __html: markUp };
}
export const getLevelUrl = (talent, level) => {
  let newlevel = level > 1 ? level : 1;
  if (talent) {
    return baseURL + "/streamkar/common/img/tlv/" + newlevel + ".png";
  } else {
    return baseURL + "/streamkar/common/img/ulv/" + newlevel + ".png";
  }
};
export const blockInvalidChar = (e) => {
  if (["e", "E", "+", "-", "."].includes(e.key)) {
    e.preventDefault();
  }
};
// export const checkShowData = (data, clas) => {
//   const nestdata = convertToNestedArray(data);
//   if (data.length > 1) {
//     return (
//       <RewardSlider2 indicator noarrow smallSlider Infinite>
//         {data.map((x, i) => {
//           return (
//             <span className={clas}>
//               <span key={i} className={`${clas}-data`}>
//                 <img src={rewGet(x?.desc)} />
//                 <span className="color-primary">
//                   {x?.desc} {getCountDays(x?.desc, x?.count)}
//                 </span>
//               </span>
//             </span>
//           );
//         })}
//       </RewardSlider2>
//     );
//   } else {
//     return (
//       <span className={clas}>
//         {data?.map((d, i) => {
//           return (
//             <span key={i} className={`${clas}-data`}>
//               <img src={rewGet(d.desc)} />
//               <span className="color-primary">
//                 {d.desc} {getCountDays(d.desc, d.count)}
//               </span>
//             </span>
//           );
//         })}
//       </span>
//     );
//   }
// };
export const inputFunction = (max, event) => {
  let val = event.target.value.replace(/[^0-9]/g, "");
  let number = val.includes("0") ? (val.length > 3 ? "" : val) : val;
  number = parseInt(number) > max ? max : parseInt(number) < 0 ? 1 : parseInt(number);
  return parseInt(isNaN(number) ? "" : number);
};
export function convertToNestedArray(arr) {
  let nestedArray = [];
  for (let i = 0; i < arr.length; i += 3) {
    nestedArray.push(arr.slice(i, i + 3));
  }
  return nestedArray;
}
export const convertToTime = (time) => {
  let dateObject = new Date(time);

  return dateObject.toLocaleString("en-US", { timeZone: "GMT" });
};
export const timeinHM = (time) => {
  let dateObject = new Date(time);
  const hour = dateObject.getUTCHours() < 10 ? "0" + dateObject.getUTCHours() : dateObject.getUTCHours();
  const minute = dateObject.getUTCMinutes() < 10 ? "0" + dateObject.getUTCMinutes() : dateObject.getUTCMinutes();
  return hour + ":" + minute;
};
export function getOrdinal(n) {
  let ord = "th";

  if (n % 10 == 1 && n % 100 != 11) {
    ord = "st";
  } else if (n % 10 == 2 && n % 100 != 12) {
    ord = "nd";
  } else if (n % 10 == 3 && n % 100 != 13) {
    ord = "rd";
  }

  return ord;
}
export function circularText(className, text, radius, range, startPos, css, bottomCss) {
  var textArr = text.split("");
  var deg = range / textArr.length;
  var newElement = "";
  textArr.forEach(function (ch) {
    ch =
      '<p style="height:' +
      radius +
      "vw;" +
      css +
      "; transform:rotate(" +
      startPos +
      "deg); left:50%;top:" +
      (radius / 2 - radius) +
      'vw; position:absolute; transform-origin:0 100%">' +
      '<span style="' +
      bottomCss +
      '">' +
      ch +
      "</span>" +
      "</p>";
    newElement = newElement + ch;
    startPos += deg;
  });
  return `<div class="${className}">${newElement}</div>`;
}
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
export function gotToTopUp() {
  try {
    window.phone.routeViewPage("streamkar://m.streamkar.com/route/pay");
  } catch (_error) {
    console.error(_error);
    // showToast("Open topup page page error...");
  }
}
export function goToStreaming() {
  try {
    window.phone.routeViewPage("streamkar://m.streamkar.com/route/home?tab=1275");
  } catch (_error) {
    console.error(_error);
    // showToast("Open topup page page error...");
  }
}
export const doorsArray = [
  {
    id: 1,
    openDoor: images.openDoor1,
    closeDoor: images.closedDoor1,
    doorNumber: images.doorNum1,
    shine: images.shine,
    itemName: "Pumpkin",
    width: "19vw",
    height: "28.5vw",
    left: "33vw",
    top: "12vw",
  },
  {
    id: 2,
    openDoor: images.openDoor2,
    closeDoor: images.closedDoor2,
    doorNumber: images.doorNum2,
    shine: images.shine,
    itemName: "Candy",
    width: "14vw",
    height: "23vw",
    left: "13vw",
    top: "56vw",
  },
  {
    id: 3,
    openDoor: images.openDoor3,
    closeDoor: images.closedDoor3,
    doorNumber: images.doorNum3,
    shine: images.shine,
    itemName: "Witch's Hat",
    width: "18vw",
    height: "28vw",
    left: "33vw",
    top: "46vw",
  },
  {
    id: 4,
    openDoor: images.openDoor4,
    closeDoor: images.closedDoor4,
    doorNumber: images.doorNum4,
    shine: images.shine,
    itemName: "Ghost Lantern",
    width: "16vw",
    height: "22vw",
    right: "13vw",
    top: "56vw",
  },
  {
    id: 5,
    openDoor: images.openDoor5,
    closeDoor: images.closedDoor5,
    doorNumber: images.doorNum5,
    shine: images.shine,
    itemName: "Bloody Mask",
    width: "14vw",
    height: "19vw",
    left: "13vw",
    top: "85vw",
  },
  {
    id: 6,
    openDoor: images.openDoor6,
    closeDoor: images.closedDoor6,
    doorNumber: images.doorNum6,
    shine: images.shine,
    itemName: "Skeleton Hand",
    width: "17vw",
    height: "26vw",
    left: "34vw",
    top: "79vw",
  },
  {
    id: 7,
    openDoor: images.openDoor7,
    closeDoor: images.closedDoor7,
    doorNumber: images.doorNum7,
    shine: images.shine,
    itemName: "Magic potion",
    width: "15vw",
    height: "20vw",
    right: "13vw",
    top: "84vw",
  },
];

export const getDoorStatus = (data) => {
  return doorsArray.map((door) => {
    const matched = data.some((name) => name.toLowerCase() === door.itemName.toLowerCase());
    return { ...door, isDoorOpen: matched };
  });
};

export const dailyTasks = [
  {
    id: 1,
    taskName: "Play “Haunted House” game 2 times.",
    isDone: true,
    rewardName: "Zombie frame (New) ",
    rewardCount: "x2 day",
    giftNumber: 2,
  },
  {
    id: 2,
    taskName: "Watch a live stream for 10 minutes.",
    isDone: false,
    rewardName: "Halloween King frame",
    rewardCount: "x2 day",
    giftNumber: 2,
  },
  {
    id: 3,
    taskName: 'Send event gift "Surprise Box" 1 time',
    isDone: false,
    rewardName: "Zombie room skin (New) ",
    rewardCount: "x2 day",
    giftNumber: 2,
  },
  {
    id: 4,
    taskName: 'Send event gift "Crossbones" 1 time',
    isDone: true,
    rewardName: "Halloween Champion room skin",
    rewardCount: "x1 day",
    giftNumber: 1,
  },
  {
    id: 5,
    taskName: "Get a top-up of 100K Beans.",
    isDone: false,
    rewardName: "Ghost Buster room skin",
    rewardCount: "x2 day",
    giftNumber: 6,
  },
  {
    id: 6,
    taskName: "Follow 2 users.",
    isDone: false,
    rewardName: "Magic potion frame (New)",
    rewardCount: "x2 day",
    giftNumber: 2,
  },
  {
    id: 7,
    taskName: "Watch any SHORT DRAMA for at least 300 seconds in a DAY",
    isDone: false,
    rewardName: "Candy corn frame (New)",
    rewardCount: "x2 day",
    giftNumber: 2,
  },
];

export const dummRanks = {
  errorCode: 0,
  msg: "success",
  data: {
    list: [
      {
        ranking: 1,
        userId: 596492375,
        userScore: 4014212500,
        nickname: "nazish_03",
        userLevel: 72,
        actorLevel: 30,
        liveType: 0,
      },
      {
        ranking: 2,
        userId: 550002950,
        userScore: 3258800000,
        nickname: "Dhoni",
        userLevel: 92,
        actorLevel: 61,
        liveType: 0,
        // portrait: "http://kkimg.kktv9.com/image/550002950_0_1522315889638.jpg!128",
      },
      {
        ranking: 3,
        userId: 596492374,
        userScore: 2697642000,
        nickname: "nazish_02",
        userLevel: 31,
        actorLevel: 10,
        liveType: 0,
        // portrait: "http://kkimg.kktv9.com/image/596492374_0_dcca0e03-e68a-426d-9a16-ccc4f4003e5e.jpg!128",
      },
      {
        ranking: 4,
        userId: 502184264,
        userScore: 1350400000,
        nickname: "Kamran Za",
        userLevel: 122,
        actorLevel: 0,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/502184264_0_1548049352075.jpg!128",
      },
      {
        ranking: 5,
        userId: 555000037,
        userScore: 1253550000,
        nickname: "tesrg",
        userLevel: 53,
        actorLevel: 16,
        liveType: 1,
        portrait: "http://kkimg.kktv9.com/image/555000037_0_1589189620111.png!128",
      },
      {
        ranking: 6,
        userId: 502184254,
        userScore: 1000500000,
        nickname: "Mohammad Awais 大明山",
        userLevel: 81,
        actorLevel: 0,
        liveType: 1,
      },
      {
        ranking: 7,
        userId: 502184252,
        userScore: 915011000,
        nickname: "Muhammad84252",
        userLevel: 95,
        actorLevel: 39,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/502184252_0_1543228008449.jpg!128",
      },
      {
        ranking: 8,
        userId: 502184260,
        userScore: 782475500,
        nickname: "olliiii",
        userLevel: 107,
        actorLevel: 61,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/502184260_0_1650529833872.png!128",
      },
      {
        ranking: 9,
        userId: 596490754,
        userScore: 769948000,
        nickname: "TeeZee",
        userLevel: 71,
        actorLevel: 16,
        liveType: 0,
      },
      {
        ranking: 10,
        userId: 596492373,
        userScore: 537389500,
        nickname: "nazish_01",
        userLevel: 94,
        actorLevel: 40,
        liveType: 0,
      },
      {
        ranking: 11,
        userId: 502184245,
        userScore: 524975000,
        nickname: "～～～～",
        userLevel: 40,
        actorLevel: 14,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/502184245_0_1526982178859.jpg!128",
      },
      {
        ranking: 12,
        userId: 596492501,
        userScore: 449800000,
        nickname: "abc123",
        userLevel: 129,
        actorLevel: 3,
        liveType: 0,
      },
      {
        ranking: 13,
        userId: 502184266,
        userScore: 407675000,
        nickname: "PM",
        userLevel: 129,
        actorLevel: 16,
        liveType: 1,
      },
      {
        ranking: 14,
        userId: 555000031,
        userScore: 356550000,
        nickname: "aaa",
        userLevel: 79,
        actorLevel: 39,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/555000031_0_1581664188630.png!128",
      },
      {
        ranking: 15,
        userId: 596492550,
        userScore: 353925000,
        nickname: "Shubman Gill",
        userLevel: 12,
        actorLevel: 16,
        liveType: 0,
      },
      {
        ranking: 16,
        userId: 502184267,
        userScore: 327625000,
        nickname: "Ayaz Alam",
        userLevel: 129,
        actorLevel: 0,
        liveType: 0,
      },
      {
        ranking: 17,
        userId: 502184263,
        userScore: 308675000,
        nickname: "Asif Gu263ab",
        userLevel: 36,
        actorLevel: 17,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/502184263_0_1603024352974.png!128",
      },
      {
        ranking: 18,
        userId: 596492535,
        userScore: 287425000,
        nickname: "Ro-hit Sharma",
        userLevel: 18,
        actorLevel: 16,
        liveType: 0,
      },
      {
        ranking: 19,
        userId: 596490715,
        userScore: 272550000,
        nickname: "MR.bens\uD83D\uDC9D\uD83D\uDC9D\uD83D\uDC9D\uD83D\uDC9D\uD83C\uDF38\uD83C\uDF38",
        userLevel: 20,
        actorLevel: 6,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/image/596490715_0_1675823121314.jpeg!128",
      },
      {
        ranking: 20,
        userId: 596490299,
        userScore: 154900000,
        nickname: "只要299",
        userLevel: 37,
        actorLevel: 34,
        liveType: 0,
        portrait: "http://kkimg.kktv9.com/img/portrait/20250620/596490299_0_dd6d5d23d96449ccbb57d1c8f13b49a5.png!128",
      },
    ],
    pageCount: 2,
    count: 32,
  },
};
export function openShortPage() {
  try {
    var href = "streamkar://m.streamkar.com/route/home?index=1";
    openToast("success");
    //window.phone.goToActivityWeb("Test ",href);
    window.phone.routeViewPage(href);
  } catch (_error) {
    console.error(_error);
    openToast("Open page error..." + _error);
    location.href = "streamkar://m.streamkar.com/route/home?index=1";
  }
}
