import TransactionItem from './TransactionItem';
import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
    <table className={styles.transactionHistory}> 
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                <TransactionItem type={type} amount={amount} currency={currency} />
                </tr>
            ))}
        </tbody>
    </table>
    );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;