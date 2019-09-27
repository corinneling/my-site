---
title: "Catch Future Bugs with Testing"
date: "2019-09-30"
---

In this post I'm going to talk about why testing is important with some real world examples. But, before I do that I'm going to share something about myself. I hate doing things just because "you're supposed to". I need a why and a how; why is this an important use of time and how will it help what's being worked on. 

I had never really heard a good reason for unit testing as I was learning how to code except that it's best practice and can catch bugs. That's all good and dandy, but I never really _understood_ what that meant until I started writing unit tests myself. So, I'm going to try and share that realization with you without you needing to write a single unit test. 

## Initial Unit Tests
The other day I was writing a unit test for this function:

```js
function setInitialAriaValue(elements, aria, ariaValue) {
  elements.forEach((element) => {
    element.setAttribute(aria, ariaValue);
  });
}
```

I created my test file `set-aria-spec.js` and set up JSDOM so I could test this functionality of setting initial aria values.

So, this test is getting all of the buttons in the JSDOM. Its passing those buttons into the `setInitialAriaValue` function, as well as the aria attribute we want to change, and the value we want to change it to. The whole purpose for this function is to let components work without js, and then once js has loaded, set their aria values. 

```js
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import setInitialAriaValue from '../js/helpers/set-aria';

describe('Set Aria Value - Helper', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <button class="button" aria-expanded="true">I'm A Button</button>
          <button class="button" aria-expanded="true">What No Way!</button>
          <button class="button" aria-expanded="true">Yas Way</button>
        </body>
      </html>`,
      { url: 'http://localhost' },
    );

    global.window = dom.window;
    global.document = dom.window.document;
  });

  it('Sets initial aria value on page load', () => {
    // Arrange
    const buttons = document.querySelectorAll('.button');
    // Act
    setInitialAriaValue(buttons, 'aria-expanded', false);
    // Assert
    const secondButtonAria = buttons[2].getAttribute('aria-expanded');
    expect(secondButtonAria).to.equal('false');
  })
})
```

This test passed 🎉

## Analyzing the Function
I only had one test though, which isn't necessarily bad, but I started to think if there was anything else I could test. Would there be any other scenarios where someone would use this function, and we'd want to make sure it works?

What about if someone passed in the wrong aria attribute as the second parameter? That seemed very possible. So, I wrote a test for that.

```js

describe('Set Aria Value - Helper', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <button class="button" aria-expanded="true">I'm A Button</button>
          <button class="button" aria-expanded="true">What No Way!</button>
          <button class="button" aria-expanded="true">Yas Way</button>
        </body>
      </html>`,
      { url: 'http://localhost' },
    );

    global.window = dom.window;
    global.document = dom.window.document;
  });

  it('Sets initial aria value on page load', () => {
   ...
  })

  it('does not set a value if there is no matching aria attribute', () => {
    // Arrange
    const buttons = document.querySelectorAll('.button');
    // Act
    setInitialAriaValue(buttons, 'aria-hidden', true);
    // Assert
    expect(buttons[1].outerHTML).to.not.include(`aria-hidden`);
  })
})
```

I ran the test, and...it failed 😅

This was the test error:

```
AssertionError: expected '<button class="button" aria-expanded="true" aria-hidden="true">Im A Button</button>' to not include 'aria-hidden'
```

## Fixing the Bug
My test failed because I hadn't accounted for this scenario when initially writing the `setInitialAriaValue` function. I went back to my function and updated it to check that the element already has the aria value I'm passing into the function.

```js
function setInitialAriaValue(elements, aria, ariaValue) {
  if (element.outerHTML.includes(aria)) {
    elements.forEach((element) => {
      element.setAttribute(aria, ariaValue);
    });
  }
}
```

After making that update to the function, my second test passed.

The process of writing unit tests for this function helped me to catch a bug! Without thinking through possible scenarios and writing a test for one, I might have never caught it. And, my website could have become inaccessible.