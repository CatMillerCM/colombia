import checkIfRemainder from '../index';

describe('checkIfRemainder', () => {
  const ballNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

  describe('when ball numbers are divisible by player count', () => {
    const playerCount = 3;

    it('should return false', () => {
      const result = checkIfRemainder({ playerCount, ballNumbers });

      expect(result).toBe(false);
    });
  });

  describe('when ball numbers are NOT divisible by player count', () => {
  const playerCount = 4;

    it('should return true', () => {
      const result = checkIfRemainder({ playerCount, ballNumbers });

      expect(result).toBe(true);
    });
  });
});
