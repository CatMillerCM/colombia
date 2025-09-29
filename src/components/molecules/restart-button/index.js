import PropTypes from 'prop-types';
import Button from '@/components/atoms/button';

const RestartButton = ({ setStep }) => {
  const handleClick = () => {
    setStep('entry');
  };

  return (
    <Button
      onClick={handleClick}
      label="Restart"
    />
  );
};

RestartButton.propTypes = {
  setStep: PropTypes.func.isRequired
};

export default RestartButton;
