import PropTypes from 'prop-types';
import styles from './button.module.css';

const Button = ({ onClick, label, disabled = false }) => (
  <button
    className={styles.button}
    type="button"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default Button;
