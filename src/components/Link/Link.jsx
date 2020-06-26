import styled, { css } from 'styled-components';
import { Text } from '../Text';

const Link = styled(Text).attrs({ as: 'a' })`
  ${({ theme }) => css`
    font-size: inherit;
    text-decoration: none;

    &:hover {
      color: ${theme.colors.p30};
      transition: color 150ms linear;
      transition-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
    }
  `}
`;

const IconLink = styled(Link)`
  ${({ theme }) => css`
    svg {
      fill: ${theme.colors.n10};
      width: 3em;
      height: 3em;

      @media (max-width: ${theme.breakpoints.t}) {
        width: 1.5em;
        height: 1.5em;
      }
    }

    &:hover {
      svg {
        fill: ${theme.colors.p30};
        transition: fill 150ms linear;
        transition-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
      }
    }

    padding: 0.5em;
  `}
`;

const SmallIconLink = styled(IconLink)`
  ${({ theme }) => css`
    svg {
      width: 1.25em;
      height: 1.25em;

      @media (max-width: ${theme.breakpoints.t}) {
        width: 1em;
        height: 1em;
      }
    }

    padding: 0.5em;
  `}
`;

export { Link, IconLink, SmallIconLink };
