
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
};

const distributeNumbers = ({ playerCount, ballNumbers, useRemainder }) => {
	const shuffledBallNumbers = [...ballNumbers];
  shuffleArray(shuffledBallNumbers);

	const distributions = Array.from({ length: playerCount }, () => []);
	const ballsPerPlayer = Math.floor(shuffledBallNumbers.length / playerCount);
	const remainder = shuffledBallNumbers.length % playerCount;
  let discarded = [];

  let index = 0;
  for (let p = 0; p < playerCount; p++) {
    distributions[p] = shuffledBallNumbers.slice(index, index + ballsPerPlayer);
    index += ballsPerPlayer;
  }
  
  if (useRemainder) {
    for (let r = 0; r < remainder; r++) {
      distributions[r].push(shuffledBallNumbers[index++]);
    }
  } else {
    discarded = shuffledBallNumbers.slice(index);
  }

  return { distributions, discarded };
};

export default distributeNumbers;
