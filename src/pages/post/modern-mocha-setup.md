---
title: "A Modern Mocha Setup"
date: "2019-09-23"
---

[Mocha](https://mochajs.org) is a JavaScript test framework that runs on node. It uses the describe/it syntax, and runs tests asynchronously. So, all of the hooks are run in the order they are defined, including the describe and it callbacks.

Mocha comes with an assertion library, but I really like the [chai](https://www.chaijs.com/) assertion library. You can instal that alongside mocha as dev dependencies in your projects with `npm i mocha --save-dev` and `npm i chai --save-dev`

## Add a Testing Script
You can create a script to run the mocha tests in your package.json. Mocha has a ton of [different flags](https://mochajs.org/#command-line-usage) you can use when working with the command line, so I added a couple to the script. I chose to add the reporter flag `--reporter nyan`, which is amazing and I highly recommend 🌈. I also added `--full-trace` which outputs the full stack trace when there are test failures because it really helps when debugging.

```json
"scripts": {
  "test": "mocha --reporter nyan --full-trace './src/**/*spec.js'"
}
```

## Setup Mocha to Work with ES6 Syntax

First, install the following dependecies:

```
  npm i @babel/cli --save-dev
  npm i @babel/core --save-dev
  npm i @babel/preset-env --save-dev
  npm i @babel/register --save-dev
```

Then create a `.babelrc` file in the root of your project, and set the presets to @babel/preset-env.

```js
{
  "presets": ["@babel/preset-env"]
} 
```

Now you can update your testing script by adding `--require @babel/register` to it, so it looks like this:

```json
"scripts": {
  "test": "mocha --reporter nyan --full-trace --require @babel/register './src/**/*spec.js'"
}
```

## Add spec files
There are a couple of different schools of thoughts on this. Some people like to add their testings files as siblings to their regular js files. I decided to put mine in a completely separate folder. The above testing script will work for either setup though.

In your `src` folder, create a folder called `spec`. In that spec folder create an `example-spec.js` file, so the the file path looks like this `./src/spec/example-spec.js`

## Setup an Example spec File

In that `example-spec` file, you can setup a basic test to make sure everything is setup correctly.

```js
import { expect } from 'chai';

describe('example test', () => {
  it('works???', () => {
    expect(true).to.equal(false);
  })
})
```

Then you can run `npm run test` in the command line, and see that mocha works! The test should fail, so then you can update it to pass.


```js
import { expect } from 'chai';

describe('example test', () => {
  it('works!!!', () => {
    expect(true).to.equal(true);
  })
})
```

Running `npm run test` in the command line again should show it passing. Now you have your testing suite set up and can start writing unit tests 🎉