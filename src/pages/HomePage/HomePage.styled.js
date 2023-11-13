import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const HomeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 60%;
  margin-top: 72px;
`;

export const HomeTitle = styled.h1`
  text-align: center;
  color: ${(p) => p.theme.colors.textColor};
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
`;
