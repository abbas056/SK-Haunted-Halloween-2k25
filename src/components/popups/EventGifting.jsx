import React, { useState } from "react";

import RewardContainer from "../common/RewardContainer";
import GiftingRewards from "../elements/GiftingRewards";
import GiftingBoard from "../elements/GiftingBoard";
import { event_gift } from "../../raw/users/rewards";

export default function EventGifting() {
  return (
    <>
      <RewardContainer rewards={event_gift} singleList />
      <GiftingRewards />
      <GiftingBoard />
    </>
  );
}
