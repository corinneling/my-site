import '@testing-library/jest-dom';

export function getHeartsDOM() {
  return document.body.innerHTML = `
    <div class="hearts tooltip-button" aria-describedby="health-hearts" aria-label="hearts" tabindex="0">
      <div class="heart filled-on-load" data-heart-number="1">a heart</div>
      <div class="heart filled" data-heart-number="2">a heart</div>
      <div class="heart filled" data-heart-number="3">a heart</div>
      <div class="heart" data-heart-number="4">a heart</div>
      <div class="heart" data-heart-number="5">a heart</div>
    </div>
    <span class="tooltip header-tooltip" role="region" aria-live="assertive" id="health-hearts">3 of 5 hearts filled</span>
    <button class="food">Increase Health</button>
    <button class="food">Increase Health</button>
    <button class="food">Destroy Health</button>
  `;
}