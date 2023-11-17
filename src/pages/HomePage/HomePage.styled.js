import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 6.4rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  background: linear-gradient(
      ${(p) => p.theme.colors.homeBgColor},
      ${(p) => p.theme.colors.homeBgColor}
    ),
    url(${process.env.PUBLIC_URL}/images/bg1.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2.4rem 0;

  @media (max-width: 800px) {
    padding: 2.4rem 1.2rem;
  }
`;

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 2.4rem;

  @media (max-width: 600px) {
    gap: 1.2rem;
  }
`;

export const HomeTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  max-width: 75%;
  margin-bottom: 5.2rem;

  @media (max-width: 980px) {
    max-width: 85%;
  }

  @media (max-width: 535px) {
    margin-bottom: 3.2rem;
  }
`;

export const HomeTitle = styled.h1`
  text-align: center;
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Robot", sans-serif;
  font-size: 72px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
  text-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);

  @media (max-width: 980px) {
    font-size: 64px;
  }

  @media (max-width: 800px) {
    font-size: 52px;
  }

  @media (max-width: 660px) {
    font-size: 48px;
  }

  @media (max-width: 525px) {
    font-size: 42px;
  }

  @media (max-width: 440px) {
    font-size: 36px;
  }

  @media (max-width: 374px) {
    font-size: 32px;
  }

  @media (max-width: 325px) {
    font-size: 28px;
  }
`;

export const HomeTitleSpan = styled.span`
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: ${(p) => p.theme.colors.headerColorLowOp};
  -webkit-background-clip: text;
  -webkit-text-stroke-width: 1px;
`;

export const HomeSubTitle = styled.h3`
  color: ${(p) => p.theme.colors.textColorLowOp};
  font-family: "Robot", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  margin-top: -1.2rem;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke-width: 1px;
  text-align: end;

  @media (max-width: 980px) {
    font-size: 18px;
    margin-top: -1rem;
  }

  @media (max-width: 800px) {
    font-size: 16px;
    margin-top: -0.8rem;
  }

  @media (max-width: 660px) {
    margin-top: -0.6rem;
  }

  @media (max-width: 525px) {
    font-size: 14px;
    margin-top: -0.4rem;
  }

  @media (max-width: 360px) {
    font-size: 14px;
  }

  @media (max-width: 325px) {
    font-size: 12px;
    margin-top: -0.2rem;
  }
`;

export const HomeText = styled.p`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Raleway", sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
  max-width: 90%;

  @media (max-width: 1200px) {
    max-width: 100%;
  }
`;
