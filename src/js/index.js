import { handleTabClick, handleKeyDown } from './tab';
import { dayCounter } from './day-counter';

const tabButtons = document.querySelectorAll('[role=tab]');

handleTabClick(tabButtons);
handleKeyDown(tabButtons);

dayCounter();