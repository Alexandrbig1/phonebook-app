import styled from "styled-components";
import { BiSolidLockOpen } from "react-icons/bi";
import Button from "@mui/material/Button";
import Container from "@mui/material/Box";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

export const ContainerStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 6.4rem);
  padding: 1.2rem;
  overflow-x: hidden;
`;
export const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Form = styled(Box)`
  width: 100%;
`;

export const SignInWrapper = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(p) => p.theme.colors.headerColor};
`;

export const SignInIcon = styled(BiSolidLockOpen)`
  font-size: 2.2rem;
  color: ${(p) => p.theme.colors.headerTextColor};
`;

export const ButtonEl = styled(Button)`
  width: 100%;
  padding: 0.8rem;
`;

export const ButtonStyled = styled.div`
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 1.6rem;
  background-color: ${(p) => p.theme.colors.headerColor};
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  color: ${(p) => p.theme.colors.headerTextColor};
  font-family: "Raleway", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(p) => p.theme.colors.btnHoverThemeColor};
  }
`;

export const LabelCheckbox = styled.label`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Robot", sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  align-items: center;
  margin-left: -1rem;
  cursor: pointer;
`;

export const StyledCheckbox = styled(Checkbox)`
  .MuiSvgIcon-root {
    width: 1.6rem;
    height: 1.6rem;
    color: ${(p) => p.theme.colors.textColorLowOp};
  }

  &.Mui-checked .MuiSvgIcon-root {
    color: #1a76d2;
  }
`;

export const LinkStyled = styled(Link)`
  color: ${(p) => p.theme.colors.textColor};
`;
export const TypoStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.textColor};
`;
export const TypoTitleStyled = styled(Typography)`
  color: ${(p) => p.theme.colors.textColor};
`;
export const TextFieldStyled = styled(TextField)`
  input {
    color: ${(p) => p.theme.colors.textColor};
    background-color: ${(p) => p.theme.colors.inputBg};
    border-radius: 0.4rem;
    font-family: "Roboto", sans-serif;
    &:hover {
      outline: inset 1px ${(p) => p.theme.colors.textColorLowOp};
    }
    &:focus-within {
      outline: none;
    }
  }

  label {
    color: ${(p) => p.theme.colors.textColorLowOp};
    font-family: "Roboto", sans-serif;
  }
`;

export const EyePasswordWrap = styled.div`
  position: relative;
`;

export const EyeIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-35%);
  font-size: 2rem;
  color: ${(p) => p.theme.colors.textColorLowOp};
  &:hover {
    cursor: pointer;
  }
`;
