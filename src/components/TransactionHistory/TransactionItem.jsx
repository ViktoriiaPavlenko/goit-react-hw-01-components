import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => (
  <>
    <td className={styles.tableData}>{type}</td>
    <td className={styles.tableData}>{amount}</td>
    <td className={styles.tableData}>{currency}</td>
  </>
);

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;