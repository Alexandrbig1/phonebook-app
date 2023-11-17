import styled from "styled-components";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

export const List = styled.li`
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  border-radius: 0.2rem;

  &:nth-child(even) {
    background-color: ${(p) => p.theme.colors.itemsEven};
  }
  &:nth-child(odd) {
    background-color: ${(p) => p.theme.colors.itemsOdd};
  }

  &:hover {
    background-color: ${(p) => p.theme.colors.listItemsHover};
  }

  @media (max-width: 365px) {
    grid-template-columns: 1.25fr 1.75fr;
  }
`;

export const ContactListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactAvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  @media (max-width: 570px) {
    gap: 0.8rem;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;

  @media (max-width: 420px) {
    font-size: 1.2rem;
  }
`;

export const PhoneIcon = styled(FaPhone)`
  font-size: 1.6rem;
  color: #2f9e44;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ContactIcon = styled(BsFillPersonVcardFill)`
  width: 24px;
  height: 24px;
`;

export const AvatarImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.2rem;
  border-radius: 50rem;

  @media (max-width: 570px) {
    width: 3.6rem;
    height: 3.6rem;
    margin-right: 0;
  }

  @media (max-width: 420px) {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const AvatarImgIcon = styled(FaUserAlt)`
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1.2rem;
  border-radius: 50rem;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background: transparent;
  padding: 4px 4px;
  border-radius: 24px;
  cursor: pointer;

  transition: 0.3s;
`;

export const ContactDelete = styled(MdOutlineDeleteForever)`
  width: 24px;
  height: 24px;
  transition: 0.3s;

  color: ${(p) => p.theme.colors.deleteBtn};
  &:hover {
    color: #fe4f4f;
  }
`;
