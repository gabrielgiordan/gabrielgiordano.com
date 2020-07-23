const author = {
  name: 'Gabriel Giordano Medina',
  jobTitle: 'Software Engineer',
  description: 'Software Engineer',
  disambiguatingDescription: 'Software Engineer at SumUp',
  nationality: 'Brazilian',
  gender: 'male',
  knowsAbout: ['Software Engineering', 'Computer Science'],
  url: 'http://gabrielgiordano.com',
  image: 'https://s.gravatar.com/avatar/6ea1b94c835fed259ad11d2133793a73?s=512',
  email: 'mailto:hello@gabrielgiordano.com',
};

const authorSocial = {
  github: 'https://github.com/gabrielgiordan',
  linkedin: 'https://www.linkedin.com/in/gabrielgiordano/',
  stackoverflow:
    'https://stackoverflow.com/users/2715963/gabriel-giordano-medina',
  medium: 'https://medium.com/@gabrielgiordano',
  twitter: 'https://twitter.com/gabrielgiord',
  youtube: 'https://www.youtube.com/c/GabrielGiordanoMedina',
  slideshare: 'https://www.slideshare.net/GabrielGiordanoMedin',
  stackshare: 'https://stackshare.io/gabrielgiordan',
};

const siteSocial = {
  repository: 'https://github.com/gabrielgiordan/gabrielgiordano.com',
  gatsby: 'https://www.gatsbyjs.org/',
  react: 'https://reactjs.org/',
};

const siteMetadata = {
  siteUrl: 'https://gabrielgiordano.com',
  siteName: 'Gabriel Giordano',
  siteSocial,
  googleAnalyticsTrackingId: 'UA-48045203-1',
  author,
  authorSocial,
};

module.exports = {
  siteMetadata,
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
        name: siteMetadata.siteName,
        short_name: siteMetadata.siteName,
        start_url: '/',
        background_color: '#222222',
        theme_color: '#222222',
        display: 'standalone',
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
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: siteMetadata.googleAnalyticsTrackingId,
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
