import userEvent from '@testing-library/user-event';
import { fireEvent, screen } from '@testing-library/dom'
import { getHeartsDOM } from './spec-helper';
import { handleHealth, handleResetHealth } from '../js/health';

describe('Health', () => {
  let buttonsIncreaseHealth;
  let firstButton;
  let hearts;
  let firstHeart;
  let fourthHeart;
  let lastHeart;
  let tooltip;
  let resetButton;

  beforeEach(() => {
    getHeartsDOM();
    buttonsIncreaseHealth = screen.getAllByText('Increase Health');
    resetButton = screen.getByText('Destroy Health');

    handleHealth(buttonsIncreaseHealth);
    handleResetHealth(resetButton);

    firstButton = buttonsIncreaseHealth[0];
    hearts = screen.getAllByText('a heart');
    firstHeart = hearts[0];
    fourthHeart = hearts[3];
    lastHeart = hearts[4];
    tooltip = screen.getByRole('region');
  });

  describe('increase health', () => {
    it('fills the next empty heart on increase health button click', () => {
      expect(fourthHeart.classList).not.toContain('filled');
      fireEvent.click(firstButton);
      expect(fourthHeart.classList).toContain('filled');
    });
  
    it('fills two different hearts when button is clicked twice', () => {
      expect(fourthHeart.classList).not.toContain('filled');
      expect(lastHeart.classList).not.toContain('filled');
      fireEvent.click(firstButton);
      fireEvent.click(firstButton);
      expect(fourthHeart.classList).toContain('filled');
      expect(lastHeart.classList).toContain('filled');
    });
  
    it('adds a class to the button after it has been clicked', () => {
      expect(firstButton.classList).not.toContain('nom-nom-nom');
      fireEvent.click(firstButton);
      expect(firstButton.classList).toContain('nom-nom-nom');
    });

    it('announces the health increase to screen readers/updates tooltip', () => {
      expect(tooltip).toHaveTextContent('3 of 5 hearts filled');
      fireEvent.click(firstButton);
      expect(tooltip).toHaveTextContent('health increased: 4 of 5 hearts filled');
    });
  });

  describe('reset health', () => {
    it('resets all of the hearts so they are no longer filled', () => {
      expect(firstHeart.classList).toContain('filled-on-load');
      fireEvent.click(resetButton);
      expect(firstHeart.classList).not.toContain('filled-on-load');
      expect(lastHeart.classList).not.toContain('filled');
    });

    it('removed class added to increase health button', () => {
      expect(firstButton.classList).not.toContain('nom-nom-nom');
      fireEvent.click(firstButton);
      expect(firstButton.classList).toContain('nom-nom-nom');
      fireEvent.click(resetButton);
      expect(firstButton.classList).not.toContain('nom-nom-nom');
    });
  });
});