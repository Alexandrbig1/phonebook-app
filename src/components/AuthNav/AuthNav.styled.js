import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  transition: 0.4s;
`;
