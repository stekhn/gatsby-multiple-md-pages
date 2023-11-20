import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/content/projects/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/content/blog-posts/`,
      },
    },
  ],
};

export default config;
