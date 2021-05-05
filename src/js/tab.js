function resetPreviousActiveTab() {
	const tabButtons = document.querySelectorAll('[role=tab]');
	tabButtons.forEach((button) => {
		const activeTab = button.getAttribute('aria-selected');
		if (activeTab === 'true') {
			button.setAttribute('aria-selected', 'false');
			button.setAttribute('tabindex', -1);
		}
	})
}

function hidePreviousTabPanel() {
	const tabPanels = document.querySelectorAll('[role=tabpanel]');
	tabPanels.forEach((panel) => {
		const activePanel = panel.getAttribute('aria-hidden');
		if (activePanel === 'false') {
			panel.setAttribute('aria-hidden', 'true');
			const focusableItems = panel.querySelectorAll('a, button');
			if (focusableItems) {
				focusableItems.forEach((item) => {
					item.setAttribute('tabindex', -1);
				})
			}
		}
	})
}

function selectTab(tab) {
	resetPreviousActiveTab();
	tab.setAttribute('aria-selected', 'true');
	tab.setAttribute('tabindex', 0);
	hidePreviousTabPanel();
	const tabPanelId = tab.getAttribute('aria-controls');
	const tabPanel = document.getElementById(tabPanelId);
	tabPanel.setAttribute('aria-hidden', 'false');
	const focusableItems = tabPanel.querySelectorAll('a, button');
	if (focusableItems) {
		focusableItems.forEach((item) => {
			item.setAttribute('tabindex', 0);
		})
	}
}

function setActiveTab(e) {
	selectTab(e.target);
}

function setActiveTabKeyDown(e) {
	const tabButtons = document.querySelectorAll('[role=tab]');
	const currentTabIndex = [...tabButtons].indexOf(e.target);
	let nextTab = e.key === 'ArrowLeft' ? tabButtons[currentTabIndex - 1] : e.key === 'ArrowRight' ? tabButtons[currentTabIndex + 1] : null;
	
	if (nextTab) {
		nextTab.focus();
	}
	
	selectTab(nextTab);
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
