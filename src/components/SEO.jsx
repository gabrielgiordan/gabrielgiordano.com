import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const propTypes = {
  lang: PropTypes.string,
  locale: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const defaultProps = {
  lang: 'en',
  locale: 'en_US',
  image: '',
  imageAlt: '',
};

function twitterMeta({
  siteUrl,
  title,
  description,
  image,
  imageAlt,
  creator,
  site,
}) {
  return [
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:creator',
      content: creator,
    },
    {
      name: 'twitter:site',
      content: site,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: `${siteUrl}${image}`,
    },
    {
      name: 'twitter:image:alt',
      content: imageAlt,
    },
  ];
}

function ogMeta({
  siteUrl,
  siteName,
  pathname,
  locale,
  title,
  description,
  image,
  imageAlt,
}) {
  return [
    {
      property: 'og:url',
      content: `${siteUrl}${pathname}`,
    },
    {
      property: 'og:locale',
      content: locale,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:site_name',
      content: siteName,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: `${siteUrl}${image}`,
    },
    {
      property: 'og:image:alt',
      content: imageAlt,
    },
    {
      property: 'og:image:type',
      content: 'image/png',
    },
    {
      property: 'og:image:width',
      content: '1200',
    },
    {
      property: 'og:image:height',
      content: '630',
    },
  ];
}

function meta({ description }) {
  return [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'referrer',
      content: 'no-referrer-when-downgrade',
    },
    {
      name: 'robots',
      content: 'all',
    },
  ];
}

function getSiteMetadata() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          siteUrl
          siteName
          author {
            name
            jobTitle
            description
            disambiguatingDescription
            nationality
            gender
            knowsAbout
            url
            image
            email
          }
          authorSocial {
            github
            linkedin
            stackoverflow
            medium
            twitter
            youtube
            slideshare
          }
        }
      }
    }
  `);

  return siteMetadata;
}

function getJsonLdPerson(person, social) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    ...person,
    sameAs: Object.values(social),
  };
}

function SEO({ lang, locale, title, description, image, imageAlt }) {
  const { siteUrl, siteName, author, authorSocial } = getSiteMetadata();

  const jsonLdAuthor = getJsonLdPerson(author, authorSocial);
  const twitterUsername = `@${authorSocial.twitter.split('/').pop()}`;
  const { pathname } = useLocation();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${siteName}`}
      defaultTitle={siteName}
      meta={[
        ...meta({ description }),
        ...ogMeta({
          siteUrl,
          siteName,
          pathname,
          locale,
          title,
          description,
          image,
          imageAlt,
        }),
        ...twitterMeta({
          siteUrl,
          title,
          description,
          image,
          imageAlt,
          creator: twitterUsername,
          site: twitterUsername,
        }),
      ]}
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLdAuthor),
        },
      ]}
      link={[
        {
          rel: 'home',
          href: siteUrl,
        },
        {
          type: 'text/plain',
          rel: 'author',
          href: `${siteUrl}/humans.txt`,
        },
        {
          rel: 'canonical',
          href: `${siteUrl}${pathname}`,
        },
      ]}
    />
  );
}

SEO.defaultProps = defaultProps;
SEO.propTypes = propTypes;

export default SEO;
