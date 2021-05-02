export function setInitialAriaValue(elements, aria, ariaValue) {
	elements.forEach((element) => {
		element.setAttribute(`${aria}`, `${ariaValue}`);
	});
}

export function accordionToggleHandler(buttons) {
	buttons.forEach((button) => {
		button.addEventListener('click', toggleContent);
	});
}

function toggleContent(e) {
	toggleButton(e.target);
	toggleDetails(e.target);
}

function toggleButton(button) {
	const expandedValue = button.getAttribute('aria-expanded');
	const setValue = expandedValue === 'true' ? 'false' : 'true';
	button.setAttribute('aria-expanded', setValue);
}

function toggleDetails(button) {
	const buttonAriaControl = button.getAttribute('aria-controls');
	const content = document.getElementById(buttonAriaControl);
  const hiddenValue = content.getAttribute('aria-hidden');
	const setValue = hiddenValue === 'true' ? 'false' : 'true';
	content.setAttribute('aria-hidden', setValue);
}
