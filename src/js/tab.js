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
		});

		focusNextTabAfterContent(tab);
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


function focusNextTabAfterContent(tab) {
	const tabButtons = document.querySelectorAll('[role=tab]');
	const currentTabIndex = [...tabButtons].indexOf(tab);

	// get focusable items in current tab panel
	const tabPanelId = tab.getAttribute('aria-controls');
	const tabPanel = document.getElementById(tabPanelId);
	const panelFocusItems = tabPanel.querySelectorAll('a, button');
	const lastFocusItem = panelFocusItems[panelFocusItems.length - 1]

	panelFocusItems.forEach((item) => {
		item.addEventListener('keydown', (e) => {
			if (e.key === 'Tab' && (document.activeElement === lastFocusItem)) {
				const lastTab = tabButtons[tabButtons.length - 1];
				let nextTab = tabButtons[currentTabIndex] !== lastTab
					? tabButtons[currentTabIndex + 1]
					: null;

				console.log(nextTab, 'nextTab');
				if (nextTab) {
					selectTab(nextTab);
					nextTab.focus();
				}
			}
		})
	}); 
}

// logical focus order
// if on Button1 and user tabs into tab content (because content has a link) focus moves to the link
// then if user tabs out of content user is taken to Button2
// if on Button2 and user tabs into tab content (because content has a link) focus moves to the link
// then if user tabs out of content user is taken to button Button3
// if on Button3 and user tabs into tab content (because content has a link) focus moves to the link
// then if user tabs out of content user is taken to Button1
