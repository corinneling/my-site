import { handleTabClick, handleKeyDown } from './tab';
import { dayCounter } from './day-counter';
import { handleHealth, handleResetHealth } from './health';
import { addWeather } from './weather';

const tabButtons = document.querySelectorAll('[role=tab]');

handleTabClick(tabButtons);
handleKeyDown(tabButtons);

const foodButtons = document.querySelectorAll('.food');
const resetHeartsButton = document.querySelector('.reset-hearts');

handleHealth(foodButtons);
handleResetHealth(resetHeartsButton);

dayCounter();
addWeather();
