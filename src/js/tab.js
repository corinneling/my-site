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
			panel.setAttribute('tabindex', -1);
			const focusableItems = panel.querySelectorAll('a, button');
			if (focusableItems) {
				focusableItems.forEach((item) => {
					item.setAttribute('tabindex', -1);
				})
			}
		}
	})
}

function selectTab(tab, e) {
	resetPreviousActiveTab();
	tab.setAttribute('aria-selected', 'true');
	hidePreviousTabPanel();
	const tabPanelId = tab.getAttribute('aria-controls');
	const tabPanel = document.getElementById(tabPanelId);
	tabPanel.setAttribute('aria-hidden', 'false');
	tabPanel.setAttribute('tabindex', 0);

	if (e.key === 'Tab') {
		tabPanel.focus();
	}

	const focusableItems = tabPanel.querySelectorAll('a, button');
	if (focusableItems) {
		focusableItems.forEach((item) => {
			item.setAttribute('tabindex', 0);
		});
	}
}

function setActiveTab(e) {
	selectTab(e.target);
}

function setActiveTabKeyDown(e) {
	const tabButtons = document.querySelectorAll('[role=tab]');
	const currentTabIndex = [...tabButtons].indexOf(e.target);
	let nextTab = e.key === 'ArrowLeft' 
		? tabButtons[currentTabIndex - 1] 
		: e.key === 'ArrowRight' 
			? tabButtons[currentTabIndex + 1] 
			: null;

	if (nextTab) {
		// nextTab.setAttribute('tabindex', 0)
		nextTab.focus();
		selectTab(nextTab, e);
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
