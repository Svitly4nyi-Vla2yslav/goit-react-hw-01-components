import { Description } from "./Profile-Description/Description";
import user from "./user.json";

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
      
    </div>
  );
};