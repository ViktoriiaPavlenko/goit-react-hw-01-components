import styles from './FriendList.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline}></span>
    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={styles.name}>{name}</p>
    </>
);

FriendListItem.propTypes = {
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
    name: PropTypes.string,
};

export default FriendListItem;