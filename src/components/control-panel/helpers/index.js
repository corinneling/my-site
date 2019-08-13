const aesthetica11y = {
  controlPanelEvents: function() {
    const links = document.querySelectorAll('.panel__button');
    for (var i = 0; i < links.length; i++) {
      const properties = [this.prop1, this.prop2, this.prop3, this.prop4, this.prop5, this.prop6, this.prop7];
      links[i].addEventListener('click', properties[i]);
    }
  },
  prop1: function() {
    const icons = document.querySelectorAll('.panel__button');
    for (var i = 0; i < icons.length; i++) {
      icons[i].style.backgroundColor === "" ? icons[i].style.backgroundColor = "#2B2B2B" : icons[i].style.backgroundColor = "";
    }
  },
  prop2: function() {
    toggleClass('js-add-contrast');
  },
  prop3: function() {
    toggleClass('js-add-underline');
  },
  prop4: function() {
    toggleClass('js-add-letterspacing');
  },
  prop5: function() {
    toggleClass('js-add-lineheight');
  },
  prop6: function() {
    toggleClass('js-add-dyslexie');
  },
  prop7: function() {
    document.querySelector('body').removeAttribute("class")
  }
}

function toggleClass(customClass) {
  const body = document.querySelector('body');
  body.removeAttribute("class")
  if (!body.classList.contains(customClass)) {
    body.classList.add(customClass)
  } else {
    body.classList.remove(customClass)
  }
}

function initControlPanel() {
  aesthetica11y.controlPanelEvents();
}

export default initControlPanel;