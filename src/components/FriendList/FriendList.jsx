import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friendList}>
            {friends.map(({ id, isOnline, avatar, name }) => (
                <li
                className={styles.item}
                key={id}>
                <FriendListItem isOnline={isOnline} avatar={avatar} name={name} />
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

export default FriendList;