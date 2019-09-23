---
title: "CSS Combinator Selectors"
date: "2019-09-10"
---

Combinator selectors are one of the things that always gets mixed up in my head, because their symbols and syntax are pretty abstract, in my opinion. For example, I tend to mix up the plus, `+` combinator selector with the tilda, `~` combinator selector. So, in this post I am going to go over how each combinator selector works, along with an example CodePen.


## Both Classes combinator
This combinator applies styles to every HTML element that has **BOTH** of the classes in the selector. So, one HTML element has to have both classes for the styling to work.

```css
  .plum.lightsalmon { ... }
```
```html
  <p class="plum"></p>
  <p class="lightsalmon"></p>
  <p class="plum lightsalmon"></p>
```

<iframe height="325" style="width: 100%; border: 4px solid #eee;" scrolling="no" title="Both classes combinator" src="//codepen.io/corinneling/embed/VwZQrdv/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/corinneling/pen/VwZQrdv/'>Both classes combinator</a> by Corinne Ling
  (<a href='https://codepen.io/corinneling'>@corinneling</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## General Sibling combinator
This combinator applies styles to every HTML element with the class `lightsalmon` that comes **AFTER** an HTML element with the class of `plum`.

```css
  .plum ~ .lightsalmon  { ... }
```
```html
  <p class="lightsalmon"></p>
  <p class="plum"></p>
  <p class="lightsalmon"></p>
  <p class="plum"></p>
  <p class="lightsalmon"></p>
  <p class="plum lightsalmon"></p>
```

<iframe height="400" style="width: 100%; border: 4px solid #eee;" scrolling="no" title="Both classes combinator" src="//codepen.io/corinneling/embed/qBWoaYa/?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/corinneling/pen/qBWoaYa/'>Both classes combinator</a> by Corinne Ling
  (<a href='https://codepen.io/corinneling'>@corinneling</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## Descendant combinator
This combinator applies styles to every HTML element that has the class `lightsalmon` and is **INSIDE** of the HTML element with the class `plum`.

```css
  .plum .lightsalmon { ... }
```
```html
  <div class="plum">
    <p class="lightsalmon"></p>
    <div class="seashell">
      <p class="lightsalmon"></p>
    </div>
    <p class="lightsalmon"></p>
  </div>
  <p class="lightsalmon"></p> // won't apply styles to this element
  <p class="plum"></p>
```

<iframe height="450" style="width: 100%; border: 4px solid #eee;" scrolling="no" title="Descendant combinator" src="//codepen.io/corinneling/embed/aboYmQZ/?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/corinneling/pen/aboYmQZ/'>Descendant combinator</a> by Corinne Ling
  (<a href='https://codepen.io/corinneling'>@corinneling</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Adjacent Sibling combinator
This combinator applies styles to every HTML element that has the class `lightsalmon` and **IMMEDIATELY FOLLOWS** every HTML element with the class `plum`.

```css
  .plum + .lightsalmon { ... }
```
```html
  <div class="lightsalmon"></div>
  <div class="plum"></div>
  <div class="lightsalmon"></div>
  <div class="seashell"></div>
  <div class="lightsalmon"></div> // won't apply styles to this element
```

<iframe height="400" style="width: 100%; border: 4px solid #eee;" scrolling="no" title="Adjacent Sibling combinator" src="//codepen.io/corinneling/embed/bGbvBbZ/?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/corinneling/pen/bGbvBbZ/'>Adjacent Sibling combinator</a> by Corinne Ling
  (<a href='https://codepen.io/corinneling'>@corinneling</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Child combinator
This combinator applies styles to every HTML element that has the class `lightsalmon` and is **IMMEDIATELY INSIDE** of the HTML element with the class `plum`. 


```css
.plum > .lightsalmon
```
```html
  <div class="plum">
    <p class="lightsalmon"></p>
    <div class="seashell">
      <p class="lightsalmon"></p> // won't apply styles to this element
    </div>
    <p class="lightsalmon"></p>
  </div>
  <p class="lightsalmon"></p> // won't apply styles to this element
  <p class="plum"></p>
```

<iframe height="400" style="width: 100%; border: 4px solid #eee;" scrolling="no" title="Child combinator" src="//codepen.io/corinneling/embed/RwbMoOO/?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/corinneling/pen/RwbMoOO/'>Child combinator</a> by Corinne Ling
  (<a href='https://codepen.io/corinneling'>@corinneling</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## More Info
For more information on CSS selectors, CSS Tricks has a great [almanac of all the different selectors](https://css-tricks.com/almanac/selectors/), with links to articles explaining each one. Interneting is Hard also has a really good [article that goes over common CSS selectors](https://internetingishard.com/HTML-and-css/css-selectors/) that includes code and visual examples. 