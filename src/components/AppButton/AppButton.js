import styled from "styled-components";
import { BiCaretDownCircle, BiCaretUpCircle } from "react-icons/bi";

export const AppButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 40px;
  color: inherit;
`;

export const AppButtonOpen = styled(BiCaretDownCircle)`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 32px;

  &:hover {
    color: ${(p) => p.theme.colors.contactBtn};
  }
`;
export const AppButtonClose = styled(BiCaretUpCircle)`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 32px;

  &:hover {
    color: ${(p) => p.theme.colors.contactBtn};
  }
`;
