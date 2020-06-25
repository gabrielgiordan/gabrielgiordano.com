import React from "react";
import PropTypes from "prop-types";
import styled, {
  css,
  createGlobalStyle,
  ThemeProvider,
} from "styled-components";
import { normalize } from "styled-normalize";
import BlueprintPattern from "../../images/blueprint.svg";
import darkTheme from "./dark-theme";
import baseTheme from "./base-theme";

const propTypes = {
  children: PropTypes.node.isRequired,
};

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    ${normalize}

    html {
      box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }

    body {
      margin: 1vh;
      background-color: ${theme.colors.n100};
    }

    ::selection {
      color: ${theme.colors.n10};
      background: ${theme.colors.n100};
    }
  `}
`;

const GradientBackground = styled.div`
  ${({ theme }) => css`
    background: linear-gradient(
      90deg,
      ${theme.colors.n100},
      ${theme.colors.p100},
      ${theme.colors.p90},
      ${theme.colors.p80},
      ${theme.colors.p70}
    );
    background-size: 150% 150%;
    animation: gradient 15s linear infinite;
    animation-timing-function: cubic-bezier(0.4, 0.14, 0.3, 1);

    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `}
`;

const PatternBackground = styled.div`
  ${({ theme }) => css`
    background-image: url(${BlueprintPattern});

    background-size: 6em 6em;
    background-position: 5.75em 5.75em;

    @media (max-width: ${theme.breakpoints.ml}) {
      background-size: 3em 3em;
      background-position: 2.85em 2.85em;
    }
  `}
`;

const FlexParentContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 98vh;
    padding: 0 10vw;

    @media (max-width: ${theme.breakpoints.ml}) {
      height: 98vh;
      padding: 0 5vw;
    }

    @media (max-height: ${theme.breakpoints.ml}) {
      height: 120vh;
    }
  `}
`;

const FlexChildContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

function Base({ children }) {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <ThemeProvider theme={darkTheme}>
          <GlobalStyle />
          <GradientBackground>
            <PatternBackground>
              <FlexParentContainer>
                <FlexChildContainer>{children}</FlexChildContainer>
              </FlexParentContainer>
            </PatternBackground>
          </GradientBackground>
        </ThemeProvider>
      </ThemeProvider>
    </>
  );
}

Base.propTypes = propTypes;

export default Base;
