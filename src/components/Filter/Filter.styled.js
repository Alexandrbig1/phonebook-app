import styled from "styled-components";
import { LuSearch } from "react-icons/lu";

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

export const FilterInput = styled.input`
  padding: 12px 24px;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: ${(p) => p.theme.colors.textColor};
  background-color: ${(p) => p.theme.colors.inputBg};
  width: 100%;
  margin-top: 0.4rem;
  font-size: 1.4rem;

  &:hover {
    box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &:focus-within {
    outline: 1px solid rgba(212, 143, 143, 0.658);
    box-shadow: 0 2px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    overflow: hidden;
    color: #777;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
  }
`;

export const FilterLabel = styled.label`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  position: relative;
`;

export const FilterSearchIcon = styled(LuSearch)`
  font-size: 2.2rem;
  position: absolute;
  top: 50%;
  right: 2.4rem;
  pointer-events: none;
`;
