import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Base from '../components/Base';
import TypingTitle from '../components/TypingTitle';
import ContactIcons from '../components/Contact';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import Article from '../components/Article';

function Home() {
  const {
    file: {
      childImageSharp: { fixed: image },
    },
    markdownRemark: { frontmatter: data, html: content },
  } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "image.png" }) {
        childImageSharp {
          fixed(width: 1200) {
            src
          }
        }
      }
      markdownRemark(frontmatter: { page: { eq: "/" } }) {
        frontmatter {
          quotes
          title
        }
        html
      }
    }
  `);

  return (
    <>
      <SEO title="Home" image={image.src} />
      <Base>
        <TypingTitle quotes={data.quotes} loop={Infinity} />
        <Article title={data.title} html={content} />
        <ContactIcons />
        <Footer />
      </Base>
    </>
  );
}

export default Home;
