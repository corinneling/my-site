const aesthetica11y = {
  controlPanelEvents: function() {
    const links = document.querySelectorAll('.aesthetica11y__button');
    for (var i = 0; i < links.length; i++) {
      const properties = [this.prop1, this.prop2, this.prop3, this.prop4, this.prop5, this.prop6, this.prop7];
      links[i].addEventListener('click', properties[i]);
    }
  },
  prop1: function() {
    const icons = document.querySelectorAll('.aesthetica11y__button');
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.backgroundColor == "" ? icons[i].style.backgroundColor = "#2B2B2B" : icons[i].style.backgroundColor = "";
    }
  },
  prop2: function() {
    toggleClass('.js-add-contrast');
  },
  prop3: function() {
    toggleClass('.js-add-underline');
  },
  prop4: function() {
    toggleClass('.js-add-letterspacing');
  },
  prop5: function() {
    toggleClass('.js-add-lineheight');
  },
  prop6: function() {
    toggleClass('.js-add-dyslexie');
  },
  prop7: function() {
    const els = document.querySelectorAll("*");
    els.forEach((el) => {
      el.removeAttribute("style");
    });
  }
}

function toggleClass(class) {
  const body = document.querySelector('body');
  if (!body.classList.contains(class)) {
    body.classList.add(class)
  } else {
    body.classList.remove(class)
  }
}

const panelButton = document.querySelector('.aesthetica11y-main-icon');
function setIntialAria(element, aria, value) {
  element.setAttribute(aria, value);
}
function openControlPanel() {
  panelButton.addEventListener('click', toggleExpandedAria);
},

function toggleExpandedAria(e) {
  const expandedValue = e.target.getAttribute('aria-expanded');
  let setValue = expandedValue === 'true' ? 'false' : 'true';
  e.target.setAttribute('aria-expanded', setValue);
}

setIntialAria(panelButton, 'aria-expanded', 'false');
openControlPanel();
aesthetica11y.controlPanelEvents();