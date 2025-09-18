import checkIfRemainder from '../index';

describe('checkIfRemainder', () => {
  const ballCount = 15;

  describe('when ball numbers are divisible by player count', () => {
    const playerCount = 3;

    it('should return false', () => {
      const result = checkIfRemainder(playerCount, ballCount);

      expect(result).toBe(false);
    });
  });

  describe('when ball numbers are NOT divisible by player count', () => {
  const playerCount = 4;

    it('should return true', () => {
      const result = checkIfRemainder(playerCount, ballCount);

      expect(result).toBe(true);
    });
  });
});
