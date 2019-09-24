---
title: "Frontend Testing with jsdom"
date: "2019-09-27"
---

Frontend development involves a lot of complexity, especially when working on custom JavaScript components. We update ARIA states in the [Document Object Modal](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model), or DOM, use [Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventListener) to trigger functions, and dynamically update content in the browser. All of this complexity increases the chances of introducing bugs into our project, and the possibility of shipping those bugs to production 😬.

Unit testing is a great way to be more confident in taht code you are shipping.

Unfortunately, when useing a JavaScript testing framework like [Mocha](https://mochajs.org/) that runs on Node JS, the DOM doesnt exist in that environment. For example, `window`, `document` and all of the Browser APIs that come with global objects don't exist in Node JS. So, if one of your functions uses `setAttribute`, `querySelector` or any other number of Browser APIs then your unit test will error out.

We can still test our code though. All we need to do is mock out a fake DOM. Thankfully, there are tools that let us easily do this, and [jsdom](https://github.com/jsdom/jsdom) is one of those.

Jsdom is a JacaScript emulation of the DOM and HTML. In order to set it up to work with your tests, you will need to install it in your project with `npm i --save-dev jsdom`, and then import it into your testing file. 

## 1. Setup a Test File
For all of the examples, I am going to write a test for the functionality of an accordion from another project. I use Mocha and [Chai](https://www.chaijs.com/) for my testing suite, so my `accordion-spec.js` file is importing `expect`, `jsdom`, and the function I'm testing. 

```js
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { toggleButton } from '../js/accordion/helpers';

describe('Accordion', () => {
  it('sets aria-expanded to value of false, when initially set to true', () => {
  })
})
```

## 2. Create an Instance of Jsdom
The test that I am going to write deals directly with the DOM because I have functionality that gets a button and then changes it's [`aria-expanded`](https://www.digitala11y.com/aria-expanded-state/) value when that button is clicked. Since I am going to have multiple tests around the accordion's functionality I'm going to set up the jsdom in a `beforeEach` hook. This hook will run before every `it` block in this `describe` block.

In the `beforeEach` hook create a new instance of the JSDOM class, and I'm assigning it to the variable `dom`.

```js
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { toggleButton } from '../js/accordion/helpers';

describe('Accordion', () => {
  beforeEach(() => {
    const dom = new JSDOM();
  })

  it('sets aria-expanded to value of false, when initially set to true', () => {
  })
})
```

## 3. Pass Parameters to JSDOM
The next thing I need to do is to create a fake, or mock, DOM. To do that I will pass in two parameters to the instance of the JSDOM class.

1. Some HTML tags set as a [template literal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
2. An object with the key `url` and property `http://localhost`

```js
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { toggleButton } from '../js/accordion/helpers';

describe('Accordion', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <button class="button" aria-expanded="true">Im A Button</button>
        </body>
      </html>`,
      { url: 'http://localhost' },
    )
  })

  it('sets aria-expanded to value of false, when initially set to true', () => {
  })
})
```

## 4. Set window and document
One of the things that the JSDOM class gives us, is `window` and `document` so we can interact with JSDOM like we would with the regular DOM. For example, if we wanted to get an element from JSDOM then we could write out `dom.window.document.querySelector('.button');`. I personally think that this looks kind of gross compared to how we would normally get an element from the DOM. To remidiate that, you can set `dom.window` and `dom.windom.document` as global variables to mimic how [window and document are global](https://javascript.info/global-object) in JS.

```js
global.window = dom.window;
global.document = dom.window.document;
```

Add that code to your `beforeEach` hook, just after the new instance of the JSDOM class. 

```js
import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import { toggleButton } from '../js/accordion/helpers';

describe('Accordion', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `<html>
        <body>
          <button class="button" aria-expanded="true">Im A Button</button>
        </body>
      </html>`,
      { url: 'http://localhost' }
    )

    global.window = dom.window;
    global.document = dom.window.document;
  })

  it('sets aria-expanded to value of false, when initially set to true', () => {
    
  })
})
```

## 5. Write a Unit Test
Now, we can finally start writing tests!! Setting up JSDOM may seem like a lot, but I promise that once you do it a few times it will become second nature. 

To write out this unit test, I'm going to use the [3A method](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80), which is setting up a test with Arrange, Act, and then Assert. In the Arrange section of this unit test we can grab an element from JSDOM.

For reference, this is the function we are testing.

```js
function toggleButton(button) {
	const expandedValue = button.getAttribute('aria-expanded');
	const setValue = expandedValue === 'true' ? 'false' : 'true';
	button.setAttribute('aria-expanded', setValue);
}
```

```js
it('sets aria-expanded to value of false, when initially set to true', () => {
  // Arrange
  const coolButton = document.querySelector('.button');
  // Act
  toggleButton(coolButton);
  // Assert
  expect(coolButton.outerHTML).to.include('aria-expanded="false"')
})
```

The test grabs the button from JSDOM. The passes it to the function we are testing, and then asserts that the [outerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/outerHTML) of the button now includes `aria-expanded="false"`, when it was originally `aria-expanded="true"`. 

In conclusion, JSDOM is a great tool that makes emulating the DOM for frontend unit testing much easier than mocking out a DOM from scratch. This way you can write tests for all of your components and frontend functionality and have more confidence in the code you're shipping 🚀


