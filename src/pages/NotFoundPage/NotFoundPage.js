import {
  NotFoundContainer,
  NotFoundContent,
  Heading,
  Paragraph,
  StyledLink,
} from "./NotFound.styled";

export default function NotFoundPage() {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <Heading>404</Heading>
        <Paragraph>
          Oops! The page you are looking for might be in another castle.
        </Paragraph>
        <StyledLink to="/">Go Home</StyledLink>
      </NotFoundContent>
    </NotFoundContainer>
  );
}
