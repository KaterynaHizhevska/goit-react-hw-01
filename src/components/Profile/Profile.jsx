import s from "./Profile.module.css"; 

const Profile = ({ image, name, tag, location, stats }) => {
    return (
        <div className={s.profile}>
            <div>
                <img className={s.avatar} src={image} alt="User avatar" />
                <p className={s.name}>{name}</p>
                <p className={s.tag}>@{tag}</p>
                <p className={s.location}>{location}</p>
            </div>
            <ul className={s.stats}>
                <li className={s.container}>
                    <span>Followers</span>
                    <span>{stats.followers}</span>
                </li>
                <li >
                    <span>Views</span>
                    <span>{stats.views}</span>
                </li>
                <li>
                    <span>Likes</span>
                    <span>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

export default Profile;