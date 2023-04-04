import FriendItem from 'components/friendList/FriendListItem';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul  className={css.list}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  )
}

FriendList.propTypes = {
    friends : PropTypes.arrayOf(PropTypes.shape({
      id : PropTypes.number.isRequired,
    }),),
  }
