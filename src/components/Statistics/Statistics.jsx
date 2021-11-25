import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.list}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                    className={styles.item}
                    key={id}>
                    <StatisticsItem label={label} percentage={percentage} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default Statistics;