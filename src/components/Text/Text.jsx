import styled, { css } from "styled-components";

const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.fonts.p};
    font-size: 1.15em;
    line-height: 1.5em;
    color: ${theme.colors.n0};

    @media (max-width: ${theme.breakpoints.t}) {
      font-size: 1em;
    }

    display: block;
    margin: 0;
  `}
`;

const SmallText = styled(Text)`
  ${({ theme }) => css`
    font-size: 1em;

    @media (max-width: ${theme.breakpoints.t}) {
      font-size: 0.9em;
    }

    @media (max-width: ${theme.breakpoints.ms}) {
      font-size: 0.8em;
    }
  `}
`;

const Title = styled(Text).attrs({ as: "h1" })`
  ${({ theme }) => css`
    display: inline;
    font-weight: 700;
    font-size: 3em;
    color: ${theme.colors.n0};
    background-color: ${theme.colors.p70};

    @media (max-width: ${theme.breakpoints.t}) {
      font-size: 1.5em;
    }

    @media (max-width: ${theme.breakpoints.ms}) {
      font-size: 1.25em;
    }
  `}
`;

const Subtitle = styled(Text).attrs({ as: "h2" })`
  ${({ theme }) => css`
    display: inline;
    font-size: 1.5em;
    font-weight: 700;
    color: ${theme.colors.n10};

    @media (max-width: ${theme.breakpoints.t}) {
      font-size: 1em;
    }
  `}
`;

export { Text, SmallText, Title, Subtitle };
