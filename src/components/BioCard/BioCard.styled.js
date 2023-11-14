import styled from "styled-components";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { FaTwitter, FaDribbble } from "react-icons/fa";

export const CardStyled = styled.div`
  padding: 1.2rem;
  border-radius: 0.8rem;
  border: 1px solid ${(p) => p.theme.colors.switcherDarkBg};
  box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.theme.colors.headerColor};
`;

export const CardContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  height: 100%;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const AvatarTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.textColor};
  padding: 0.6rem;
  background-color: ${(p) => p.theme.colors.switcherBg};
  border-radius: 12rem;
  transition: 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherDarkBg};
  }
`;
export const GithubIcon = styled(AiFillGithub)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.textColor};
  padding: 0.6rem;
  background-color: ${(p) => p.theme.colors.switcherBg};
  border-radius: 12rem;
  transition: 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherDarkBg};
  }
`;
export const DribbleIcon = styled(FaDribbble)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.textColor};
  padding: 0.6rem;
  background-color: ${(p) => p.theme.colors.switcherBg};
  border-radius: 12rem;
  transition: 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherDarkBg};
  }
`;
export const TwitterIcon = styled(FaTwitter)`
  font-size: 3.2rem;
  color: ${(p) => p.theme.colors.textColor};
  padding: 0.6rem;
  background-color: ${(p) => p.theme.colors.switcherBg};
  border-radius: 12rem;
  transition: 0.3s;

  &:hover {
    background-color: ${(p) => p.theme.colors.switcherDarkBg};
  }
`;

export const CardTitle = styled.h3`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
`;

export const CardText = styled.p`
  color: ${(p) => p.theme.colors.textColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.4;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LinkIcon = styled.a`
  display: block;
`;
