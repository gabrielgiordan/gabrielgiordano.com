import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Base from '../components/Base';
import LiveTitle from '../components/LiveTitle';
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
    query Home {
      file(relativePath: { eq: "image.png" }) {
        childImageSharp {
          fixed(width: 1200, height: 630) {
            src
          }
        }
      }
      markdownRemark(frontmatter: { slug: { eq: "/" } }) {
        frontmatter {
          lang
          seo {
            title
            description
          }
          content {
            liveTitle
            title
          }
        }
        html
      }
    }
  `);

  return (
    <>
      <SEO
        lang={data.lang}
        title={data.seo.title}
        description={data.seo.description}
        image={image.src}
      />
      <Base>
        <LiveTitle liveTitle={data.content.liveTitle} loop={Infinity} />
        <Article title={data.content.title} html={content} />
        <ContactIcons />
        <Footer />
      </Base>
    </>
  );
}

export default Home;
