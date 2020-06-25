import styled, { css } from "styled-components";
import { Title } from "./Text";

const Logo = styled(Title).attrs({ as: "p" })`
  ${({ theme }) => css`
    position: fixed;
    top: 2vh;
    left: 2vh;
    font-size: 3em;
    text-align: center;
    width: 1.5em;
    height: 1.5em;
    margin-bottom: 1em;
    background-color: ${theme.colors.n100};
  `}
`;

export default Logo;
