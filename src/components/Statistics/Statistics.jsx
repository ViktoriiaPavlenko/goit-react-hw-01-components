import StatisticsItem from './StatisticsItem';
import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

const Statistics = ({ title, stats }) => {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}
            <ul className={styles.list}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                    className={styles.item}
                    key={id} 
                    style={{
                    backgroundColor: randomColor(),
                  }}>
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