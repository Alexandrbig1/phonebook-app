import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const SharedLinkStyles = styled(NavLink)`
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  transition: 0.4s;
  border-radius: 0.4rem;
`;

export const SignInLink = styled(SharedLinkStyles)`
  background-color: ${(p) => p.theme.colors.signIn};
`;

export const SignUpLink = styled(SharedLinkStyles)`
  background-color: ${(p) => p.theme.colors.signUp};
`;
