import { images } from "../assets";
import { baseURL } from "../URL";

// import troopsIcon from "../assets/soilder-icon.png";
// import StoneIcon from "../assets/point-icon.png";
// import goldIcon from "../assets/gold-icon.png";
// import comingSoon from "../assets/coming-soon-reward.png";

export function rewGet(rewDesc) {
  var newRewDesc = rewDesc?.toLowerCase();
  var rewImg;
  //Event Gifts Start
  if (newRewDesc?.includes("fish world")) {
    rewImg = baseURL + "/streamkar/gifts/fishWorld.png";
  } else if (newRewDesc?.includes("sandcastle")) {
    rewImg = baseURL + "/streamkar/gifts/sandCastle.png";
  } else if (newRewDesc?.includes("splash")) {
    rewImg = baseURL + "/streamkar/gifts/40001503.png";
  } else if (newRewDesc?.includes("sweets")) {
    rewImg = baseURL + "/streamkar/gifts/40001668.png";
  } else if (newRewDesc?.includes("beast trail")) {
    rewImg = baseURL + "/streamkar/gifts/40001668.png";
  } else if (newRewDesc?.includes("jungle explorer")) {
    rewImg = baseURL + "/streamkar/gifts/jungleExplorer.png";
  } else if (newRewDesc?.includes("wishing well")) {
    rewImg = baseURL + "/streamkar/gifts/40001619.png";
  } else if (newRewDesc?.includes("the lion king")) {
    rewImg = baseURL + "/streamkar/gifts/40011804.png";
  } else if (newRewDesc?.includes("tiger king")) {
    rewImg = baseURL + "/streamkar/gifts/40011811.png";
  }
  //
  // New
  //
  else if (newRewDesc?.includes("new")) {
    if (newRewDesc?.includes("sand bag frame (new)")) {
      rewImg = baseURL + "/streamkar/rewards/sandBagFrame.png";
    } else if (newRewDesc?.includes("sand bag room skin (new)")) {
      rewImg = baseURL + "/streamkar/rewards/sandBagTheme.png";
    } else if (newRewDesc?.includes("sea sparkle frame (new)")) {
      rewImg = baseURL + "/streamkar/rewards/seaSparkleFrame.png";
    } else if (newRewDesc?.includes("sea sparkle room skin (new)")) {
      rewImg = baseURL + "/streamkar/rewards/seaSparkleTheme.png";
    } else if (newRewDesc?.includes("hunter’s eye frame")) {
      rewImg = baseURL + "/streamkar/rewards/hunterEyeFrame.png";
    } else if (newRewDesc?.includes("hunter’s eye room skin")) {
      rewImg = baseURL + "/streamkar/rewards/hunterEyeRoomskin.png";
    } else if (newRewDesc?.includes("twilight bloom room skin")) {
      rewImg = baseURL + "/streamkar/rewards/twilightBloomRoomskin.png";
    } else if (newRewDesc?.includes("twilight bloom frame")) {
      rewImg = baseURL + "/streamkar/rewards/twilightBloomFrame.png";
    } else {
      rewImg = baseURL + "/streamkar/rewards/noRew.png";
    }
  } else if (newRewDesc?.includes("svip")) {
    rewImg = baseURL + "/streamkar/rewards/svip.png";
  } else if (newRewDesc?.includes("vip")) {
    rewImg = baseURL + "/streamkar/rewards/vip.png";
  } else if (newRewDesc?.includes("royal carriage")) {
    rewImg = baseURL + "/streamkar/rewards/royal.png";
  } else if (newRewDesc?.includes("radiance gold")) {
    rewImg = baseURL + "/streamkar/rewards/radianceGold.png";
  } else if (newRewDesc?.includes("radiance silver")) {
    rewImg = baseURL + "/streamkar/rewards/radianceSilver.png";
  } else if (newRewDesc?.includes("follower card")) {
    rewImg = baseURL + "/streamkar/rewards/followerCardMSK.png";
  } else if (newRewDesc?.includes("gems")) {
    rewImg = images.gemsBag;
  } else if (newRewDesc?.includes("beans")) {
    rewImg = baseURL + "/streamkar/rewards/beanbag.png";
  }
  //
  // Entrance
  //
  else if (newRewDesc?.includes("entrance")) {
    if (newRewDesc?.includes("dazzling diva")) {
      rewImg = baseURL + "/streamkar/rewards/divaEntrance.png";
    } else if (newRewDesc?.includes("gold luxury")) {
      rewImg = baseURL + "/streamkar/rewards/goldLuxury.png";
    } else if (newRewDesc?.includes("bomber")) {
      rewImg = baseURL + "/streamkar/rewards/bomber.png";
    } else if (newRewDesc?.includes("rider")) {
      rewImg = baseURL + "/streamkar/rewards/rider.png";
    } else if (newRewDesc?.includes("kingpin")) {
      rewImg = baseURL + "/streamkar/rewards/kingspin.png";
    } else if (newRewDesc?.includes("spaceship")) {
      rewImg = baseURL + "/streamkar/rewards/spaceship.png";
    } else if (newRewDesc?.includes("queen's ascend")) {
      rewImg = baseURL + "/streamkar/rewards/queensAscend.png";
    } else if (newRewDesc?.includes("birdman")) {
      rewImg = baseURL + "/streamkar/rewards/birdmanEntrance.png";
    } else if (newRewDesc?.includes("solar")) {
      rewImg = baseURL + "/streamkar/rewards/solar.png";
    } else if (newRewDesc?.includes("rusty ranger")) {
      rewImg = baseURL + "/streamkar/rewards/rustyRanger.png";
    } else if (newRewDesc?.includes("maharaja")) {
      rewImg = baseURL + "/streamkar/rewards/Maharaja-rewards.png";
    } else if (newRewDesc?.includes("f22")) {
      rewImg = baseURL + "/streamkar/rewards/f22.png";
    } else if (newRewDesc?.includes("victoryslide")) {
      rewImg = baseURL + "/streamkar/rewards/victorySlide.png";
    } else if (newRewDesc?.includes("bugatti")) {
      rewImg = baseURL + "/streamkar/rewards/bugati.png";
    } else if (newRewDesc?.includes("pro diver")) {
      rewImg = baseURL + "/streamkar/rewards/proDiverEntrance.png";
    } else if (newRewDesc?.includes("phoenix")) {
      rewImg = baseURL + "/streamkar/rewards/phoniex.png";
    } else if (newRewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarch.png";
    } else if (newRewDesc?.includes("hawk")) {
      rewImg = baseURL + "/streamkar/rewards/hawk.png";
    } else if (newRewDesc?.includes("phantom")) {
      rewImg = baseURL + "/streamkar/rewards/phantom.png";
    } else if (newRewDesc?.includes("howzat")) {
      rewImg = baseURL + "/streamkar/rewards/howZatEntrance.png";
    } else if (newRewDesc?.includes("gold dragon")) {
      rewImg = baseURL + "/streamkar/rewards/howZatEntrance.png";
    } else {
      rewImg = baseURL + "/streamkar/rewards/noRew.png";
    }
  }
  //
  // Audio Theme
  //
  else if (newRewDesc?.includes("audio theme") || newRewDesc?.includes("audio broadcast theme") || newRewDesc?.includes("audio broadcast")) {
    if (newRewDesc?.includes("romeo")) {
      rewImg = baseURL + "/streamkar/rewards/romeoRoomTheme.png";
    } else if (newRewDesc?.includes("forge master")) {
      rewImg = baseURL + "/streamkar/rewards/forgeMasterTheme.png";
    } else if (newRewDesc?.includes("orbit")) {
      rewImg = baseURL + "/streamkar/rewards/OrbitAudioTheme.png";
    } else if (newRewDesc?.includes("fish world")) {
      rewImg = baseURL + "/streamkar/rewards/fishWorldRoomskin.png";
    } else if (newRewDesc?.includes("party glitter")) {
      rewImg = baseURL + "/streamkar/rewards/partyGliter.png";
    } else if (newRewDesc?.includes("war hero")) {
      rewImg = baseURL + "/streamkar/rewards/warHeroRoomSkin.png";
    } else if (newRewDesc?.includes("vivid")) {
      rewImg = baseURL + "/streamkar/rewards/vividTheme.png";
    } else if (newRewDesc?.includes("king of road")) {
      rewImg = baseURL + "/streamkar/rewards/kingOfRoadRoomSkin.png";
    } else if (newRewDesc?.includes("discoverer")) {
      rewImg = baseURL + "/streamkar/rewards/discovererAudioTheme.png";
    } else if (newRewDesc?.includes("thunder")) {
      rewImg = baseURL + "/streamkar/rewards/thunderAudio.png";
    } else if (newRewDesc?.includes("victor")) {
      rewImg = baseURL + "/streamkar/rewards/victorSkin.png";
    } else if (newRewDesc?.includes("cricket master")) {
      rewImg = baseURL + "/streamkar/rewards/cricketAudioTheme.png";
    } else if (newRewDesc?.includes("celebration")) {
      rewImg = baseURL + "/streamkar/rewards/celebrationRoomskin.png";
    } else if (newRewDesc?.includes("space")) {
      rewImg = baseURL + "/streamkar/rewards/SpaceAudioTheme.png";
    } else if (newRewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchRoom.png";
    } else if (newRewDesc?.includes("firebrand")) {
      rewImg = baseURL + "/streamkar/rewards/fireBrandAudioTheme.png";
    } else if (newRewDesc?.includes("the master")) {
      rewImg = baseURL + "/streamkar/rewards/theMasterRoomSkin.png";
    } else if (newRewDesc?.includes("game master") || newRewDesc?.includes("gamemaster")) {
      rewImg = baseURL + "/streamkar/rewards/gameMasterRoomSkin.png";
    } else {
      rewImg = baseURL + "/streamkar/rewards/noRew.png";
    }
  }
  //
  // Room Skin
  //
  else if (newRewDesc?.includes("room skin")) {
    if (newRewDesc?.includes("royalty")) {
      rewImg = baseURL + "/streamkar/rewards/royaltiRoom.png";
    } else if (newRewDesc?.includes("safari champion")) {
      rewImg = baseURL + "/streamkar/rewards/safariChampionRoomSkin.png";
    } else if (newRewDesc?.includes("merry christmas")) {
      rewImg = baseURL + "/streamkar/rewards/meryyChristmasTheme.png";
    } else if (newRewDesc?.includes("iron hook")) {
      rewImg = baseURL + "/streamkar/rewards/iron-hook-roomskin.png";
    } else if (newRewDesc?.includes("new year champion")) {
      rewImg = baseURL + "/streamkar/rewards/newyearChampionRoomSkin.png";
    } else if (newRewDesc?.includes("halloween champion")) {
      rewImg = baseURL + "/streamkar/rewards/halloweenRoomskin.png";
    } else if (newRewDesc?.includes("sea wolf")) {
      rewImg = baseURL + "/streamkar/rewards/seaWolfRoomSkin.png";
    } else if (newRewDesc?.includes("night shadow")) {
      rewImg = baseURL + "/streamkar/rewards/nightShadow.png";
    } else if (newRewDesc?.includes("pirate")) {
      rewImg = baseURL + "/streamkar/rewards/pirateRoomSkin.png";
    } else if (newRewDesc?.includes("splashed")) {
      rewImg = baseURL + "/streamkar/rewards/splashedTheme.png";
    } else if (newRewDesc?.includes("sailor")) {
      rewImg = baseURL + "/streamkar/rewards/sailorRoomSkin.png";
    } else if (newRewDesc?.includes("kingship")) {
      rewImg = baseURL + "/streamkar/rewards/kingshipRoom.png";
    } else if (newRewDesc?.includes("luminary")) {
      rewImg = baseURL + "/streamkar/rewards/luminarSkin.png";
    } else if (newRewDesc?.includes("ghost buster")) {
      rewImg = baseURL + "/streamkar/rewards/ghostBusterRoomSkin.png";
    } else if (newRewDesc?.includes("doyen")) {
      rewImg = baseURL + "/streamkar/rewards/doyenRoomskin.png";
    } else if (newRewDesc?.includes("christmas")) {
      rewImg = baseURL + "/streamkar/rewards/christmasTheme.png";
    } else if (newRewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchRoom.png";
    } else if (newRewDesc?.includes("boss")) {
      rewImg = baseURL + "/streamkar/rewards/bossRoomSkin.png";
    } else if (newRewDesc?.includes("exquisite")) {
      rewImg = baseURL + "/streamkar/rewards/exquisiteRoomSkin.png";
    } else if (newRewDesc?.includes("enlightening")) {
      rewImg = baseURL + "/streamkar/rewards/enlighteningRoom.png";
    } else if (newRewDesc?.includes("firebrand")) {
      rewImg = baseURL + "/streamkar/rewards/fireBrandAudioTheme.png";
    } else if (newRewDesc?.includes("stadium")) {
      rewImg = baseURL + "/streamkar/rewards/stadiumAudioTheme.jpg";
    } else if (newRewDesc?.includes("the master")) {
      rewImg = baseURL + "/streamkar/rewards/theMasterRoomSkin.png";
    } else if (newRewDesc?.includes("azaadi")) {
      rewImg = baseURL + "/streamkar/rewards/azadiRoomskin.png";
    } else if (newRewDesc?.includes("subzero")) {
      rewImg = baseURL + "/streamkar/rewards/subzeroSkin.png";
    } else if (newRewDesc?.includes("alpha")) {
      rewImg = baseURL + "/streamkar/rewards/alphaSkin.png";
    } else if (newRewDesc?.includes("celebration")) {
      rewImg = baseURL + "/streamkar/rewards/celebrationRoomskin.png";
    } else if (newRewDesc?.includes("aesthetic")) {
      rewImg = baseURL + "/streamkar/rewards/aestheticRoomskin.png";
    } else if (newRewDesc?.includes("victor")) {
      rewImg = baseURL + "/streamkar/rewards/victorSkin.png";
    } else if (newRewDesc?.includes("battle")) {
      rewImg = baseURL + "/streamkar/rewards/battleSkin.png";
    } else if (newRewDesc?.includes("explorer")) {
      rewImg = baseURL + "/streamkar/rewards/explorerRoomSkin.png";
    } else if (newRewDesc?.includes("unicorn")) {
      rewImg = baseURL + "/streamkar/rewards/unicornTheme.png";
    } else if (newRewDesc?.includes("dare")) {
      rewImg = baseURL + "/streamkar/rewards/dareDevilRoomTheme.png";
    } else if (newRewDesc?.includes("jungle")) {
      rewImg = baseURL + "/streamkar/rewards/JunglekingRoomskin.png";
    } else if (newRewDesc?.includes("frenzy")) {
      rewImg = baseURL + "/streamkar/rewards/frenzyRoomSkin.png";
    } else if (newRewDesc?.includes("halloween king")) {
      rewImg = baseURL + "/streamkar/rewards/halloweenKingRoomSkin.png";
    } else {
      rewImg = baseURL + "/streamkar/rewards/noRew.png";
    }
  }
  //
  // Badges
  //
  else if (newRewDesc?.includes("Badge")) {
    if (newRewDesc?.includes("royalty")) {
      rewImg = baseURL + "/streamkar/rewards/royaltiBadge.png";
    } else if (newRewDesc?.includes("kingship")) {
      rewImg = baseURL + "/streamkar/rewards/kingshipBadge.png";
    } else if (newRewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchBadge.png";
    } else if (newRewDesc?.includes("sovereign")) {
      rewImg = baseURL + "/streamkar/rewards/sovereignBadge.png";
    } else if (newRewDesc?.includes("exquisite")) {
      rewImg = baseURL + "/streamkar/rewards/exquisiteBadge.png";
    } else if (newRewDesc?.includes("beloved")) {
      rewImg = baseURL + "/streamkar/rewards/belovedBadge.png";
    } else if (newRewDesc?.includes("eid")) {
      rewImg = baseURL + "/streamkar/rewards/eidBadge.png";
    } else if (newRewDesc?.includes("blessed")) {
      rewImg = baseURL + "/streamkar/rewards/blessedBadge.png";
    } else if (newRewDesc?.includes("topliner")) {
      rewImg = baseURL + "/streamkar/rewards/toplinerBadge.png";
    } else {
      rewImg = baseURL + "/streamkar/rewards/noRew.png";
    }
  }
  //
  // Profile Frame
  //
  else if (newRewDesc?.includes("frame") || newRewDesc?.includes("profile frame")) {
    if (newRewDesc?.includes("super star profile")) {
      rewImg = baseURL + "/streamkar/rewards/superstarProfileFrame.png";
    } else if (newRewDesc?.includes("explorer")) {
      rewImg = baseURL + "/streamkar/rewards/explorerFrame.png";
    } else if (newRewDesc?.includes("jungle")) {
      rewImg = baseURL + "/streamkar/rewards/junglekingframesk.png";
    } else if (newRewDesc?.includes("safari champion")) {
      rewImg = baseURL + "/streamkar/rewards/safariDesertframe.png";
    } else if (newRewDesc?.includes("sk billionaire")) {
      rewImg = baseURL + "/streamkar/rewards/skBillionare.png";
    } else if (newRewDesc?.includes("captain jack")) {
      rewImg = baseURL + "/streamkar/rewards/captain-jack-frame.png";
    } else if (newRewDesc?.includes("halloween champion")) {
      rewImg = baseURL + "/streamkar/rewards/captain-jack-frame.png";
    } else if (newRewDesc?.includes("merry christmas")) {
      rewImg = baseURL + "/streamkar/rewards/merryChristmasFrame.png";
    } else if (newRewDesc?.includes("new year champion")) {
      rewImg = baseURL + "/streamkar/rewards/newyearChampionFrame.png";
    } else if (newRewDesc?.includes("sailor")) {
      rewImg = baseURL + "/streamkar/rewards/sailorFrame.png";
    } else if (newRewDesc?.includes("braveheart")) {
      rewImg = baseURL + "/streamkar/rewards/braveHeart.png";
    } else if (newRewDesc?.includes("voyager")) {
      rewImg = baseURL + "/streamkar/rewards/voyagerProfileFrame.png";
    } else if (newRewDesc?.includes("flamebound victor")) {
      rewImg = baseURL + "/streamkar/rewards/victorFrame.png";
    } else if (newRewDesc?.includes("orbit")) {
      rewImg = baseURL + "/streamkar/rewards/orbit.png";
    } else if (newRewDesc?.includes("royal")) {
      rewImg = baseURL + "/streamkar/rewards/royalProfileFrame.png";
    } else if (newRewDesc?.includes("powerful")) {
      rewImg = baseURL + "/streamkar/rewards/powerFulFrame.png";
    } else if (newRewDesc?.includes("iron hook")) {
      rewImg = baseURL + "/streamkar/rewards/iron-hook-frame.png";
    } else if (newRewDesc?.includes("graceful")) {
      rewImg = baseURL + "/streamkar/rewards/gracefulFrame.png";
    } else if (newRewDesc?.includes("ignite")) {
      rewImg = baseURL + "/streamkar/rewards/igniteFrame.png";
    } else if (newRewDesc?.includes("conqueror")) {
      rewImg = baseURL + "/streamkar/rewards/conquerorFrame.png";
    } else if (newRewDesc?.includes("luminary")) {
      rewImg = baseURL + "/streamkar/rewards/luminarFrame.png";
    } else if (newRewDesc?.includes("fiery")) {
      rewImg = baseURL + "/streamkar/rewards/fierceFrame.gif";
    } else if (newRewDesc?.includes("space traveller")) {
      rewImg = baseURL + "/streamkar/rewards/travellor.png";
    } else if (newRewDesc?.includes("gamemaster") || newRewDesc?.includes("game master")) {
      rewImg = baseURL + "/streamkar/rewards/gameMasterProfileFrame.png";
    } else if (newRewDesc?.includes("space warrior")) {
      rewImg = baseURL + "/streamkar/rewards/warrior.png";
    } else if (newRewDesc?.includes("valentine user") || newRewDesc?.includes("raging bull")) {
      rewImg = baseURL + "/streamkar/rewards/valentineFrameUser.png";
    } else if (newRewDesc?.includes("forge master profile")) {
      rewImg = baseURL + "/streamkar/rewards/forgeMaster.png";
    } else if (newRewDesc?.includes("sea wolf")) {
      rewImg = baseURL + "/streamkar/rewards/seawolfFrame.png";
    } else if (newRewDesc?.includes("maestro ")) {
      rewImg = baseURL + "/streamkar/rewards/maestro.png";
    } else if (newRewDesc?.includes("Bunny") || newRewDesc?.includes("bunny")) {
      rewImg = baseURL + "/streamkar/rewards/bunnyFrame.gif";
    } else if (newRewDesc?.includes("voyager proﬁle")) {
      rewImg = baseURL + "/streamkar/rewards/voyagerProfileFrame.png";
    } else if (newRewDesc?.includes("loved one profile")) {
      rewImg = baseURL + "/streamkar/rewards/loveFrame.png";
    } else if (newRewDesc?.includes("kingpin")) {
      rewImg = baseURL + "/streamkar/rewards/kingpinFrame.png";
    } else if (newRewDesc?.includes("charmed")) {
      rewImg = baseURL + "/streamkar/rewards/charmedFrame.png";
    } else if (newRewDesc?.includes("frosty")) {
      rewImg = baseURL + "/streamkar/rewards/frostyFrame.png";
    } else if (newRewDesc?.includes("boss")) {
      rewImg = baseURL + "/streamkar/rewards/bossFrame.png";
    } else if (newRewDesc?.includes("azaadi frame")) {
      rewImg = baseURL + "/streamkar/rewards/azadiFrame.png";
    } else if (newRewDesc?.includes("peacemaker frame")) {
      rewImg = baseURL + "/streamkar/rewards/peacemakerFrame.png";
    } else if (newRewDesc?.includes("stellar profile")) {
      rewImg = baseURL + "/streamkar/rewards/StellarFrame.png";
    } else if (newRewDesc?.includes("blazing")) {
      rewImg = baseURL + "/streamkar/rewards/blazingFrame.png";
    } else if (newRewDesc?.includes("fury")) {
      rewImg = baseURL + "/streamkar/rewards/furyFrame.png";
    } else if (newRewDesc?.includes("fighter")) {
      rewImg = baseURL + "/streamkar/rewards/fighterProfileFrame.png";
    } else if (newRewDesc?.includes("royalty")) {
      rewImg = baseURL + "/streamkar/rewards/royaltiProfileFrame.png";
    } else if (newRewDesc?.includes("glory")) {
      rewImg = baseURL + "/streamkar/rewards/glory-frame.png";
    } else if (newRewDesc?.includes("ace")) {
      rewImg = baseURL + "/streamkar/rewards/ace.png";
    } else if (newRewDesc?.includes("king")) {
      rewImg = baseURL + "/streamkar/rewards/kingFrame.png";
    } else if (newRewDesc?.includes("battle")) {
      rewImg = baseURL + "/streamkar/rewards/battleFrame.png";
    } else if (newRewDesc?.includes("kingship")) {
      rewImg = baseURL + "/streamkar/rewards/kingshipProfileFrame.png";
    } else if (newRewDesc?.includes("monarch")) {
      rewImg = baseURL + "/streamkar/rewards/monarchProfileFrame.png";
    } else if (newRewDesc?.includes("super hunter") || newRewDesc?.includes("hunter")) {
      rewImg = baseURL + "/streamkar/rewards/superHunterFrame.png";
    } else if (newRewDesc?.includes("exquisite")) {
      rewImg = baseURL + "/streamkar/rewards/exquisiteFrame.png";
    } else if (newRewDesc?.includes("mysterio")) {
      rewImg = baseURL + "/streamkar/rewards/mysterioFrame.png";
    } else if (newRewDesc?.includes("alpha")) {
      rewImg = baseURL + "/streamkar/rewards/alphaFrame.png";
    } else if (newRewDesc?.includes("eid")) {
      rewImg = baseURL + "/streamkar/rewards/eidFrame.png";
    } else if (newRewDesc?.includes("celebration")) {
      rewImg = baseURL + "/streamkar/rewards/celebrationFrame.png";
    } else if (newRewDesc?.includes("jericho")) {
      rewImg = baseURL + "/streamkar/rewards/jerichoFrame.png";
    } else if (newRewDesc?.includes("mubarak")) {
      rewImg = baseURL + "/streamkar/rewards/mubarakFrame.png";
    } else if (newRewDesc?.includes("taj")) {
      rewImg = baseURL + "/streamkar/rewards/tajframe.png";
    } else if (newRewDesc?.includes("doyen")) {
      rewImg = baseURL + "/streamkar/rewards/doyenFrame.png";
    } else if (newRewDesc?.includes("gold")) {
      rewImg = baseURL + "/streamkar/rewards/goldeRushFrame.png";
    } else if (newRewDesc?.includes("unicorn")) {
      rewImg = baseURL + "/streamkar/rewards/unicornFrame.png";
    } else if (newRewDesc?.includes("ghost buster")) {
      rewImg = baseURL + "/streamkar/rewards/ghostBusterframe.png";
    } else if (newRewDesc?.includes("spooky sk")) {
      rewImg = baseURL + "/streamkar/rewards/spookyFrame.png";
    }
  } else {
    rewImg = baseURL + "/streamkar/rewards/noRew.png";
  }

  return rewImg;
}
// else if (
//   newRewDesc?.includes("Avatar Frame") ||
//   newRewDesc?.includes("Avatar frame") ||
//   newRewDesc?.includes("Avatar frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/avatarFrame.png";
// } else if (
//   newRewDesc?.includes("Avatar Room Skin") ||
//   newRewDesc?.includes("Avatar room skin") ||
//   newRewDesc?.includes("Avatar Room skin") ||
//   newRewDesc?.includes("Avatar room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/avatarTheme.png";
// } else if (
//   newRewDesc?.includes("Forge Master Room Skin") ||
//   newRewDesc?.includes("Forge Master room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/forgeMasterTheme.png";
// }
// else if (newRewDesc?.includes("xp") || newRewDesc?.includes("XP")) {
//   rewImg = baseURL + "/streamkar/rewards/xpPoint.png";
// } else if (newRewDesc?.includes("Maestro") || newRewDesc?.includes("maestro ")) {
//   rewImg = baseURL + "/streamkar/rewards/maestro.png";
// } else if (newRewDesc?.includes("Fury") || newRewDesc?.includes("fury")) {
//   rewImg = baseURL + "/streamkar/rewards/furyFrame.png";
// } else if (
//   newRewDesc?.includes("FireBrand Profile Frame") ||
//   newRewDesc?.includes("firebrand profile frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/firebrand Profile frame.png";
// }
// //new Start
// else if (
//   newRewDesc?.includes("pirate room skin") ||
//   newRewDesc?.includes("pirate room skin") ||
//   newRewDesc?.includes("Pirate Room Skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/pirateRoomSkin.png";
// } else if (
//   newRewDesc?.includes("Pirate Frame ") ||
//   newRewDesc?.includes("Pirate Frame") ||
//   newRewDesc?.includes("pirate frame ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/pirateFrame.png";
// } else if (
//   newRewDesc?.includes("Lone Wolf Entrance") ||
//   newRewDesc?.includes("lone wolf entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/loneWolf.png";
// } else if (
//   newRewDesc?.includes("Sea Wolf Room Skin") ||
//   newRewDesc?.includes("Sea wolf room skin") ||
//   newRewDesc?.includes("Sea Wolf room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/seaWolfRoomSkin.png";
// } else if (
//   newRewDesc?.includes("Sea Wolf Frame ") ||
//   newRewDesc?.includes("Sea Wolf Frame") ||
//   newRewDesc?.includes("sea wolf Frame ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/seawolfFrame.png";
// } else if (
//   newRewDesc?.includes("Night Shadow Room Skin") ||
//   newRewDesc?.includes("Night shadow room skin") ||
//   newRewDesc?.includes("night shadow room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/nightShadow.png";
// } else if (
//   newRewDesc?.includes("Mega Star Frame") ||
//   newRewDesc?.includes("mega star frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/megaStarFrame.png";
// } else if (
//   newRewDesc?.includes("Sailor Frame ") ||
//   newRewDesc?.includes("Sailor Frame") ||
//   newRewDesc?.includes("sailor frame ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/sailorFrame.png";
// } else if (
//   newRewDesc?.includes("Sailor Room Skin ") ||
//   newRewDesc?.includes("Sailor Room Skin") ||
//   newRewDesc?.includes("sailor room skin ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/sailorRoomSkin.png";
// } else if (
//   newRewDesc?.includes("Splashed Room Skin") ||
//   newRewDesc?.includes("splashed room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/splashedTheme.png";
// }
// //COMING SOON
//
// //new END
// else if (
//   newRewDesc?.includes("Safari Champion Frame") ||
//   newRewDesc?.includes("Safari Champion Frame") ||
//   newRewDesc?.includes("Safari Champion Frame") ||
//   newRewDesc?.includes("Safari Champion Frame ") ||
//   newRewDesc?.includes("safari frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/safariDesertframe.png";
// } else if (
//   newRewDesc?.includes("Safari Champion Room Skin") ||
//   newRewDesc?.includes("Safari Champion Room Skin") ||
//   newRewDesc?.includes("Safari Champion Room Skin") ||
//   newRewDesc?.includes("Safari Champion Room Skin ") ||
//   newRewDesc?.includes("safari skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/safariChampionRoomSkin.png";
// } else if (
//   newRewDesc?.includes("Moon Knight Room Skin") ||
//   newRewDesc?.includes("Moon Knight Room Skin") ||
//   newRewDesc?.includes("Moon Knight Room Skin") ||
//   newRewDesc?.includes("Moon Knight Room Skin ") ||
//   newRewDesc?.includes("Moon Knight Room Skin ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/moonKnightSkin.png";
// } else if (
//   newRewDesc?.includes("Moon Knight Frame") ||
//   newRewDesc?.includes("Moon Knight frame") ||
//   newRewDesc?.includes("Moon knight frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/moonKnightFrame.png";
// } else if (
//   newRewDesc?.includes("Ramadan Glory Frame") ||
//   newRewDesc?.includes("ramadan glory frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/ramadanGloryFrame.png";
// } else if (
//   newRewDesc?.includes("FireBrand Room Skin") ||
//   newRewDesc?.includes("firebrand room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/fireBrandAudioTheme.png";
// } else if (
//   newRewDesc?.includes("Ramadan Mubarak Room Skin") ||
//   newRewDesc?.includes("ramadan mubarak room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/ramdanMubarakRoomSkin.png";
// } else if (
//   newRewDesc?.includes("Desert Knight Room Skin") ||
//   newRewDesc?.includes("Desert Knight Room Skin") ||
//   newRewDesc?.includes("Desert Knight Room Skin") ||
//   newRewDesc?.includes("desert knight room skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/desertNight.png";
// } else if (
//   newRewDesc?.includes("Desert Knight Frame") ||
//   newRewDesc?.includes("Desert Knight Frame") ||
//   newRewDesc?.includes("desert knight frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/desertnightFrame.png";
// } else if (
//   newRewDesc?.includes("Waterfront Room Skin") ||
//   newRewDesc?.includes("waterfront")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/waterfrontRoomskin.png";
// } else if (newRewDesc?.includes("Fierce Frame") || newRewDesc?.includes("fierce")) {
//   rewImg = baseURL + "/streamkar/rewards/fierceFrame.gif";
// } else if (
//   newRewDesc?.includes("Iron Man Entrance") ||
//   newRewDesc?.includes("Iron Man ")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/ironMan.png";
// } else if (
//   newRewDesc?.includes("Frosty Room Skin") ||
//   newRewDesc?.includes("Frosty Room") ||
//   newRewDesc?.includes("Frosty Mubarak Room Skin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/frostySkin.png";
// } else if (
//   newRewDesc?.includes("Pirate Ship Entrance") ||
//   newRewDesc?.includes("pirate ship")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/pirateShip.png";
// } else if (newRewDesc?.includes("Gems") || newRewDesc?.includes("gems")) {
//   rewImg = baseURL + "/streamkar/rewards/gems.png";
// } else if (
//   newRewDesc?.includes("BraveHeart") ||
//   newRewDesc?.includes("braveheart") ||
//   newRewDesc?.includes("Brave Heart Frame")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/braveHeart.png";
// } else if (
//   newRewDesc?.includes("Ignite Profile Frame") ||
//   newRewDesc?.includes("Ignite")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/igniteFrame.png";
// } else if (newRewDesc?.includes("Superstar") || newRewDesc?.includes("Superstar")) {
//   rewImg = baseURL + "/streamkar/rewards/superstarProfileFrame.png";
// } else if (newRewDesc?.includes("SVIP") ) {
//   rewImg = baseURL + "/streamkar/rewards/svip.png";
// } else if (
//   newRewDesc?.includes("Bentley")  ||
//   newRewDesc?.includes("bentley")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bentley.png";
// } else if (
//   newRewDesc?.includes("F22")  ||
//   newRewDesc?.includes("f22")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/f22.png";
// } else if (
//   newRewDesc?.includes("Lantern")  ||
//   newRewDesc?.includes("lantern")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/Lantern.png";
// } else if (
//   newRewDesc?.includes("Bomber")  ||
//   newRewDesc?.includes("bomber")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bomber.png";
// }else if (
//   newRewDesc?.includes("Batman")  ||
//   newRewDesc?.includes("batman")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/batmobile.png";
// }  else if (
//   newRewDesc?.includes("VIP entrance")  ||
//   newRewDesc?.includes("VIP Entrance")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/vipcar.png";
// } else if (
//   newRewDesc?.includes("VIP")  ||
//   newRewDesc?.includes("Vip")  ||
//   newRewDesc?.includes("vip")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/vip.png";
// } else if (
//   newRewDesc?.includes("Solar")  ||
//   newRewDesc?.includes("solar")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/solar.png";
// } else if (
//   newRewDesc?.includes("Bugatti")  ||
//   newRewDesc?.includes("bugatti")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bugati.png";
// } else if (
//   newRewDesc?.includes("Hawk Entrance")  ||
//   newRewDesc?.includes("hawk")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/hawk.png";
// } else if (
//   newRewDesc?.includes("Motorcycle")  ||
//   newRewDesc?.includes("motorcycle")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/motorcycle.png";
// } else if (
//   newRewDesc?.includes("Bumblebee Entrance")  ||
//   newRewDesc?.includes("bumblebee")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bumblebee.png";
// } else if (
//   newRewDesc?.includes("Phantom Entrance")  ||
//   newRewDesc?.includes("phantom")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/phantom.png";
// } else if (
//   newRewDesc?.includes("Rider")  ||
//   newRewDesc?.includes("rider")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/rider.png";
// } else if (
//   newRewDesc?.includes("Tiger")  ||
//   newRewDesc?.includes("tiger")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/tiger.png";
// } else if (
//   newRewDesc?.includes("Bumblebee")  ||
//   newRewDesc?.includes("bumblebee")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/bumblebee.png";
// } else if (
//   newRewDesc?.includes("Miss You")  ||
//   newRewDesc?.includes("Miss you")  ||
//   newRewDesc?.includes("MISS")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/missYou.png";
// } else if (
//   newRewDesc?.includes("Star")  ||
//   newRewDesc?.includes("star")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/Star.png";
// } else if (
//   newRewDesc?.includes("Telescope")  ||
//   newRewDesc?.includes("telescope")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/telescope.png";
// } else if (
//   newRewDesc?.includes("Hummer")  ||
//   newRewDesc?.includes("hummer")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/hummer.png";
// } else if (
//   newRewDesc?.includes("Kingpin")  ||
//   newRewDesc?.includes("kingpin")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/kingspin.png";
// } else if (
//   newRewDesc?.includes("Dragon")  ||
//   newRewDesc?.includes("dragon")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/dragon.png";
// } else if (
//   newRewDesc?.includes("Rusty")  ||
//   newRewDesc?.includes("rusty")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/rustyRanger.png";
// } else if (
//   newRewDesc?.includes("Lion")  ||
//   newRewDesc?.includes("lion")
// ) {
//   rewImg = baseURL + "/streamkar/rewards/lion.png";
// }
