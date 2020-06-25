import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { helmetJsonLdProp } from "react-schemaorg";

function SEO({ lang, meta, title }) {
  const author = "Gabriel Giordano";
  const description =
    "Gabriel Giordano is a Software Engineer, currently working at SumUp previously at IBM and is also an open-source contributor.";

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s - ${author}`}
      meta={[
        {
          name: `author`,
          content: author,
        },
        {
          name: `keywords`,
          content:
            "software engineer full stack elixir erlang otp clojure scala c c++ js nodejs react unity3d developer computer science",
        },
        {
          name: `subject`,
          content: "Software engineering",
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: "@gabrielgiord",
        },
        {
          name: `twitter:site`,
          content: "@gabrielgiord",
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
      script={[
        helmetJsonLdProp({
          "@context": "https://schema.org",
          "@type": "Person",
          name: author,
          gender: `male`,
          alternateName: "Gabriel Giordano Medina",
          nationality: `Brazillian`,
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: ["FIAP"],
          },
          description: `Software Engineer`,
          disambiguatingDescription: "Software Engineer at SumUp",
          knowsAbout: ["Compilers", "Computer Science"],
          image:
            "https://s.gravatar.com/avatar/6ea1b94c835fed259ad11d2133793a73?s=512",
          email: "mailto:hello@gabrielgiordano.com",
          url: "http://gabrielgiordano.com",
          sameAs: [
            "https://twitter.com/gabrielgiord",
            "https://www.youtube.com/c/GabrielGiordanoMedina",
            "https://www.linkedin.com/in/gabrielgiordano/",
            "https://github.com/gabrielgiordan",
            "https://gabrielgiordano.com",
          ],
          jobTitle: "Software Engineer",
        }),
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
