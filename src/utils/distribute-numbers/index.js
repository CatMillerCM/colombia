const shuffleArray = (inputArray) => {
  const array = [...inputArray];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
};

const distributeNumbers = (playerCount, useRemainder) => {
  const ballNumbers = Array.from({ length: 15 }, (_, i) => i + 1);
  const shuffledBallNumbers = shuffleArray([...ballNumbers]);

  const playerPots = Array.from({ length: playerCount }, () => []);
  const ballsPerPlayer = Math.floor(shuffledBallNumbers.length / playerCount);
  const remainder = shuffledBallNumbers.length % playerCount;
  let discarded = [];

  let index = 0;
  for (let p = 0; p < playerCount; p++) {
    playerPots[p] = shuffledBallNumbers.slice(index, index + ballsPerPlayer);
    index += ballsPerPlayer;
  }

  if (useRemainder) {
    for (let r = 0; r < remainder; r++) {
      playerPots[r].push(shuffledBallNumbers[index++]);
    }
  } else {
    discarded = shuffledBallNumbers.slice(index);
  }

  return { playerPots, discarded };
};

export default distributeNumbers;
