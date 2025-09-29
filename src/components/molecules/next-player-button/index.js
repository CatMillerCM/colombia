import PropTypes from 'prop-types';
import Button from '@/components/atoms/button';

const NextPlayerButton = ({ setNumbers, setStep, step }) => {
  const handleClick = () => {
    setNumbers([]);
    setStep(step + 1);
  };

  return (
    <Button
      onClick={handleClick}
      label="Next Player"
    />
  );
};

NextPlayerButton.propTypes = {
  setNumbers: PropTypes.func.isRequired,
  setStep: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired
};

export default NextPlayerButton;
