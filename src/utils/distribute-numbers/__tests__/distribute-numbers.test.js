import distributeNumbers from '..';

describe('distributeNumbers', () => {
  const ballNumbers = Array.from({ length: 15 }, (_, i) => i + 1);

  describe('when ball numbers are divisible by player count', () => {
    const playerCount = 3;
    let playerPots;
    let discarded;

    beforeEach(() => {
      ({ playerPots, discarded } = distributeNumbers(playerCount));
    });

    it('should distribute all of the ball numbers equally and randomly to player pots', () => {
      const playerPotLengths = playerPots.map((arr) => arr.length).sort();

      expect(playerPotLengths).toEqual([5, 5, 5]);
      expect(playerPots.flat().sort((a, b) => a - b)).toEqual(ballNumbers);
    });

    it('should return an empty array for discarded', () => {
      expect(discarded.length).toBe(0);
    });
  });

  describe('when ball numbers are NOT divisible by player count', () => {
    const playerCount = 4;

    describe('and useRemainder is true', () => {
      let playerPots;
      let discarded;

      beforeEach(() => {
        ({ playerPots, discarded } = distributeNumbers(playerCount, true));
      });

      it('should distribute all of the ball numbers randomly to player pots with remainder included', () => {
        const playerPotLengths = playerPots.map((arr) => arr.length).sort();

        expect(playerPotLengths).toEqual([3, 4, 4, 4]);
        expect(playerPots.flat().sort((a, b) => a - b)).toEqual(ballNumbers);
      });

      it('should return an empty array for discarded', () => {
        expect(discarded.length).toBe(0);
      });
    });

    describe('and useRemainder is false', () => {
      let playerPots;
      let discarded;

      beforeEach(() => {
        ({ playerPots, discarded } = distributeNumbers(playerCount, false));
      });

      it('should distribute an equal number of balls to each player pot randomly', () => {
        const playerPotLengths = playerPots.map((arr) => arr.length).sort();

        expect(playerPotLengths).toEqual([3, 3, 3, 3]);
      });

      it('should return an array of discarded ball numbers equal to the remainder', () => {
        const remainder = ballNumbers.length % playerCount;

        expect(discarded.length).toBe(remainder);
      });

      it('should distribute all ball numbers into player pots and discarded', () => {
        const distributions = playerPots.flat().concat(discarded).sort((a, b) => a - b);

        expect(distributions).toEqual(ballNumbers);
      });
    });
  });
});
