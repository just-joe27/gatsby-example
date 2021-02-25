/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
      siteMetadata:{ 
        title:"Gatsby Tutorial",
        description:"some random description",
        author: "@johnDoe",
        data:["item 1", "item2"],
        person: {name: "peter", age: 32},
    },

    plugins: [
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
        spaceId: `fw6pl8z83eje`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `g-eFeTXT7TP0YFqMMucPQCtICsekTXrUJ6_NpUMZQDI`,
      },
    },
  ]
}
