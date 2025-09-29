import { fireEvent, render, screen } from '@testing-library/react';
import distributeNumbers from '@/utils/distribute-numbers';
import DistributeButton from '..';

jest.mock('@/utils/distribute-numbers');

describe('DistributeButton', () => {
  const setDistributionsMock = jest.fn();
  const setStepMock = jest.fn();

  const renderAndClickButton = (playerCount, useRemainder) => {
    render(<DistributeButton
      playerCount={playerCount}
      useRemainder={useRemainder}
      setDistributions={setDistributionsMock}
      setStep={setStepMock}
    />);

    const button = screen.getByRole('button', { name: /distribute ball numbers/i });
    fireEvent.click(button);
  };

  describe('when clicked and useRemainder is true', () => {
    const distributionsMockWithoutDiscarded = { playerPots: [[1, 2], [3, 4], [5]], discarded: [] };

    beforeEach(() => {
      distributeNumbers.mockReturnValue(distributionsMockWithoutDiscarded);
      renderAndClickButton(3, true);
    });

    it('should call distributeNumbers util with playerCount and useRemainder as true', () => {
		  expect(distributeNumbers).toHaveBeenCalledWith(3, true);
    });

    it('should call setDistributions with result', () => {
		  expect(setDistributionsMock).toHaveBeenCalledWith(distributionsMockWithoutDiscarded);
    });

    it('should call setStep with 1', () => {
      expect(setStepMock).toHaveBeenCalledWith(1);
    });
  });

  describe('when clicked and useRemainder is false', () => {
    const distributionsMockWithDiscarded = { playerPots: [[1, 2], [3, 4]], discarded: [5] };

    beforeEach(() => {
      distributeNumbers.mockReturnValue(distributionsMockWithDiscarded);
      renderAndClickButton(2, false);
    });

    it('should call distributeNumbers util with playerCount and useRemainder as false', () => {
		  expect(distributeNumbers).toHaveBeenCalledWith(2, false);
    });

    it('should call setDistributions with result', () => {
		  expect(setDistributionsMock).toHaveBeenCalledWith(distributionsMockWithDiscarded);
    });

    it('should call setStep with "discarded"', () => {
      expect(setStepMock).toHaveBeenCalledWith('discarded');
    });
  });
});
