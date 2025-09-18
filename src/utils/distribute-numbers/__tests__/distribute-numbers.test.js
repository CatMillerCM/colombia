import distributeNumbers from '../index';

describe('distributeNumbers', () => {
	const ballNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

  describe('when ball numbers are divisible by player count', () => {
    const playerCount = 3;
    let distributions;
    let discarded;

    beforeEach(() => {
      ({distributions, discarded} = distributeNumbers({ playerCount, ballNumbers}));
    });

    it('should distribute all of the ball numbers equally and randomly', () => {
      expect(distributions.length).toBe(3);
      expect(distributions.every(arr => arr.length === 5)).toBe(true);
      expect(distributions.flat().sort((a, b) => a - b)).toEqual(ballNumbers);
    });

    it('should return an empty array for discarded', () => {
      expect(discarded.length).toBe(0);
    });
  });
});
