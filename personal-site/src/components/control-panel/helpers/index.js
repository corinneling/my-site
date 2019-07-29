// const aesthetica11y = {
//   controlPanelEvents: function() {
//     const links = document.querySelectorAll('.aesthetica11y__button');
//     for (var i = 0; i < links.length; i++) {
//       const properties = [this.prop1, this.prop2, this.prop3, this.prop4, this.prop5, this.prop6, this.prop7, this.prop8, this.prop9];
//       links[i].addEventListener('click', properties[i]);
//     }
//   },
//   prop1: function() {
//     const icons = document.querySelectorAll('.aesthetica11y__button');
//     for (var i = 0; i < icons.length; i++) {
//       icons[i].style.backgroundColor == "" ? icons[i].style.backgroundColor = "#2B2B2B" : icons[i].style.backgroundColor = "";
//     }
//   },
//   prop2: function() {
//     const bdy = document.querySelectorAll("body, div, section, main, aside, footer");
//     const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, span, a");
//     for (var i = 0; i < bdy.length; i++) {
//       if (bdy[i].style.backgroundColor == 'black') {
//         bdy[i].style.backgroundImage = "none";
//         bdy[i].style.backgroundColor = 'white';
//         bdy[i].style.color = 'black';
//         txt[i].style.color = 'black';
//       } else {
//         bdy[i].style.backgroundImage = "none";
//         bdy[i].style.backgroundColor = 'black';
//         bdy[i].style.color = 'white';
//         txt[i].style.color = 'white';
//       }
//     }
//   },
//   prop3: function() {
//     const txt = document.querySelectorAll("p, li, a, span")
//     let childrenFont, currentSize;
//     for (let i = 0; i < txt.length; i++) {
//       childrenFont = window.getComputedStyle(txt[i]).getPropertyValue('font-size');
//       currentSize = parseFloat(childrenFont);
//       txt[i].style.fontSize = (currentSize - 2) + 'px';
//     }
//   },
//   prop4: function() {
//     const txt = document.querySelectorAll("p, li, a, span")
//     let childrenFont, currentSize;
//     for (let i = 0; i < txt.length; i++) {
//       childrenFont = window.getComputedStyle(txt[i]).getPropertyValue('font-size');
//       currentSize = parseFloat(childrenFont);
//       txt[i].style.fontSize = (currentSize + 2) + 'px';
//     }
//   },
//   prop5: function() {
//     const a = document.querySelectorAll("a")
//     for (let i = 0; i < a.length; i++) {
//       a[i].style.textDecoration == "" ? a[i].style.textDecoration = "underline" : a[i].style.textDecoration = "";
//     }
//   },
//   prop6: function() {
//     const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span");
//     for (let i = 0; i < txt.length; i++) {
//       txt[i].style.letterSpacing == "" ? txt[i].style.letterSpacing = "1px" : txt[i].style.letterSpacing = "";
//     }
//   },
//   prop7: function() {
//     const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span");
//     for (let i = 0; i < txt.length; i++) {
//       txt[i].style.lineHeight == "" ? txt[i].style.lineHeight = "1.75" : txt[i].style.lineHeight = "";
//     }
//   },
//   prop8: function() {
//     const txt = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, span");
//     for (let i = 0; i < txt.length; i++) {
//       txt[i].style.fontFamily == "" ? txt[i].style.fontFamily = "Dyslexie" : txt[i].style.fontFamily = "" 
//     }
//   },
//   prop9: function() {
//     const els = document.querySelectorAll("*");
//     els.forEach((el) => {
//       el.removeAttribute("style");
//     });
//   }
// }

// const panelButton = document.querySelector('.aesthetica11y-main-icon');
// function setIntialAria(element, aria, value) {
//   element.setAttribute(aria, value);
// }
// function openControlPanel() {
//   panelButton.addEventListener('click', toggleExpandedAria);
// },

// function toggleExpandedAria(e) {
//   const expandedValue = e.target.getAttribute('aria-expanded');
//   let setValue = expandedValue === 'true' ? 'false' : 'true';
//   e.target.setAttribute('aria-expanded', setValue);
// }

// setIntialAria(panelButton, 'aria-expanded', 'false');
// openControlPanel();
// aesthetica11y.controlPanelEvents();