module.exports = {
  siteMetadata: {
    siteUrl: `https://gabrielgiordano.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gabriel Giordano',
        short_name: 'Gabriel Giordano',
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'minimal-ui',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-optimize-svgs',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images\/.*\.inline.svg/,
        },
      },
    },
    'babel-plugin-styled-components',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-48045203-1',
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans:400,700:latin&display=swap', 'sans-serif'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-preconnect',
      options: {
        domains: [
          {
            domain: 'https://fonts.gstatic.com',
            crossOrigin: true,
          },
          {
            domain: 'https://fonts.googleapis.com',
            crossOrigin: true,
          },
        ],
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-no-sourcemaps',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-html-minifier',
      options: {
        minifyCSS: false,
        minifyJS: true,
        sortAttributes: true,
        useShortDoctype: true,
        removeAttributeQuotes: true,
        collapseBooleanAttributes: true,
      },
    },
  ],
};
