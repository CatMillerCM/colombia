import { render, waitFor } from '@testing-library/react';
import Numbers from '@/components/atoms/numbers';
import RestartButton from '@/components/molecules/restart-button';
import NextPlayerButton from '@/components/molecules/next-player-button';
import RevealButton from '@/components/molecules/reveal-button';
import RevealCard from '..';

jest.mock('@/components/atoms/numbers');
jest.mock('@/components/molecules/restart-button');
jest.mock('@/components/molecules/next-player-button');
jest.mock('@/components/molecules/reveal-button');

describe('RevealCard', () => {
  const setStepMock = jest.fn();
  const setNumbersMock = jest.fn();
  const distributions = { playerPots: [[1, 2], [3, 4]], discarded: [5] };
  const step = 2;

  const renderRevealCard = (playerCount) => {
    render(
      <RevealCard
        distributions={distributions}
        setStep={setStepMock}
        step={step}
        playerCount={playerCount}
      />
    );
  };

  beforeEach(() => {
    Numbers.mockReturnValue(<div />);
    RestartButton.mockReturnValue(<div />);
    NextPlayerButton.mockReturnValue(<div />);
    RevealButton.mockImplementation(jest.fn(({ setNumbers }) => {
      setNumbersMock.mockImplementation(setNumbers);
      return <div />;
    }));

    const playerCount = 4;
    renderRevealCard(playerCount);
  });

  describe('when the numbers array is empty', () => {
    it('should NOT render the Numbers, RestartButton or NextPlayerButton components', () => {
      expect(Numbers).not.toHaveBeenCalled();
      expect(RestartButton).not.toHaveBeenCalled();
      expect(NextPlayerButton).not.toHaveBeenCalled();
    });
  });

  describe('when the numbers array contains numbers', () => {
    beforeEach(async () => {
      await waitFor(() => setNumbersMock([1, 2]));
    });

    it('should render the Numbers component', async () => {
      expect(Numbers).toHaveBeenCalled();
    });

    describe('and the step count is less than the player count', () => {
      it('should render the NextPlayerButton component', () => {
        expect(NextPlayerButton).toHaveBeenCalled();
      });
    });

    describe('and the step number is equal to the player count', () => {
      beforeEach(async () => {
        const playerCount = 2;
        renderRevealCard(playerCount);

        await waitFor(() => setNumbersMock([1, 2]));
      });

      it('should render the RestartButton component', () => {
        expect(RestartButton).toHaveBeenCalled();
      });
    });
  });
});
