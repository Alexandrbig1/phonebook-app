import styled from "styled-components";
import { BiCaretDownCircle, BiCaretUpCircle } from "react-icons/bi";

export const AppButton = styled.button`
  position: absolute;
  top: 16px;
  right: 24px;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 40px;
  color: inherit;
  z-index: 10;
`;

export const AppButtonOpen = styled(BiCaretDownCircle)`
  color: ${(p) => p.theme.colors.textColor};
  transition: 0.3s;
  font-size: 32px;

  &:hover {
    color: #2982ff;
  }
`;
export const AppButtonClose = styled(BiCaretUpCircle)`
  color: ${(p) => p.theme.colors.textColor};
  transition: 0.3s;
  font-size: 32px;

  &:hover {
    color: #2982ff;
  }
`;
