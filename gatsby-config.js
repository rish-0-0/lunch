module.exports = {
  siteMetadata: {
    title: `Rishabh Anand`,
    description: `Rishabh Anand is a software developer from Bangalore, India. Tech Stack: ReactJS, React-Native, NodeJS, Mongodb, Redis, PostgreSQL, Express, Knex, Sequelize, Koa, Firebase. Provide Web / Mobile App Development Solutions. From BITS Pilani, Goa Campus.`,
    author: `Rishabh Anand`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rishabh's Portfolio`,
        short_name: `Rishabh`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
