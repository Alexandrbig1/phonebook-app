import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 6.4rem);
  background-color: ${(p) => p.theme.colors.mainBgColor};
`;

export const NotFoundContent = styled.div`
  text-align: center;
  color: ${(p) => p.theme.colors.textColor};
`;

export const Heading = styled.h1`
  font-size: 8rem;
  margin-bottom: 0.6rem;
  color: ${(p) => p.theme.colors.headerColor};
`;

export const Paragraph = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.6rem 1rem;
  background-color: ${(p) => p.theme.colors.headerColor};
  color: ${(p) => p.theme.colors.headerTextColor};
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverThemeColor};
  }
`;
