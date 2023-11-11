import styled from "styled-components";
import { TbSunHigh, TbMoon } from "react-icons/tb";

export const SwitcherTheme = styled.button`
  border: none;
  outline: none;
  background-color: ${(p) => p.theme.colors.mainBgColor};
  background: none;
  color: ${(p) => p.theme.colors.bgWrapperLight};
  border-radius: 1.2rem;
  cursor: pointer;
  position: absolute;
  top: 20px;
  left: 24px;
  transition: 0.3s;
`;

export const IconClickLight = styled(TbSunHigh)`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherBg};
  }
`;
export const IconClickDark = styled(TbMoon)`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 3.6rem;
  transition: 0.3s;
  padding: 0.6rem;
  border-radius: 50%;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherBg};
  }
`;
