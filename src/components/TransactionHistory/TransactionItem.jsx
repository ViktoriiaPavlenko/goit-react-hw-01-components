// import styles from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionItem = ({ type, amount, currency }) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default TransactionItem;