---
title: "How to Build an Accessible Tooltip"
date: "2019-08-17"
---

Sometimes a website has a ton of content, and we--as developers and designers--want to be able to hide some of that content in tooltips. This allows us to hide information until the user hovers or focuses on a certain element, such as a text element in a long paragraph or an icon.

These tooltips can end up being inaccessible to keyboard and screen reader users though. So, I am going to show you how to easily create accessible tooltips.

## Using an Aria-Label for Content
I'm going to be using [CodePen](https://codepen.io/) to develop a tooltip that consists of a gear icon that I got from [Feather](https://feathericons.com/), and a tooltip associated with that icon that says 'Update Account Settings'. 

First I started by adding a [button element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button) to my CodePen, which is wrapped around an [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) icon. I decided to use a button because I'm going to assume this icon will change something on the page.  If this icon happened to take my to another page, we would want to use a link, or [`<a/>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a). 

Then I added an [`aria-label`](https://www.w3.org/TR/wai-aria-1.1/#aria-label) to my button, with the value of, “Update Account Settings". At this point the HTML looks like this: 

```html
<button class="button button--icon" aria-label="Update Account Settings">
  <svg>...</svg>
</button>
```

Then I added some styles to my button, which you can view on [my CodePen example](https://codepen.io/corinneling/pen/aboNVvz?editors=1100) of an accessible tooltip.

## Setting up a Pseudo Element
Part of those styles included an `::after` pseudo element. The content for this pseudo element is the value of our aria-label attribute which looks like this:

```scss
  &::after {
    content: attr(aria-label);
  }
```

Then I added a couple of default styles to this pseudo element including display, position, color, and some spacing properties.

The display value of the element is set to `none` so the user won't be able to see the tooltip initially. Then it has a position of `absolute` since our button will have a position of `relative`, and then it has left and bottom properties so the tooltip will appear in the correct spot. All of this adds to the final default styles for the pseudo element.

```scss
  &::after {
    content: attr(aria-label);
    display: none;
    position: absolute;
    bottom: 0.3rem;
    left: 125%;
    color: #fff;
    background: #444;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 0.25rem 0.75rem;
    white-space: nowrap;
    border-radius: 0.125rem;
    box-shadow: 2px 6px 8px -2px rgba(0, 0, 0, 0.25);
  }
```

## Showing the Pseudo Element Content
Then comes the final step, making sure the user will be able to see the tooltip content when they hover or focus on the icon. To do that, the hover and focus selector is set to `display: block`, resulting in the following code.

```scss
  &:hover::after,
  &:focus::after {
    display: block;
  }
```

## Final Result
<iframe height="365" style="width: 100%;" scrolling="no" title="Accessible Tooltip" src="//codepen.io/corinneling/embed/aboNVvz/?height=265&theme-id=dark&default-tab=css,result&editable=true" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/corinneling/pen/aboNVvz/'>Accessible Tooltip</a> by Corinne Ling
  (<a href='https://codepen.io/corinneling'>@corinneling</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
