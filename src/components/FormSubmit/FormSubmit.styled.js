import styled from "styled-components";
import { Field, Form, ErrorMessage } from "formik";
import { HiUser, HiPhone } from "react-icons/hi2";

export const FormStyled = styled(Form)`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 4px;

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const FormStyledWrapper = styled.div`
  width: 100%;
`;

export const FormField = styled(Field)`
  padding: 8px 12px 8px 32px;
  width: 22rem;
  outline: none;
  border: none;
  border-radius: 4px;
  cursor: text cursor;
  color: ${(p) => p.theme.colors.textColor};
  background-color: ${(p) => p.theme.colors.inputBg};
  font-size: 1.4rem;

  &:hover {
    outline: solid 1px ${(p) => p.theme.colors.inputHover};
  }

  &:focus-within {
    outline: 1px solid rgba(143, 152, 212, 0.658);
    box-shadow: 0 2px 5px 1px ${(p) => p.theme.colors.inputHover};
  }

  &::placeholder {
    overflow: hidden;
    color: #777;
    font-family: "Roboto", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4;
  }

  @media (max-width: 420px) {
    width: 20rem;
  }
`;

export const FormInputWrapper = styled.div`
  position: relative;
`;

export const FormHiUser = styled(HiUser)`
  position: absolute;
  top: 50%;
  left: 0.6rem;
  color: ${(p) => p.theme.colors.textColor};

  transform: translateY(-50%);
`;
export const FormHiPhone = styled(HiPhone)`
  position: absolute;
  top: 50%;
  left: 0.6rem;
  color: ${(p) => p.theme.colors.textColor};

  transform: translateY(-50%);
`;

export const FormError = styled(ErrorMessage)`
  color: ${(p) => p.theme.colors.deleteBtn};
  position: absolute;
  bottom: -2.2rem;
  right: 0;
  color: ${(p) => p.theme.colors.deleteBtn};
  font-size: 1.2rem;
`;

export const FormLabel = styled.label`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const FormContactBtn = styled.button`
  border: none;
  outline: none;
  padding: 8px 20px;
  border-radius: 24px;
  cursor: pointer;
  background-color: ${(p) => p.theme.colors.contactBtn};
  transition: 0.3s;
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: ${(p) => p.theme.colors.contactHoverBtn};
  }

  &:active {
    transform: translateY(2px);
  }
`;
