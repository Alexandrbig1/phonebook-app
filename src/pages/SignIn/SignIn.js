import * as React from "react";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { BsFillEyeSlashFill, BsFillEyeFill } from "react-icons/bs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  BoxStyled,
  ButtonEl,
  ButtonStyled,
  ContainerStyled,
  EyeIconWrapper,
  LabelCheckbox,
  LinkStyled,
  SignInIcon,
  SignInWrapper,
  StyledCheckbox,
  TextFieldStyled,
  TypoStyled,
  TypoTitleStyled,
  EyePasswordWrap,
} from "./SignIn.styled";

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 550,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function Copyright(props) {
  return (
    <TypoStyled variant="body2" align="center" {...props}>
      {"Alex Smagin © "}
      <LinkStyled
        color="inherit"
        href="https://alexandrbig1.github.io/goit-react-hw-08-phonebook/"
      >
        PhoneBook
      </LinkStyled>{" "}
      {new Date().getFullYear()}
      {"."}
    </TypoStyled>
  );
}

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <ThemeProvider theme={customTheme}>
      <ContainerStyled>
        <BoxStyled>
          <SignInWrapper>
            <SignInIcon />
          </SignInWrapper>
          <TypoTitleStyled component="h1" variant="h5">
            Sign in
          </TypoTitleStyled>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              mt: 1,
              width: { sm: "396px", xs: "328px" },
            }}
          >
            <TextFieldStyled
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <EyePasswordWrap>
              <TextFieldStyled
                label="Password"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                id="password"
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
              />
              <EyeIconWrapper onClick={handleClickShowPassword}>
                {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </EyeIconWrapper>
            </EyePasswordWrap>
            <LabelCheckbox>
              <StyledCheckbox value="remember" />
              Remember me
            </LabelCheckbox>
            <ButtonStyled>
              <ButtonEl type="submit" color="inherit">
                Sign In
              </ButtonEl>
            </ButtonStyled>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </BoxStyled>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </ContainerStyled>
    </ThemeProvider>
  );
}
