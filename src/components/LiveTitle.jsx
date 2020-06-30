import PropTypes from 'prop-types';
import React from 'react';
import Typical from 'react-typical';
import styled, { css } from 'styled-components';

import { Title } from './Text';

const propTypes = {
  liveTitle: PropTypes.arrayOf(PropTypes.string),
  loop: PropTypes.number,
};

const defaultProps = {
  liveTitle: [],
  loop: Infinity,
};

const LiveTitleContainer = styled.div`
  ${({ theme }) => css`
    width: 0;
    height: 29em;

    @media (max-width: ${theme.breakpoints.t}) {
      height: 15em;
    }

    @media (max-height: ${theme.breakpoints.ml}) {
      height: 3em;
      width: auto;
    }

    @media (max-height: ${theme.breakpoints.t}) and (min-width: ${theme
        .breakpoints.l}) {
      height: 9em;
      width: auto;
    }

    @media (max-height: ${theme.breakpoints.ml}) and (max-width: ${theme
        .breakpoints.t}) {
      height: 6em;
    }

    @media (max-width: ${theme.breakpoints.ms}) {
      height: 13em;
    }
  `}
`;

const Typing = styled(Typical)`
  ${({ theme }) => css`
    &:after {
      background-color: ${theme.colors.p80};
    }
  `}
`;

function LiveTitle({ liveTitle, loop }) {
  return (
    <LiveTitleContainer>
      <Title as="p">
        <Typing
          role="region"
          aria-live="off"
          aria-label={liveTitle.join(' ')}
          steps={liveTitle.flatMap((e) => [e, 2000])}
          loop={loop}
          wrapper="span"
        />
      </Title>
    </LiveTitleContainer>
  );
}

LiveTitle.propTypes = propTypes;
LiveTitle.defaultProps = defaultProps;

export default LiveTitle;
