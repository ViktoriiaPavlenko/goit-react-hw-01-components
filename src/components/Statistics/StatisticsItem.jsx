import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const StatisticsItem = ({ label, percentage }) => (
  <>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </>
);

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatisticsItem;