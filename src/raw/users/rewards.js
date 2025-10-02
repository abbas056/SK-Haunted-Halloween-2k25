export const event_gift = [
  {
    desc: "Haunted Hero",
    price: "50K",
  },
  {
    desc: "Pumpkin Blast",
    price: "40K",
  },
  {
    desc: "Surprise Box",
    price: "25k",
  },
  {
    desc: "Cross Bones",
    price: "10K",
  },
  {
    desc: "Candy Treat",
    price: "0",
  },
];

export const tabOneBeansRewards = [
  {
    id: 1,
    rank: "1st",
    rewards: [
      { desc: "Zombie frame (New)", count: "3" },
      { desc: "Zombie room skin (New)", count: "3" },
    ],
  },
  {
    id: 2,
    rank: "2nd",
    rewards: [
      { desc: "Zombie frame (New)", count: "2" },
      { desc: "Zombie room skin (New)", count: "2" },
    ],
  },
  {
    id: 3,
    rank: "3rd",
    rewards: [
      { desc: "Zombie frame (New)", count: "1" },
      { desc: "Zombie room skin (New)", count: "1" },
    ],
  },
];

export const tabTwoBeansRewards = [
  {
    id: 1,
    rank: "1st",
    rewards: [
      { desc: "50% of the Beans pot" },
      { desc: "Magic Potion frame (New)", count: "3" },
      { desc: "Magic Potion room skin (New)", count: "3" },
    ],
  },
  {
    id: 2,
    rank: "2nd",
    rewards: [
      { desc: "30% of the Beans pot" },
      { desc: "Magic Potion frame (New)", count: "2" },
      { desc: "Magic Potion room skin (New)", count: "2" },
    ],
  },
  {
    id: 3,
    rank: "3rd",
    rewards: [
      { desc: "20% of the Beans pot" },
      { desc: "Magic Potion frame (New)", count: "1" },
      { desc: "Magic Potion room skin (New)", count: "1" },
    ],
  },
];
export const tabTwoGemsRewards = [
  {
    id: 1,
    rank: "1st",
    rewards: [{ desc: "50% of the Gems pot" }, { desc: "Zombie frame (New)", count: "3" }, { desc: "Zombie room skin (New)", count: "3" }],
  },
  {
    id: 2,
    rank: "2nd",
    rewards: [{ desc: "30% of the Gems pot" }, { desc: "Zombie frame (New)", count: "2" }, { desc: "Zombie room skin (New)", count: "2" }],
  },
  {
    id: 3,
    rank: "3rd",
    rewards: [{ desc: "20% of the Gems pot" }, { desc: "Zombie frame (New)", count: "1" }, { desc: "Zombie room skin (New)", count: "1" }],
  },
];
export const dailyTalentRewards = [
  {
    id: 1,
    rank: "1st",
    combined: true,
    rewards: [
      { desc: "Gems", percent: "40% of the Gems Pot" },
      { desc: "Potion frame (New)", count: "3" },
    ],
  },
  {
    id: 2,
    rank: "2nd",
    combined: true,
    rewards: [
      { desc: "Gems", percent: "30% of the Gems Pot" },
      { desc: "Potion frame (New)", count: "2" },
    ],
  },
  {
    id: 3,
    rank: "3rd-5th",
    combined: true,
    rewards: [
      { desc: "Gems", percent: "10% of the Gems Pot" },
      { desc: "Potion frame (New)", count: "1" },
    ],
  },
  {
    id: 4,
    rank: "6th-10th",
    combined: true,
    rewards: [{ desc: "Magic Potion frame (New)", count: "1" }],
  },
];

export const overallTalentRewards = [
  {
    id: 1,
    rank: "1st",
    target: "65m",
    rewards: [
      { desc: "Gems", count: "2,000,000" },
      { desc: "Zombie frame (New)", count: "5" },
      { desc: "Zombie room skin (New)", count: "5" },
    ],
  },
  {
    id: 2,
    rank: "2nd",
    target: "50m",
    rewards: [
      { desc: "Gems", count: "1,000,000" },
      { desc: "Zombie frame (New)", count: "3" },
      { desc: "Zombie room skin (New)", count: "3" },
    ],
  },
  {
    id: 3,
    rank: "3rd",
    target: "40m",
    rewards: [
      { desc: "Gems", count: "500,000" },
      { desc: "Zombie frame (New)", count: "1" },
      { desc: "Zombie room skin (New)", count: "1" },
    ],
  },
];

export const dailyUserRewards = [
  {
    id: 1,
    rank: "1",
    desc: "beans pot",
    percent: "50% of the beans pot",
  },
  {
    id: 2,
    rank: "2",
    desc: "beans pot",
    percent: "30% of the beans pot",
  },
  {
    id: 3,
    rank: "3",
    desc: "beans pot",
    percent: "20% of the beans pot",
  },
];

export const overallUserRewards = [
  {
    id: 1,
    rank: "1st",
    rewards: [
      { desc: "Beans", count: "3,000,000" },
      { desc: "Magic Potion frame (New)", count: "5" },
      { desc: "Magic Potion room skin (New)", count: "5" },
    ],
  },
  {
    id: 2,
    rank: "2nd",
    rewards: [
      { desc: "Beans", count: "2,000,000" },
      { desc: "Magic Potion frame (New)", count: "3" },
      { desc: "Magic Potion room skin (New)", count: "3" },
    ],
  },
  {
    id: 3,
    rank: "3rd",
    rewards: [
      { desc: "Beans", count: "1,000,000" },
      { desc: "Magic Potion frame (New)", count: "1" },
      { desc: "Magic Potion room skin (New)", count: "1" },
    ],
  },
];

