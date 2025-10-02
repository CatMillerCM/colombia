import PropTypes from 'prop-types';
import styles from './numbers.module.css';

const Numbers = ({ numbers }) => (
  <ul className={styles.numbers}>
    {numbers.map((number) => (
      <li key={number}>{number}</li>
    ))}
  </ul>
);

Numbers.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Numbers;
