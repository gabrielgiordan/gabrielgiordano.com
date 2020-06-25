module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#222222",
        theme_color: "#222222",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-optimize-svgs",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images\/.*\.inline.svg/,
        },
      },
    },
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/src/markdown`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-gtag",
      options: {
        trackingId: "UA-48045203-1",
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans:400,700:latin&display=swap", "sans-serif"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: ["https://fonts.gstatic.com", "https://fonts.googleapis.com"],
      },
    },
    "gatsby-plugin-offline",
  ],
};