export const tabOneGameRewards = [
  {
    button: "Open",
    level: "30K Spooky Points Required",
    sections: [
      {
        doorNum: "1",
        itemName: "Pumpkin",
        rewards: [
          { name: "Magic Potion room skin (New)", count: "1" },
          { name: "Halloween Champion frame", count: "1" },
          { name: "Iron Hook room skin", count: "1" },
        ],
      },
      {
        doorNum: "2",
        itemName: "Candy",
        rewards: [
          { name: "Beans", count: "3000" },
          { name: "Gold Dragon entrance", count: "1" },
          { name: "Ghost Buster frame", count: "1" },
        ],
      },
      {
        doorNum: "3",
        itemName: "Witch's Hat",
        rewards: [
          { name: "Magic Potion frame (New)", count: "1" },
          { name: "Spooky SK frame", count: "1" },
          { name: "Ghost Buster room skin", count: "1" },
        ],
      },
      {
        doorNum: "4",
        itemName: "Ghost Lantern",
        rewards: [
          { name: "Zombie roomskin (New)", count: "1" },
          { name: "Halloween Champion room skin", count: "1" },
          { name: "Iron Hook frame", count: "1" },
        ],
      },
      {
        doorNum: "5",
        itemName: "Bloody Mask",
        rewards: [
          { name: "Zombie frame (New)", count: "1" },
          { name: "Sea Wolf room skin", count: "1" },
          { name: "Royalty frame", count: "1" },
        ],
      },
      {
        doorNum: "6",
        itemName: "Skeleton Hand",
        rewards: [
          { name: "Beans", count: "1500" },
          { name: "Phoenix entrance", count: "1" },
          { name: "Halloween King frame", count: "1" },
        ],
      },
      {
        doorNum: "7",
        itemName: "Magic potion",
        rewards: [
          { name: "Magic Potion frame (New)", count: "1" },
          { name: "Zombie frame (New)", count: "1" },
          { name: "Beans", count: "3000" },
        ],
      },
    ],
  },
];
export const tabOneGoldenHourRewards = [
  {
    button: "Catch",
    level: "30K",
    sections: [
      {
        name: "Lion",
        rewards: [
          { name: "Jungle King frame", count: "2" },
          { name: "Subzero room skin", count: "2" },
          { name: "Beans", count: "2000" },
          { name: "Hunter’s Eye frame (New)", count: "2" },
          { name: "Hunter’s Eye room skin (New)", count: "2" },
        ],
      },
      {
        name: "wolf",
        rewards: [
          { name: "Hawk Entrance", count: "2" },
          { name: "King frame", count: "2" },
          { name: "Captain Jack frame", count: "2" },
          { name: "Beans", count: "3400" },
          { name: "Hunter’s Eye frame (New)", count: "2" },
        ],
      },
      {
        name: "tiger",
        rewards: [
          { name: "Beans", count: "4000" },
          { name: "Doyen room skin", count: "2" },
          { name: "Phantom entrance", count: "2" },
          { name: "Phoenix entrance", count: "2" },
          { name: "Hunter’s Eye room skin (New)", count: "2" },
        ],
      },
      {
        name: "Leopard",
        rewards: [
          { name: "Kingship room skin x1 day", count: "2" },
          { name: "Beans", count: "2000 " },
          { name: "Alpha frame", count: "2" },
          { name: "Unicorn room skin", count: "2" },
          { name: "Twilight Bloom frame (New)", count: "2" },
        ],
      },
      {
        name: "Cheetah",
        rewards: [
          { name: "Gold Luxury entrance", count: "2" },
          { name: "Beans", count: "1000" },
          { name: "Explorer  room skin x1 day", count: "2" },
          { name: "Unicorn frame", count: "2" },
          { name: "Twilight Bloom room skin (New)", count: "2" },
        ],
      },
    ],
  },
];
export const tabOneRechargeWeapon = [
  {
    button: "Collect reward",
    // level: "100K",
    sections: [
      {
        rewards: [
          { name: "Beans", count: "5000" },
          { name: "Zombie frame (New)", count: "1" },
          { name: "Zombie room skin (New)", count: "1" },
          { name: "Hawk entrance", count: "1" },
        ],
      },
    ],
  },
];
export const tabTwoGameRewards = [
  {
    button: "Treat",
    sections: [
      {
        type: "30K",
        rewards: [
          { name: "Zombie frame (New) ", count: "2" },
          { name: "Zombie room skin (New)", count: "2" },
          { name: "Spooky SK frame ", count: "2" },
          { name: "Fury frame", count: "2" },
          { name: "Boss frame", count: "2" },
          { name: "Halloween King frame", count: "1" },
          { name: "Halloween King room skin ", count: "1" },
          { name: "Ghost Buster frame", count: "1" },
          { name: "Beans", count: "500" },
          { name: "Beans", count: "1000" },
        ],
      },
    ],
  },
];
