import { screen } from '@testing-library/dom'
import { getDaysDOM } from './spec-helper';
import { addDays } from '../js/day-counter';

describe('Day Counter', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2021, 7, 1));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('gets the difference of todays date and web dev start date', () => {
    getDaysDOM();
    const days = screen.getByTestId('number-of-days');
    expect(days).toHaveTextContent('0');
    addDays();
    expect(days).toHaveTextContent('2,036');
  });
});
