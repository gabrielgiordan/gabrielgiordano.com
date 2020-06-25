import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import MailIcon from "../../images/mail-icon.inline.svg";
import GitHubIcon from "../../images/github-icon.inline.svg";
import LinkedInIcon from "../../images/linkedin-icon.inline.svg";
import MediumIcon from "../../images/medium-icon.inline.svg";
import { IconLink } from "../Link";

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
    markdownRemark: {
      frontmatter: { contact: data },
    },
  } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { page: { eq: "/" } }) {
        frontmatter {
          contact {
            mail
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
      <IconLink href={`mailto:${data.mail}`}>
        <MailIcon />
      </IconLink>
      <IconLink href={data.github} target="_blank">
        <GitHubIcon />
      </IconLink>
      <IconLink href={data.linkedin} target="_blank">
        <LinkedInIcon />
      </IconLink>
      <IconLink href={data.medium} target="_blank">
        <MediumIcon />
      </IconLink>
    </ContactContainer>
  );
}

export default ContactIcons;
