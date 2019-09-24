---
title: "Make Unit Testing Fun"
date: "2019-09-27"
---

## Use a reporter you like
such as the nyan cat

## Find a way to make unit tests reinforcing
for me the answer to this is also the nyan cat lol

## Make writing a new test less daunting
I outline my it blocks with comments: arrange, act, and assert.

## Make Frontend Unit Tests Easy
Making something easy to work with means less frustration in the long run. That means there's a chance it will acutally be enjoyable! In a previous post I wrote about how to setup mocha which includes setting it up to work with es6 syntax. While I could have decided not to do that and just stuck with plain old node js syntax, I want

## Use fun mock variable names
For example, the other day I was writing unit tests for a modal. While I hate modals, also known as pop ups, and I think they should all be sent into a black hole and never thought of again that's probably never going to happen. There will always be modals, so we've got to learn to live with them. Part of them, is writing tests to make sure they work properly and are accessible. So, so make this process more fun I wrote the following `beforeEach` hook with jsdom.

```js
describe('Modal Setup', () => {
  beforeEach(() => {
    const dom = new JSDOM(
      `
      <html>
      <body class="no-js">
        <button class="trigger-annoyingness">Click If You Dare!</button>
        <div class="annoying" role="dialog" aria-hidden="false">
            I'm a Modal!
            <button class="close">Escape the Popup!</button>
        </div>
      </body>
      </html>
      `, {
        url: 'http://localhost'
      },
    )
    global.window = dom.window;
    global.document = dom.window.document;
  })
})
```