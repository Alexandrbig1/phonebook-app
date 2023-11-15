import * as React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import {
  BoxSignUpStyled,
  ContainerSignUpStyled,
  EyeIconSignUpWrapper,
  EyePasswordSignUpWrap,
  LinkSignUpStyled,
  SignUpButtonEl,
  SignUpButtonStyled,
  SignUpIcon,
  SignUpLabelCheckbox,
  SignUpStyledCheckbox,
  SignUpWrapper,
  TextFieldSignUpStyled,
  TypoSignUpStyled,
  TypoTitleSignUpStyled,
} from "./SignUp.styled";

function Copyright(props) {
  return (
    <TypoSignUpStyled variant="body2" align="center" {...props}>
      {"Alex Smagin © "}
      <LinkSignUpStyled
        color="inherit"
        href="https://alexandrbig1.github.io/goit-react-hw-08-phonebook/"
      >
        PhoneBook
      </LinkSignUpStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoSignUpStyled>
  );
}

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.name.value);
    console.log(form.elements.email.value);
    console.log(form.elements.password.value);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ContainerSignUpStyled>
      <BoxSignUpStyled>
        <SignUpWrapper>
          <SignUpIcon />
        </SignUpWrapper>
        <TypoTitleSignUpStyled component="h1" variant="h5">
          Sign up
        </TypoTitleSignUpStyled>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 1,
            width: { sm: "396px", xs: "328px" },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextFieldSignUpStyled
                autoComplete="given-name"
                name="name"
                required
                fullWidth
                id="name"
                label="Full Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextFieldSignUpStyled
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <EyePasswordSignUpWrap>
                <TextFieldSignUpStyled
                  label="Password"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  id="password"
                  autoComplete="new-password"
                  type={showPassword ? "text" : "password"}
                />
                <EyeIconSignUpWrapper onClick={handleClickShowPassword}>
                  {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
                </EyeIconSignUpWrapper>
              </EyePasswordSignUpWrap>
            </Grid>
            <Grid item xs={12}>
              <SignUpLabelCheckbox>
                <SignUpStyledCheckbox value="allowExtraEmails" />I want to
                receive inspiration, marketing promotions and updates via email.
              </SignUpLabelCheckbox>
            </Grid>
          </Grid>
          <SignUpButtonStyled>
            <SignUpButtonEl type="submit" color="inherit">
              Sign Up
            </SignUpButtonEl>
          </SignUpButtonStyled>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </BoxSignUpStyled>
      <Copyright sx={{ mt: 5 }} />
    </ContainerSignUpStyled>
  );
}
