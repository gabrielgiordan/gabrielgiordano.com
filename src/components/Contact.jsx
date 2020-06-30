import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import MailIconSVG from '../images/svg/mail-icon.inline.svg';
import GitHubIconSVG from '../images/svg/github-icon.inline.svg';
import LinkedInIconSVG from '../images/svg/linkedin-icon.inline.svg';
import MediumIconSVG from '../images/svg/medium-icon.inline.svg';
import { IconLink } from './Link';

const ContactContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    margin-right: 1em;
  }
`;

function ContactIcons() {
  const {
    site: {
      siteMetadata: { author, authorSocial },
    },
  } = useStaticQuery(graphql`
    query Contact {
      site {
        siteMetadata {
          author {
            email
          }
          authorSocial {
            github
            linkedin
            medium
          }
        }
      }
    }
  `);

  return (
    <ContactContainer>
      <IconLink href={author.email} rel="author">
        <MailIconSVG role="img" aria-label="Mail" />
      </IconLink>
      <IconLink
        href={authorSocial.github}
        rel="author noopener"
        target="_blank"
      >
        <GitHubIconSVG role="img" aria-label="GitHub" />
      </IconLink>
      <IconLink
        href={authorSocial.linkedin}
        rel="author noopener"
        target="_blank"
      >
        <LinkedInIconSVG role="img" aria-label="LinkedIn" />
      </IconLink>
      <IconLink
        href={authorSocial.medium}
        rel="author noopener"
        target="_blank"
      >
        <MediumIconSVG role="img" aria-label="Medium" />
      </IconLink>
    </ContactContainer>
  );
}

export default ContactIcons;
