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
  SignInErrorMessage,
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
    <TypoStyled
      variant="body2"
      align="center"
      {...props}
      style={{ fontSize: "1rem" }}
    >
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
  const [errors, setErrors] = React.useState({});

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const newErrors = {};

    if (email.trim().length === 0) {
      newErrors.email = "Email address is required";
    } else if (!/@/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (!/\.[a-z]{2,}$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (password.length < 6 || password.length > 18) {
      newErrors.password = "Password must be between 6 and 18 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setErrors({});
      dispatch(
        logIn({
          email: email,
          password: password,
        })
      );
      form.reset();
    }
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
              mt: 2,
              width: { sm: "396px", xs: "312px" },
            }}
          >
            <div style={{ position: "relative" }}>
              <TextFieldStyled
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={errors.email ? true : false}
              />
              {errors.email && (
                <SignInErrorMessage>{errors.email}</SignInErrorMessage>
              )}
            </div>

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
                error={errors.password ? true : false}
              />
              {errors.password && (
                <SignInErrorMessage>{errors.password}</SignInErrorMessage>
              )}
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
                <Link href="#" variant="body2" style={{ fontSize: "1rem" }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#/register"
                  variant="body2"
                  style={{ fontSize: "1rem" }}
                >
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
