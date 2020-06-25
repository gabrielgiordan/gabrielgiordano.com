import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { Text, Subtitle } from "../Text";

const ContentContainer = styled.div`
  ${({ theme }) => css`
    width: 42em;

    @media (max-width: ${theme.breakpoints.t}) {
      width: auto;
    }
  `}
`;

function Article({ title, html }) {
  return (
    <ContentContainer>
      <Subtitle>{title}</Subtitle>
      <Text dangerouslySetInnerHTML={{ __html: html }} />
    </ContentContainer>
  );
}

Article.propTypes = {
  title: PropTypes.node.isRequired,
  html: PropTypes.node.isRequired,
};

export default Article;
