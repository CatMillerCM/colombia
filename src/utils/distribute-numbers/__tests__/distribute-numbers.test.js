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
      const distributionLengths = distributions.map(arr => arr.length).sort();

      expect(distributionLengths).toEqual([5, 5, 5 ]);
      expect(distributions.flat().sort((a, b) => a - b)).toEqual(ballNumbers);
    });

    it('should return an empty array for discarded', () => {
      expect(discarded.length).toBe(0);
    });
  });

  describe('when ball numbers are NOT divisible by player count', () => {
    const playerCount = 4;

    describe('and useRemainder is true', () => {
      let distributions;
      let discarded;

      beforeEach(() => {
        ({distributions, discarded} = distributeNumbers({ playerCount, ballNumbers, useRemainder: true }));
      });

      it('should distribute all of the ball numbers randomly with remainder included', () => {
        const distributionLengths = distributions.map(arr => arr.length).sort();

        expect(distributionLengths).toEqual([3, 4, 4, 4]);
        expect(distributions.flat().sort((a, b) => a - b)).toEqual(ballNumbers);
      });

      it('should return an empty array for discarded', () => {
        expect(discarded.length).toBe(0);
      });
    });

    describe('and useRemainder is false', () => {
      let distributions;
      let discarded;

      beforeEach(() => {
        ({distributions, discarded} = distributeNumbers({ playerCount, ballNumbers, useRemainder: false }));
      });

      it('should distribute an equal number of balls to each player randomly', () => {
        const distributionLengths = distributions.map(arr => arr.length).sort();

        expect(distributionLengths).toEqual([3, 3, 3, 3]);
      });

      it('should return an array of discarded ball numbers equal to the remainder', () => {
        const remainder = ballNumbers.length % playerCount;

        expect(discarded.length).toBe(remainder);
      });

      it('should distribute all ball numbers into distributions and discarded', () => {
        const allDistributed = distributions.flat().concat(discarded).sort((a, b) => a - b);

        expect(allDistributed).toEqual(ballNumbers);
      });
    });
  });
});
