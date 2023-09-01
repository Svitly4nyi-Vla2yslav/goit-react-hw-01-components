import css from './description.module.css'
export const Description = ({ username, tag, location, avatar }) => {
    return <div className={css.description}>
        <img
            src={avatar}
            alt="User avatar"
            className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
    </div>;
}