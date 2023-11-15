import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import DrawerAppBar from "./HeaderNavigation/HeaderNavigation";
import Loader from "./Loader/Loader";

const theme = {
  light: {
    colors: {
      mainBgColor: "#e9ecef",
      textColor: "#050505",
      textColorLowOp: "rgba(5, 5, 5, 0.7)",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#f8f9fa",
      containerColor: "#dee2e6",
      itemsEven: "#f8f9fa",
      itemsOdd: "#dee2e6",
      boxShadow: "rgba(255, 255, 255, 0.5)",
      switcherBg: "rgba(206,	212,	218, 0.1)",
      switcherDarkBg: "rgba(206,	212,	218, 0.5)",
      switcherHoverBg: "#3083d6",
      inputBg: "#f8f9fa",
      modalBg: "#6c757d",
      headerColor: "#1a76d2",
      btnHoverThemeColor: "#176abd",
      headerTextColor: "#F3F3F3",
      homeBgColor: "rgba(233, 236, 239, 0.7)",
      cardBgColor: "rgba(255, 255, 255, 0.7)",
      signIn: "#0096c7",
      signUp: "#ff5400",
    },
  },
  dark: {
    colors: {
      mainBgColor: "#1E1E1E",
      textColor: "#fffaff",
      textColorLowOp: "rgba(255, 250, 255, 0.7)",
      contactBtn: "#2982ff",
      deleteBtn: "#ff2929",
      bgWrapper: "#0b0014",
      containerColor: "#050505",
      itemsEven: "#212529",
      itemsOdd: "#343a40",
      boxShadow: "none",
      switcherBg: "rgba(30,	30,	30, 0.1)",
      switcherDarkBg: "rgba(30,	30,	30, 0.5)",
      switcherHoverBg: "#5d44a5",
      inputBg: "#050505",
      modalBg: "#1E1E1E",
      headerColor: "#4C309C",
      btnHoverThemeColor: "#5e45a6",
      headerTextColor: "#F3F3F3",
      homeBgColor: "rgba(30, 30, 30, 0.7)",
      cardBgColor: "rgba(0, 0, 0, 0.7)",
      signIn: "#9d4edd",
      signUp: "#ff5400",
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
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </ThemeProvider>
  );
}
