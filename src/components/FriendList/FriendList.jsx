
import PropTypes from 'prop-types'
import { FriendListItem } from "./FriendListItem"
import css from "./FriendList.module.css"
export const FriendList = ({ friends }) => {
    return <ul className={css.friendList}>
        {friends.map(({ id, avatar, name, isOnline }) => (
            <FriendListItem
                key={id}
                id={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
    </ul>
}

FriendList.propType = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            key: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        })
    ).isRequired
}