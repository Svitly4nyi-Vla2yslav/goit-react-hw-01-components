
import css from "./FriendList.module.css"
export const FriendList = ({friends}) => {
    return <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <li key={id} className={css.item}>
                <span className={css.status}>{isOnline}</span>
                <img className={css.avatar} src={avatar} alt={name} width="48" />
                <p className={css.name}>{name}</p>
            </li>
        ))}
    </ul>
}

