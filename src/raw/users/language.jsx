export const langData = [
  {
    key: "English",
    guide: [
      {
        section: "Intro",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.5vw] text-white">
            <li>When you send event gifts, you will get Spooky Points</li>
            <li>1 bean of event gift sent = 1 Spooky Points</li>
            <li>With these points, you will be able to play this event.</li>
          </ul>
        ),
      },
      {
        section: "Haunted House",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
            <li>In this part of the event, you can enter a haunted house and explore it to find hidden items, treat points, and get rewards.</li>
            <li>1 bean of event gift sent = 1 Spooky point.</li>
            <li>A Haunted House with 7 locked doors is displayed on the webpage.</li>
            <li>
              Behind each door, there is a unique Halloween-themed item: a pumpkin, candy, witch’s hat, ghost lantern, bloody mask, skeleton hand, and
              magic potion.
            </li>
            <li>There is an “open” button below the haunted house on the webpage.</li>
            <li>1-time successful tap on “open” button = 30K Spooky points.</li>
            <li>
              When you tap on the “open” button, 30K Spooky points will be deducted, any random door will be opened, you will get any 1 hidden item
              and random treat points and also get a reward.
            </li>
            <li>A text input box will be displayed along the “open” button with a default value “1” and a maximum value “999”.</li>
            <li>Below the Haunted House, a large haunted chest is displayed on the webpage.</li>
            <li>You can collect these items and place them into the haunted chest.</li>
            <li>You must collect any 50 items to fill the haunted chest.</li>
            <li>When the haunted chest is full, you will get a Bonus Grand Reward of 5000 Beans.</li>
            <li>When the haunted chest is filled, e.g. (50/50), you will receive a bonus grand reward, and the counter will reset to 0.</li>
            <li>There is a “Collect Reward” button below the haunted chest.</li>
            <li>When the chest is full, you can tap on the “Collect Reward” button to open the chest and collect a bonus grand reward.</li>
            <li>“My Daily Treat Points” counter is displayed on the webpage.</li>
            <li>
              Each time you get treat points by tapping on “Open” button successfully, the treat points value will be added to “My Daily Treat Points”
              counter accordingly.
            </li>
            <li>“My Daily Treat Points” counter will reset daily at 00:00:00 GMT.</li>
            <li>
              Top 3 users with the highest number of “My Daily Treat Points” will be displayed on the leaderboard accordingly & will win Special
              Rewards daily.
            </li>
          </ul>
        ),
      },
      {
        section: "Trick or Treat",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
            <li>In this part of the event, you will be able to complete daily tasks to win rewards.</li>
            <li>A total of 7 different tasks are displayed on the webpage.</li>
            <li>A “GO” button is displayed alongside each task, when you tap on the“GO” button you will be directed towards the task accordingly.</li>
            <li>Each time you complete a task you will get a reward and a free backpack gift (Candy Treat)</li>
            <li>Completing different tasks gives different numbers of Candy Treat Gift.</li>
            <li>When you complete all the tasks, you will get bonus reward of 2 candy treat gifts.</li>
            <li>You can earn Candy Treat by completing tasks, you can also get candy treat by sending Haunted Hero event gift.</li>
            <li>1 Haunted Hero event gift sent =50K Spooky points + 3 Candy Treat received.</li>
            <li>You can send this Candy Treat to other users/talents in live room.</li>
            <li>2 counters are displayed on the webpage. i-e "My Daily Candy Treat Sent" Counter & "My Daily Candy Treat Received" Counter.</li>
            <li>
              When you sent a free backpack gift (Candy Treat) to other user/talent in live room, value 1 will be added to "My Daily Candy Treat Sent"
              Counter.
            </li>
            <li>
              When you receive a free backpack gift (Candy Treat) from the other user in live room, value 1 will be added to "My Daily Candy Treat
              Received" Counter.
            </li>
            <li>
              Top 3 users with the highest number of “Daily Candy Treat Sent” will be displayed on the leaderboards accordingly & will win beans pot
              rewards daily.
            </li>
            <li>
              Top 3 users with the highest number of “Daily Candy Treat received” will be displayed on the leaderboards accordingly & will win Gems
              pot rewards daily.
            </li>
            <li>Beans pot and Gems pot Collection timings will be 00:00:00 GMT to 23:59:59 GMT.</li>
            <li>Beans pot and Gems pot will be refreshed at 00:00:00 GMT.</li>
            <li>
              Beans Pot: 0.8% of spending will be collected in the BEANS POT and collected Beans will be distributed among the top 3 Rankers of the
              leaderboard, each day.
            </li>
            <li>
              Gems Pot: 0.2%of receiving will be collected in the GEMS POT and collected Gems will be distributed among the top 3 Rankers of the
              leaderboard, each day.
            </li>
          </ul>
        ),
      },
      {
        section: "Talents Treats",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
            <li>This part of the event is for talents only.</li>
            <li>By receiving event gifts, you will get Talent Points.</li>
            <li>1 Gem of event gift received = 1 Talent Point.</li>
            <li>In this part of the event, you can knock on the door for treats and receive rewards.</li>
            <li>1-time successful tap on “Treat” button = 30K Talent Points.</li>
            <li>When you tap on the “Treat” button successfully, talent points will be deducted and you will get a reward.</li>
            <li>When you reach the last house, the game will reset & you will be able to play again from starting point.</li>
          </ul>
        ),
      },
      {
        section: "Event Gifting (Overall)",
        content: [
          {
            for: "users",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>In the total ranking, the top 3 users will be rewarded.</li>
                <li>Rewards will be sent after 7 working days of the event end date.</li>
              </ul>
            ),
          },
          {
            for: "talents",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>In the total ranking, the top 3 talents will be rewarded.</li>
                <li>Rewards will be sent after 7 working days of the event end date.</li>
              </ul>
            ),
          },
        ],
      },
      {
        section: "Daily",
        content: [
          {
            for: "users",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>In the daily ranking, the top 3 users will be rewarded.</li>
                <li>
                  0.4% of event gifts sending will be collected in the Beans POT and collected beans will be distributed among the top 3 Rankers of
                  the leaderboard daily.
                </li>
              </ul>
            ),
          },
          {
            for: "talents",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>In the daily ranking, the top 10 talents will be rewarded.</li>
                <li>
                  0.2% of event gifts receiving will be collected in the GEMS POT and collected gems will be distributed among the top 5 Rankers of
                  the leaderboard, each day.
                </li>
                <li>Top 10 talent will get resources rewards each day.</li>
              </ul>
            ),
          },
        ],
      },
    ],
  },
  {
    key: "Urdu/Hindi",
    guide: [
      {
        section: "Intro",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.5vw] text-white">
            <li>Jab aap event gifts bhejen gy, toh aap haasil karen gy Spooky Points</li>
            <li>1 bean of event gift sent = 1 Spooky Points</li>
            <li>In points k sath, aap yeh event khel sakein gy.</li>
          </ul>
        ),
      },
      {
        section: "Haunted House",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
            <li>
              Event k is hissay mein, aap haunted house mein enter hongy aur explore karen gy hidden items, treat points aur rewards hasil karen gy.
            </li>
            <li>1 bean of event gift sent = 1 Spooky Point.</li>
            <li>Webpage par ek Haunted House hai jismein 7 locked doors hain.</li>
            <li>
              Har door ke peeche ek unique Halloween-themed item hai: pumpkin, candy, witch’s hat, ghost lantern, bloody mask, skeleton hand, aur
              magic potion.
            </li>
            <li>Webpage par Haunted House k neeche ek “Open” button hai.</li>
            <li>1 martaba “Open” button par successful tap = 30K Spooky Points.</li>
            <li>
              Jab aap “Open” button par tap karengy, 30K Spooky Points deduct hongay, koi bhi random door open hoga, aapko ek hidden item, random
              treat points aur reward milega.
            </li>
            <li>“Open” button ke saath ek text input box hoga jiska default value “1” aur maximum value “999” hai.</li>
            <li>Haunted House k neeche ek bara haunted chest hai webpage par.</li>
            <li>Ye cheezein aap jama karke haunted chest mein rakhengy.</li>
            <li>Aap ko haunted chest ko fill krne k liye koi bhi 50 cheezein jama karni hongi.</li>
            <li>Jab haunted chest full ho jaye gi toh aapko 5000 Beans ka Bonus Grand Reward milega.</li>
            <li>Jab haunted chest fill ho jaye gi, e.g. (50/50), aapko bonus grand reward milega aur counter reset ho kar 0 ho jaye ga.</li>
            <li>Haunted chest k neeche ek “Collect Reward” button hai.</li>
            <li>
              Jab chest full ho jaye gi to aap “Collect Reward” button par tap karke chest open kar saktay hain aur bonus grand reward collect kar
              saktay hain.
            </li>
            <li>Webpage par “My Daily Treat Points” counter hai.</li>
            <li>
              Jab bhi aap successful “Open” button tap karke treat points hasil karein gy, woh “My Daily Treat Points” counter mein add ho jayen gy.
            </li>
            <li>“My Daily Treat Points” counter rozana 00:00:00 GMT par reset hoga.</li>
            <li>
              Top 3 users jin k sab se zyada “My Daily Treat Points” honge unka naam leaderboard par display hoga aur woh daily Special Rewards
              jeetain gy.
            </li>
          </ul>
        ),
      },
      {
        section: "Trick or Treat",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
            <li>Event k is hissay mein aap daily tasks complete karke rewards jeet saktay hain.</li>
            <li>Webpage par total 7 different tasks hain.</li>
            <li>Har task k saath ek “GO” button hai, jaisay hi aap “GO” button tap karain gy, aapko us task ki taraf direct kar diya jaye ga.</li>
            <li>Har task complete karne par aapko ek reward milega aur ek free backpack gift (Candy Treat) bhi milega.</li>
            <li>Different task complete karne par different number k Candy Treat Gifts milain gy.</li>
            <li>Saray tasks complete karne par aapko 2 Candy Treat Gifts ka bonus reward milega.</li>
            <li>
              Candy Treat earn karne k liye tasks complete karna zaroori hai, aur aap Haunted Hero event gift send karke bhi Candy Treat hasil kar
              saktay hain.
            </li>
            <li>1 Haunted Hero event gift send karne par 50K Spooky Points + 3 Candy Treat milain gy.</li>
            <li>Ye Candy Treat aap live room mein dusray users/talents ko bhej saktay hain.</li>
            <li>Webpage par 2 counters hain: "My Daily Candy Treat Sent" Counter aur "My Daily Candy Treat Received" Counter.</li>
            <li>
              Jab aap free backpack gift (Candy Treat) kisi user/talent ko live room mein send karain gy to “My Daily Candy Treat Sent” Counter mein 1
              add hoga.
            </li>
            <li>
              Jab aap kisi user/talent se live room mein Candy Treat receive karain gy to “My Daily Candy Treat Received” Counter mein 1 add hoga.
            </li>
            <li>
              Top 3 users jin k sab se zyada “Daily Candy Treat Sent” hon gy, woh leaderboard par show hongay aur unhein daily Beans Pot Rewards
              milain gy.
            </li>
            <li>
              Top 3 users jin k sab se zyada “Daily Candy Treat Received” hon gy, woh leaderboard par show hongay aur unhein daily Gems Pot Rewards
              milain gy.
            </li>
            <li>Beans Pot aur Gems Pot collection timings 00:00:00 GMT se 23:59:59 GMT tak hongi.</li>
            <li>Beans Pot aur Gems Pot rozana 00:00:00 GMT par refresh hongy.</li>
            <li>
              Beans Pot: Spending ka 0.8% Beans Pot mein add hoga aur ye collect hue Beans rozana leaderboard k Top 3 Rankers mein distribute hon gy.
            </li>
            <li>
              Gems Pot: Receiving ka 0.2% Gems Pot mein add hoga aur ye collect hue Gems rozana leaderboard k Top 3 Rankers mein distribute hon gy.
            </li>
          </ul>
        ),
      },
      {
        section: "Talents Treats",
        content: (
          <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
            <li>Event ka yeh hissa sirf talents k liye hai.</li>
            <li>Event gifts receive karne sy apko talent points milein gy.</li>
            <li>1 Gem of event gift received = 1 Talent Point.</li>
            <li>Event k is hissay mein, aap treats k liye darwazay par dastak dengy aur rewards haasil karengy.</li>
            <li>“Treat" button par aik bar successful tap = 30K Talent Points.</li>
            <li>Jab aap "Treat" button par kamiyabi sy tap karen gy, toh talent points kaat jayen gy aur aapko reward miley ga.</li>
            <li>Jab aap aakhri ghar tak pohanch jayengy, toh game reset ho jayegi aur aap dubara shuru sy khel saken gy.</li>
          </ul>
        ),
      },
      {
        section: "Event Gifting (Overall)",
        content: [
          {
            for: "users",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>Total ranking mein, top 3 users ko rewards milein gy.</li>
                <li>Rewards event khatam honay k 7 din baad tak send kiye jayen gy.</li>
              </ul>
            ),
          },
          {
            for: "talents",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>Total ranking mein, top 3 talents ko rewards milein gy.</li>
                <li>Rewards event khatam honay k 7 din baad tak send kiye jayen gy.</li>
              </ul>
            ),
          },
        ],
      },
      {
        section: "Daily",
        content: [
          {
            for: "users",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>Daily ranking mein, top 3 users ko rewards milein gy.</li>
                <li>
                  Event gifts par kharch hone wale beans ka 0.4% beans pot mein collect hoga aur collect kiye gaye beans ko leaderboard k top 3
                  rankers k beech event k end mein distribute kiya jaye ga.
                </li>
              </ul>
            ),
          },
          {
            for: "talents",
            details: (
              <ul className="list-disc pl-[2.5vw] text-[2.8vw] text-white">
                <li>Daily ranking mein top 10 talents ko rewards milein gy.</li>
                <li>Event gifts receiving ka 0.2% GEMS POT mein jama hoga aur yeh har din leaderboard k top 5 rankers mein taqseem kiya jayega.</li>
                <li>Top 10 talents ko daily resource rewards bhi milengy.</li>
              </ul>
            ),
          },
        ],
      },
    ],
  },
];
