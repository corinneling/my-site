/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

 const path = require('path');

module.exports = {
  siteMetadata: {
    siteTitle: 'hello there'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
      plugins: [{
        resolve: `gatsby-remark-vscode`,
        // All options are optional. Defaults shown here.
        options: {
          colorTheme: 'Night Owl Light',
          wrapperClassName: '',   // Additional class put on 'pre' tag
          injectStyles: false,     // Injects (minimal) additional CSS for layout and scrolling
          extensions: [{
            identifier: 'sdras.night-owl',
            version: '1.1.3'
          }],
          languageAliases: {},    // Map of custom/unknown language codes to standard/known language codes
          replaceColor: x => x,   // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
          getLineClassName: ({    // Function allowing dynamic setting of additional class names on individual lines
            content,              //   - the string content of the line
            index,                //   - the zero-based index of the line within the code fence
            language,             //   - the language specified for the code fence
            codeFenceOptions      //   - any options set on the code fence alongside the language (more on this later)
          }) => '',
          extensionDataDirectory: // Absolute path to the directory where extensions will be downloaded. Defaults to inside node_modules.
            path.resolve('extensions'),
          logLevel: 'error'       // Set to 'warn' to debug if something looks wrong
        }
      }]
    }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#7491f0`,
        theme_color: `#7491f0`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/woman-technologist.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ]
}
