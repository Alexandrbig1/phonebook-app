import styled from "styled-components";
import { MdOutlineManageAccounts, MdPersonSearch } from "react-icons/md";
import { BsDatabaseLock } from "react-icons/bs";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1.2rem;
  border-radius: 0.8rem;
  border: 1px solid ${(p) => p.theme.colors.switcherDarkBg};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  background-color: ${(p) => p.theme.colors.cardBgColor};
`;

export const BioCardTitle = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const BioCardText = styled.p`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

export const StyledManageAccountsIcon = styled(MdOutlineManageAccounts)`
  font-size: 3.6rem;
  border-radius: 12rem;
  padding: 0.6rem;
  color: ${(p) => p.theme.colors.textColor};
  background-color: ${(p) => p.theme.colors.switcherDarkBg};
`;

export const StyledPersonSearchIcon = styled(MdPersonSearch)`
  font-size: 3.6rem;
  border-radius: 12rem;
  padding: 0.6rem;
  color: ${(p) => p.theme.colors.textColor};
  background-color: ${(p) => p.theme.colors.switcherDarkBg};
`;

export const StyledDatabaseLockIcon = styled(BsDatabaseLock)`
  font-size: 3.6rem;
  border-radius: 12rem;
  padding: 0.6rem;
  color: ${(p) => p.theme.colors.textColor};
  background-color: ${(p) => p.theme.colors.switcherDarkBg};
`;

export const CardsTextWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.4rem;
  max-width: 90%;

  @media (max-width: 1030px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    display: block;
  }
`;

export const CardsTextItems = styled.li`
  width: 100%;
  max-height: 28rem;
  @media (max-width: 450px) {
    margin-bottom: 1.2rem;
  }
`;
