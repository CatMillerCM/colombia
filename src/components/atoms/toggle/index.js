'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './toggle.module.css';

const Toggle = ({ onChange, leftLabel, rightLabel }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    onChange(e.target.checked);
  };

  return (
    <div className={styles.toggleRow}>
      <span className={checked ? styles.toggleLabelActive : styles.toggleLabel}>{leftLabel}</span>
      <label className={styles.toggleSwitch}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={styles.toggleInput}
        />
        <span
          className={
            checked
              ? `${styles.toggleSlider} ${styles.toggleSliderChecked}`
              : styles.toggleSlider
          }
        >
          <span
            className={
              checked
                ? `${styles.toggleKnob} ${styles.toggleKnobChecked}`
                : styles.toggleKnob
            }
          />
        </span>
      </label>
      <span className={!checked ? styles.toggleLabelActive : styles.toggleLabel}>{rightLabel}</span>
    </div>
  );
};

Toggle.propTypes = {
  onChange: PropTypes.func.isRequired,
  leftLabel: PropTypes.string.isRequired,
  rightLabel: PropTypes.string.isRequired
};

export default Toggle;
