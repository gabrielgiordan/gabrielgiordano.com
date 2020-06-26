import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { helmetJsonLdProp } from 'react-schemaorg';

const propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  lang: 'en',
  meta: [],
  image: '',
};

function SEO({ lang, meta, title, image }) {
  const author = 'Gabriel Giordano';
  const description =
    'Gabriel Giordano is a Software Engineer, currently working at SumUp previously at IBM and is also an open-source contributor.';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${author}`}
      meta={[
        {
          name: 'author',
          content: author,
        },
        {
          name: 'keywords',
          content:
            'Senior Software Engineer, Full Stack, Elixir, Erlang, OTP, Clojure, Scala, C, C++, Java, JavaScript, JS, React, Unity3d, Developer, Computer Science',
        },
        {
          name: 'subject',
          content: 'Software engineering',
        },
        {
          name: 'description',
          content: description,
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
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'image',
          content: image,
        },
        {
          property: 'og:site_name',
          content: 'Gabriel Giordano',
        },
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: '@gabrielgiord',
        },
        {
          name: 'twitter:site',
          content: '@gabrielgiord',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
      ].concat(meta)}
      script={[
        helmetJsonLdProp({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: author,
          gender: 'male',
          alternateName: 'Gabriel Giordano Medina',
          nationality: 'Brazilian',
          description: 'Software Engineer',
          disambiguatingDescription: 'Software Engineer at SumUp',
          knowsAbout: [
            'Software Engineering',
            'Computer Science',
            'System Design',
          ],
          image:
            'https://s.gravatar.com/avatar/6ea1b94c835fed259ad11d2133793a73?s=512',
          email: 'mailto:hello@gabrielgiordano.com',
          url: 'http://gabrielgiordano.com',
          sameAs: [
            'https://twitter.com/gabrielgiord',
            'https://www.youtube.com/c/GabrielGiordanoMedina',
            'https://www.linkedin.com/in/gabrielgiordano/',
            'https://github.com/gabrielgiordan',
          ],
          jobTitle: 'Software Engineer',
        }),
      ]}
    />
  );
}

SEO.defaultProps = defaultProps;
SEO.propTypes = propTypes;

export default SEO;
