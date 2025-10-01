import PropTypes from 'prop-types';
import Button from '@/components/atoms/button';

const RevealButton = ({
  numbers, setNumbers, distributions, step
}) => {
  const handleClick = () => {
    setNumbers(distributions.playerPots[step - 1]);
  };

  return (
    <Button
      onClick={handleClick}
      label={`Reveal player ${step}'s numbers`}
      disabled={numbers.length > 0}
    />
  );
};

RevealButton.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  setNumbers: PropTypes.func.isRequired,
  distributions: PropTypes.shape({
    playerPots: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.number)
    ).isRequired,
    discarded: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  step: PropTypes.number.isRequired
};

export default RevealButton;
