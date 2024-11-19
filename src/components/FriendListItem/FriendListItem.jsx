import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
          <div className={s.friendListItem}>
      <img
        src={avatar}
        alt="Avatar"
        width="48"
        className={s.avatar}
      />
      <p className={s.name}>{name}</p>
      <p
        className={`${s.status} ${
          isOnline ? s.online : s.offline
        }`}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
    );
};

export default FriendListItem;