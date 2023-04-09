import PropTypes from 'prop-types';
import profile from './Profile.module.css';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  statsfollowers,
  statsviews,
  statslikes,
}) {
  return (
    <div className={profile.profile}>
      <div className={profile.description}>
        <img src={avatar} alt="User avatar" className={profile.avatar} />
        <p className={profile.name}>{username}</p>
        <p className={profile.tag}>{tag}</p>
        <p className={profile.location}>{location}</p>
      </div>

      <ul className={profile.stats}>
        <li className={profile.item}>
          <span className={profile.label}>Followers</span>
          <span className={profile.quantity}>{statsfollowers}</span>
        </li>
        <li className={profile.item}>
          <span className={profile.label}>Views</span>
          <span className={profile.quantity}>{statsviews}</span>
        </li>
        <li className={profile.item}>
          <span className={profile.label}>Likes</span>
          <span className={profile.quantity}>{statslikes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  statsfollowers: PropTypes.number.isRequired,
  statsviews: PropTypes.number.isRequired,
  statslikes: PropTypes.number.isRequired,
};
