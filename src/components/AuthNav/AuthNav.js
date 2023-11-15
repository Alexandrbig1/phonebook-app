import { LinkWrapper, SignInLink, SignUpLink } from "./AuthNav.styled";
import Button from "@mui/material/Button";

export default function AuthNav() {
  return (
    <LinkWrapper>
      <SignInLink to="/login">
        <Button color="inherit">Sign In</Button>
      </SignInLink>
      <SignUpLink to="/register">
        <Button color="inherit">Sign Up</Button>
      </SignUpLink>
    </LinkWrapper>
  );
}
