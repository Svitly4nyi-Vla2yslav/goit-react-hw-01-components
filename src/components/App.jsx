
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { FriendList } from "./FriendList/FriendList";
import { Statistics } from "./Statistics/Statistics";
import { Description } from "./Profile-Description/Description";
import transactions from "./transactions.json";
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
      <Statistics stats={data} title="Upload stats"  />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
