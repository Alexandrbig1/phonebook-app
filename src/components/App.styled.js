import styled from "styled-components";

export const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  width: 300px;
`;

export const AppTitleH1 = styled.h1`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
`;
export const AppTitleH2 = styled.h1`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  text-transform: uppercase;
`;

export const AppContactsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  width: 300px;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 800px;
  min-height: 660px;
  background-color: ${(p) => p.theme.colors.containerColor};
  box-shadow: 15px 15px 50px 40px ${(p) => p.theme.colors.boxShadow},
    -15px -15px 50px 40px ${(p) => p.theme.colors.boxShadow};

  margin: 0 auto;
  border-radius: 12px;
  position: relative;
`;

export const AppWrapper = styled.div`
  width: 340px;
  padding: ${(props) => (props.open ? "20px" : "0")};
  background-color: ${(p) => p.theme.colors.mainBgColor};
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
