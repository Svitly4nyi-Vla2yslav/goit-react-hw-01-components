
// import { FriendListItem } from "./FriendList/FriendListItem";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { StatisticsTitle } from "./StatisticsTitle/StatisticsTitle";
import { Description } from "./Profile-Description/Description";
import user from "./user.json";
import data from "./data.json";
import friends from "./friends";
export const App = () => {
  return (
    <div>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatisticsTitle title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      {/* <FriendListItem /> */}
    </div>
  );
};
