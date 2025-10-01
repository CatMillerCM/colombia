import PropTypes from 'prop-types';

const Numbers = ({ numbers }) => (
  <ul>
    {numbers.map((number) => (
      <li key={number}>{number}</li>
    ))}
  </ul>
);

Numbers.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default Numbers;
