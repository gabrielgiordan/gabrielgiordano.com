import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { SmallText } from "../Text";
import { SmallIconLink } from "../Link";
import GitHubIcon from "../../images/github-icon.inline.svg";
import GatsbyIcon from "../../images/gatsby-icon.inline.svg";
import ReactIcon from "../../images/react-icon.inline.svg";

const FooterContainer = styled.footer`
  display: flex;
  align-items: flex-end;

  opacity: 0.6;

  &:hover {
    opacity: 1;
    transition: opacity 150ms linear;
    transition-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
  }
`;

const FooterContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 1em;
`;

function Footer() {
  const {
    markdownRemark: {
      frontmatter: { footer: data },
    },
  } = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { page: { eq: "/" } }) {
        frontmatter {
          footer {
            repository
            gatsby
            react
          }
        }
      }
    }
  `);

  return (
    <FooterContainer>
      <FooterContentContainer>
        <SmallText>Open-sourced on </SmallText>
        <SmallIconLink
          href={data.repository}
          rel="external noopener"
          target="_blank"
        >
          <GitHubIcon role="img" aria-label="GitHub Repository" />
        </SmallIconLink>
        <SmallText>built with </SmallText>
        <SmallIconLink
          href={data.react}
          rel="external noopener"
          target="_blank"
        >
          <ReactIcon role="img" aria-label="React" />
        </SmallIconLink>
        <SmallText>,</SmallText>
        <SmallIconLink
          href={data.gatsby}
          rel="external noopener"
          target="_blank"
        >
          <GatsbyIcon role="img" aria-label="Gatsby" />
        </SmallIconLink>
        <SmallText>.</SmallText>
      </FooterContentContainer>
    </FooterContainer>
  );
}

export default Footer;
