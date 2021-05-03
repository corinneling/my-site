import { handleTabClick, handleKeyDown } from './tab';

const tabButtons = document.querySelectorAll('[role=tab]');

handleTabClick(tabButtons);
handleKeyDown(tabButtons);