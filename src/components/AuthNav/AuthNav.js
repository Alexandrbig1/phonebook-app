import { Link } from "./AuthNav.styled";
import Button from "@mui/material/Button";

export default function AuthNav() {
  return (
    <>
      <Link to="/login">
        <Button color="inherit">Sign In</Button>
      </Link>
      <Link to="/register">
        <Button color="inherit">Sign Up</Button>
      </Link>
    </>
  );
}
