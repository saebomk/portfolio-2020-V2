module.exports = {
  siteMetadata: {
    title: `Saebom April Kwon`,
    description: `Saebom Kwon's Web Portfolio`,
    author: `@aprilsbkwon`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rdkdotspclle`,
        accessToken: `9YyFsJm-0BIiK--Al8das8hdW4bszSq-kfr5rZi5EEI`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
  ],
};
