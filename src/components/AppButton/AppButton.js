import styled from "styled-components";
import { FaRegAddressCard } from "react-icons/fa";

export const AppButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 32px;
  color: inherit;
`;

export const AppButtonOpen = styled(FaRegAddressCard)`
  color: ${(p) => p.theme.colors.textColor};
  font-size: 24px;

  &:hover {
    color: ${(p) => p.theme.colors.contactBtn};
  }
`;
