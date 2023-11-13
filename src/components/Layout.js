import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
// import Loader from "./Loader/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

// import {
//   Nav,
//   Header,
//   Link,
//   Logo,
//   LogoLink,
//   LogoText,
//   LogoSpan,
// } from "./Layout/Layout.styled";
import DrawerAppBar from "./HeaderNavigation/HeaderNavigation";

const theme = {
  light: {
    colors: {
      mainBgColor: "#e9ecef",
      textColor: "#050505",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#f8f9fa",
      containerColor: "#dee2e6",
      itemsEven: "#f8f9fa",
      itemsOdd: "#dee2e6",
      boxShadow: "rgba(255, 255, 255, 0.5)",
      switcherBg: "rgba(206,	212,	218, 0.1)",
      switcherHoverBg: "#3083d6",
      inputBg: "#f8f9fa",
      modalBg: "#6c757d",
      headerColor: "#1a76d2",
      headerTextColor: "#F3F3F3",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#1E1E1E",
      textColor: "#fffaff",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#0b0014",
      containerColor: "#050505",
      itemsEven: "#212529",
      itemsOdd: "#343a40",
      boxShadow: "none",
      switcherBg: "rgba(30,	30,	30, 0.1)",
      switcherHoverBg: "#5d44a5",
      inputBg: "#050505",
      modalBg: "#1E1E1E",
      headerColor: "#4C309C",
      headerTextColor: "#F3F3F3",
    },
  },
};

export default function Layout() {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });
  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };
  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      <DrawerAppBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />

      {/* <Header>
        <LogoLink to="/">
          <Logo />
          <LogoText>
            Movies <LogoSpan>API</LogoSpan>
          </LogoText>
        </LogoLink>

        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </Header> */}
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="light"
        /> */}
      </main>
      <ToastContainer />
    </ThemeProvider>
  );
}
