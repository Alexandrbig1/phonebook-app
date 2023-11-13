import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { logOut } from "../../redux/auth/operations";
import { UserWrap, TextWrap, SpanName } from "./UserMenu.styled";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <UserWrap>
      <Button color="inherit" type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
      <TextWrap>
        <Avatar style={{ width: 32, height: 32 }} src="/broken-image.jpg" />{" "}
        <SpanName>{user.name}</SpanName>
      </TextWrap>
    </UserWrap>
  );
}
