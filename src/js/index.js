import { handleTabClick, handleKeyDown } from './tab';
import { addDays } from './day-counter';
import { handleHealth, handleResetHealth } from './health';
import { addWeather } from './weather';

const tabButtons = document.querySelectorAll('[role=tab]');
const tabPanels = document.querySelectorAll('[role=tabpanel]');

handleTabClick(tabButtons);
handleKeyDown(tabButtons);

const foodButtons = document.querySelectorAll('.food');
const resetHeartsButton = document.querySelector('.reset-hearts');

handleHealth(foodButtons);
handleResetHealth(resetHeartsButton);

addDays();
addWeather();
