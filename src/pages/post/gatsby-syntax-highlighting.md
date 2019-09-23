---
title: "How to Setup Syntax Highlighting for Gatsby"
date: "2019-09-05"
---

Recently, I updated my website from Handlebars to [Gatsby](https://www.gatsbyjs.org/). Once, I had everything updated I decided to add code syntax highlighting. I chose to use the [`gatsby-remark-vscode`](https://www.gatsbyjs.org/packages/gatsby-remark-vscode/?=highlight) plugin because it provides some extra syntax highlighting that the other plugins don't have, and it allows me to use any [VS Code](https://code.visualstudio.com/) theme. In this article, I'm going to go through the steps of how to use this plugin to add code highlighting to your Gatsby website, as well as how to use any theme from the VS Code marketplace, and set up a custom font. 

## Install
First, install the plugin.

```
npm i gatsby-remark-vscode --save
```

## Gatsby Config Settings
Then you will need to update your `gatsby-config.js`, which is located in the root of your project. It will have a plugins section that should already include [`gatsby-transformer-remark`](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/), and look like this:

```js
plugins: [
  resolve: `gatsby-transformer-remark`,
]
```

To update it, add the new highlighting plugin as an option for the `gatsby-transformer-remark`. It should now have curly brackets wrapped around it, with an options object inside those curly brackets.  

```js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-vscode`,
        options: {
          colorTheme: 'Dark+ (default dark)',
          injectStyles: true,
          extensions: [],
          extensionDataDirectory:
            path.resolve('extensions'),
          logLevel: 'error'
        }
      }]
    }
  },
]
```

The `extensionDataDirectory` of the `options` object is using `path`, a module that comes with [Node.js](https://nodejs.org/en/), and provides tools for working with file paths. When compiling your Gatsby project, the build will yell at you since you aren't importing that modules into this file. So, at the top of your `gatsby-config.js`, require it.

```js
const path = require('path');
```

## Include the Stylesheet
Now we can add the styles! First, create a `gatsby-browser.js` in the root of your project, and require the plugin's stylesheet.

```js
require('gatsby-remark-vscode/styles.css');
```

Now, try running your project with `gatsby develop`, and you should be able to see that your markdown code is highlighted!

## Add a VS Code Theme

The `gatsby-remark-vscode` comes with [a few themes](https://www.gatsbyjs.org/packages/gatsby-remark-vscode/?=highlight#themes) including Monokai, Tomorrow Night Blue, Abyss etc. I really wanted to have my code blocks reflect one of my favorite VS Code themes, [Night/Light Owl](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl), by Sarah Drasner. So I grabbed the version number and unique identifier, in the right-hand sidebar of the theme's marketplace page. The plugin's documentation has a [really helpful screenshot](https://www.gatsbyjs.org/packages/gatsby-remark-vscode/?=highlight#using-languages-and-themes-from-an-extension) on where to find this info.

Then I added that info to the extensions array of my plugins options object, and I updated the `colorTheme` value.
```js
  colorTheme: 'Light Owl',
  ...
  extensions: [{
    identifier: 'sdras.night-owl',
    version: '1.1.3'
  }],
```

So now my config looks like this: 
```js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [{
        resolve: `gatsby-remark-vscode`,
        // All options are optional. Defaults shown here.
        options: {
          colorTheme: 'Dark+ (default dark)',
          injectStyles: true,
          extensions: [{
            identifier: 'sdras.night-owl',
            version: '1.1.3'
          }],
          extensionDataDirectory:
            path.resolve('extensions'),
          logLevel: 'error'
        }
      }]
    }
  },
]
```

## Add a Custom Font
The next thing I wanted to do was use a custom font for my code blocks. At this point the work in the `gatsby-config.js` is finished, and I will be working in my `scss` files. My favorite font is [Victor Mono](https://rubjo.github.io/victor-mono/) 

First thing to do is download the font files, and add them in the assets folder of your projcet. I used Victor Mono Bold, and Victor Mono Bold Italic. The use `font-face` to add it as custom font.

```scss
@font-face {
  font-family: "Victor Mono";
  font-style: normal;
  src: url(../assets/font/VictorMono-Bold.otf) format("opentype");
}

@font-face {
  font-family: "Victor Mono";
  font-style: italic;
  src: url(../assets/font/VictorMono-BoldItalic.otf) format("opentype");
}
```

Then add set this font for the code selector: 

```scss
code {
  font-family: 'Victor Mono';
}
```

And, that's it! If you followed through these steps you should have your own code highlighting set up! 😄