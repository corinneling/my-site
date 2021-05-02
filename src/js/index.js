import { handleTabClick, handleKeyDown } from './accordion';

const tabButtons = document.querySelectorAll('[role=tab]');

handleTabClick(tabButtons);
handleKeyDown(tabButtons);