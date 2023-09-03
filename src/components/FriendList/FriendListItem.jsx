
import css from './FriendList.module.css'
import PropTypes from 'prop-types'
export const FriendListItem = ({ id, avatar, name, isOnline }) => {
    return <li key={id} className={css.item}>
        <span className={`${css.status} ${isOnline ? css.true : css.false}`}></span>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.name}>{name }</p>
    </li>
}

FriendListItem.propTypes = {
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}