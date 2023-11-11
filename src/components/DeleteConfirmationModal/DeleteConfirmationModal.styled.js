import Modal from "react-modal";
import styled from "styled-components";

export const CustomModal = styled(Modal)`
  &.ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100vh;
    position: relative;
  }

  &.ReactModal__Content {
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    max-width: 40rem;
    border-radius: 0.4rem;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, 0.1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 0 auto;
  width: 32rem;
  height: 12rem;
  background-color: ${(p) => p.theme.colors.modalBg};
  border-radius: 0.4rem;
  padding: 1.2rem;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 2.4rem;
`;

export const Button = styled.button`
  padding: 0.8rem 2.4rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 0.4rem;
  color: #fffaff;
  background-color: ${(p) => (p.color === "confirm" ? "#d90429" : "#099268")};
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: ${(p) => (p.color === "confirm" ? "#e03131" : "#087f5b")};
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.textColor};
  color: #fffaff;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
`;
