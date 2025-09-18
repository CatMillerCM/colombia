const checkIfRemainder = ({ playerCount, ballNumbers }) => {
  return ballNumbers.length % playerCount !== 0;
}

export default checkIfRemainder;
