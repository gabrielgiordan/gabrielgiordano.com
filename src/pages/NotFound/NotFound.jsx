import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Base from '../../components/Base';
import Footer from '../../components/Footer';
import SEO from '../../components/SEO';
import TypingTitle from '../../components/TypingTitle';
import Article from '../../components/Article';

function NotFound() {
  const {
    markdownRemark: { frontmatter: data, html: content },
  } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { page: { eq: "/404" } }) {
        frontmatter {
          quotes
          title
        }
        html
      }
    }
  `);

  return (
    <Base>
      <SEO title={data.title} />
      <TypingTitle quotes={data.quotes} loop={1} />
      <Article title={data.title} html={content} />
      <Footer />
    </Base>
  );
}

export default NotFound;
