function setFocusableItems(panel, tabindexValue) {
	const focusableItems = panel.querySelectorAll('a, button');
	if (focusableItems) {
		focusableItems.forEach((item) => {
			item.setAttribute('tabindex', tabindexValue);
		})
	}
}

function resetPreviousActiveTab() {
	const tabButtons = document.querySelectorAll('[role=tab]');
	tabButtons.forEach((button) => {
		const activeTab = button.getAttribute('aria-selected');
		if (activeTab === 'true') {
			button.setAttribute('aria-selected', 'false');
		}
	})
}

function hidePreviousTabPanel() {
	const tabPanels = document.querySelectorAll('[role=tabpanel]');
	tabPanels.forEach((panel) => {
		const activePanel = panel.getAttribute('aria-hidden');
		if (activePanel === 'false') {
			panel.setAttribute('aria-hidden', 'true');
			setFocusableItems(panel, -1)
		}
	})
}

function selectTab(tab) {
	resetPreviousActiveTab();
	tab.setAttribute('aria-selected', 'true');
	hidePreviousTabPanel();
	const tabPanelId = tab.getAttribute('aria-controls');
	const tabPanel = document.getElementById(tabPanelId);
	tabPanel.setAttribute('aria-hidden', 'false');

	setFocusableItems(tabPanel, 0)
}

function setActiveTab(e) {
	selectTab(e.target);
}

function setActiveTabKeyDown(e) {
	const tabButtons = document.querySelectorAll('[role=tab]');
	const currentTabIndex = [...tabButtons].indexOf(e.target);	
	const lastIndex = tabButtons.length - 1;

	let nextTab;
	if (e.key === 'ArrowLeft' && currentTabIndex !== 0) {
		nextTab =	tabButtons[currentTabIndex - 1];
	} else if (e.key === 'ArrowLeft' && currentTabIndex === 0) {
		nextTab =	tabButtons[lastIndex];
	} else if (e.key === 'ArrowRight' && currentTabIndex !== lastIndex) {
		nextTab =	tabButtons[currentTabIndex + 1];
	} else if (e.key === 'ArrowRight' && currentTabIndex === lastIndex) {
		nextTab =	tabButtons[0];
	} else if (e.key === 'Home') {
		nextTab =	tabButtons[0]
	} else if (e.key === 'End') {
		nextTab =	tabButtons[lastIndex]
	} else {
		nextTab =	null
	}

	if (nextTab) {
		nextTab.focus();
		selectTab(nextTab);
	}
}

export function handleTabClick(tabButtons) {
	tabButtons.forEach((button) => {
		button.addEventListener('click', setActiveTab);
	});
}

export function handleKeyDown(tabButtons) {
	tabButtons.forEach((button) => {
		button.addEventListener('keydown', setActiveTabKeyDown)
	});
}
