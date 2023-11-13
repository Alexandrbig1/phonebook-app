import styled from "styled-components";
import Toolbar from "@mui/material/Toolbar";
import { NavLink } from "react-router-dom";

export const ToolbarStyled = styled(Toolbar)`
  background-color: ${(p) => p.theme.colors.headerColor};
  color: ${(p) => p.theme.colors.headerTextColor};
`;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  transition: 0.4s;
`;
