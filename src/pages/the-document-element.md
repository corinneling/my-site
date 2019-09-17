---
title: "The documentElement"
date: "2019-09-18"
---

[`document.documentElement`](https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement) is a really cool element with a ton of information you can use in your projects. At its core, it returns the element that is at the root of the page. More often than not that will be the `<html>` tag, and all of the elements in it.

For example, if you run `document.documentElement` in the Chrome DevTools Console on this page you will get the following feedback.

```
<html lang="en" style="--post-primary-color:#2ca6ec; --post-secondary-color:#4876D6;">
  <head></head>
  <body></body>
</html>
```

The document element has a myriad of properties, but there a couple that I think are the most useful.

## Style Object
First, there is a style object, on the element, and it includes all of the CSS properties that are supported in whichever browser you are currently in. For example, in the Chrome DevTools Console, when I type in `document.documentElement.style` it returns the following, which you can expand to see all of the CSS properties Chrome supports.

```
CSSStyleDeclaration {alignContent: "", alignItems: "", alignSelf: "", alignmentBaseline: "", all: "", ...}
```

if I typed the same thing, `document.documentElement.style` in Safari or Firefox then I would get different keys in the style object because each browser has varying support for the myriad of CSS properties.

If you need check if a CSS property exists in a function when handling browser support while working in a JavaScirpt function, that can be a nice way to check.

```js
function checkImageRendering() {
  if(document && 'imageRendering' in document.documentElement.style) {
    ... 
  }
}
```

or 

```js
function hasImageRendering() {
  return document && 'imageRendering' in document.documentElement.style)
}
```

Also, note that this would only be for very unique circumstances. Usually you can use [`@supports`](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) in your CSS files.

## Browser APIs
You can also use `document.documentElement` to check the support of different browser APIs
