import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export default function FriendItem ({ avatar, name, isOnline}) {
  return (
    <li className={css.item}>
      <span className={clsx (css.status, !isOnline && css.isOnlined)}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li> 
  );
}

FriendItem.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,

  }
