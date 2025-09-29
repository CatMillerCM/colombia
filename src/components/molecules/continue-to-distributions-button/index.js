import PropTypes from 'prop-types';
import Button from '@/components/atoms/button';

const ContinueToDistributionsButton = ({ setStep }) => {
  const handleClick = () => {
    setStep(1);
  };

  return (
    <Button
      onClick={handleClick}
      label="Continue to player distributions"
    />
  );
};

ContinueToDistributionsButton.propTypes = {
  setStep: PropTypes.func.isRequired
};

export default ContinueToDistributionsButton;
