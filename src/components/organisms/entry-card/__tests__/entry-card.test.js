import { render, waitFor } from '@testing-library/react';
import RemainderWarning from '@/components/molecules/remainder-warning';
import PlayersDropdown from '@/components/molecules/players-dropdown';
import EntryCard from '..';

jest.mock('@/components/molecules/remainder-warning');
jest.mock('@/components/molecules/players-dropdown');

describe('EntryCard', () => {
  const setPlayerCountMock = jest.fn();
  const setDistributionsMock = jest.fn();
  const setStepMock = jest.fn();
  const setHasRemainderMock = jest.fn();

  beforeEach(() => {
    RemainderWarning.mockReturnValue(<div />);
    PlayersDropdown.mockImplementation(jest.fn(({ setHasRemainder }) => {
      setHasRemainderMock.mockImplementation(setHasRemainder);
      return <div />;
    }));

    render(
      <EntryCard
        playerCount={3}
        setPlayerCount={setPlayerCountMock}
        setDistributions={setDistributionsMock}
        setStep={setStepMock}
      />
    );
  });

  describe('when there is no remainder', () => {
    it('should NOT render the remainder warning component', () => {
      expect(RemainderWarning).not.toHaveBeenCalled();
    });
  });

  describe('when there is a remainder', () => {
    it('should render the remainder warning component', async () => {
      await waitFor(() => setHasRemainderMock(true));

      expect(RemainderWarning).toHaveBeenCalled();
    });
  });
});
