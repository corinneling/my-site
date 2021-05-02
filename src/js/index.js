import { setInitialAriaValue, accordionToggleHandler } from './accordion';

const buttons = document.querySelectorAll('.accordion__button');
const contentSections = document.querySelectorAll('.accordion__content');

setInitialAriaValue(buttons, 'aria-expanded', 'false');
setInitialAriaValue(contentSections, 'aria-hidden', 'true');
accordionToggleHandler(buttons);