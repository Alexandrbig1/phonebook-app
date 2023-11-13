import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import FormSubmit from "./FormSubmit/FormSubmit";
import ContactsList from "./ContactsList/ContactsList";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../redux/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./Loader/Loader";
import { fetchContacts } from "../redux/operations";
import {
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
  AppContainer,
  AppWrapper,
} from "./App.styled";
import {
  AppButton,
  AppButtonOpen,
  AppButtonClose,
} from "./AppButton/AppButton";
import DrawerAppBar from "./HeaderNavigation/HeaderNavigation";
// import HomePage from "../pages/HomePage/Home";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import Layout from "./Layout";
import { useAuth } from "../hooks";
import { refreshUser } from "../redux/auth/operations";
import { RestrictedRoute } from "./RestrictRoute";
import { PrivateRoute } from "./PrivateRoute";
// import Contacts from "../pages/Contacts/Contacts";

const HomePage = lazy(() => import("../pages/HomePage/Home"));
const Contacts = lazy(() => import("../pages/Contacts/Contacts"));
const Login = lazy(() => import("../pages/SignIn/SignIn"));
const Register = lazy(() => import("../pages/SignUp/SignUp"));
const NotFound = lazy(() => import("../pages/NotFoundPage/NotFoundPage"));

// const theme = {
//   light: {
//     colors: {
//       mainBgColor: "#e9ecef",
//       textColor: "#050505",
//       contactBtn: "#2982ff",
//       deleteBtn: "#ff2929",
//       bgWrapper: "#f8f9fa",
//       containerColor: "#dee2e6",
//       itemsEven: "#f8f9fa",
//       itemsOdd: "#dee2e6",
//       boxShadow: "rgba(255, 255, 255, 0.5)",
//       switcherBg: "rgba(206,	212,	218, 0.1)",
//       switcherHoverBg: "#3083d6",
//       inputBg: "#f8f9fa",
//       modalBg: "#6c757d",
//       headerColor: "#1a76d2",
//       headerTextColor: "#F3F3F3",
//     },
//   },
//   dark: {
//     colors: {
//       mainBgColor: "#1E1E1E",
//       textColor: "#fffaff",
//       contactBtn: "#2982ff",
//       deleteBtn: "#ff2929",
//       bgWrapper: "#0b0014",
//       containerColor: "#050505",
//       itemsEven: "#212529",
//       itemsOdd: "#343a40",
//       boxShadow: "none",
//       switcherBg: "rgba(30,	30,	30, 0.1)",
//       switcherHoverBg: "#5d44a5",
//       inputBg: "#050505",
//       modalBg: "#1E1E1E",
//       headerColor: "#4C309C",
//       headerTextColor: "#F3F3F3",
//     },
//   },
// };

export default function App() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts);
  // const [isOpen, setIsOpen] = useState(false);
  // const [initialLoading, setInitialLoading] = useState(true);
  // const [isDarkTheme, setIsDarkTheme] = useState(() => {
  //   const savedTheme = localStorage.getItem("theme");
  //   return savedTheme === "light" ? false : true;
  // });

  // useEffect(() => {
  //   try {
  //     dispatch(fetchContacts())
  //       .unwrap()
  //       .catch((error) => {
  //         console.error("Error fetching contacts:", error);
  //       })
  //       .finally(() => {
  //         setInitialLoading(false);
  //       });
  //   } catch (error) {}
  // }, [dispatch]);

  // useEffect(() => {
  //   setIsOpen(contacts.length > 0);
  // }, [contacts]);

  // const toggleTheme = () => {
  //   setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  //   localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  // };

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
    // <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
    //   <GlobalStyle />
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
    //       }
    //     >
    //       <Route index element={<HomePage />} />
    //       <Route path="/contacts" element={<Contacts />} />
    //       <Route path="/login" element={<Login />} />
    //       <Route path="/register" element={<Register />} />
    //       <Route path="*" element={<NotFound />} />
    //     </Route>
    //   </Routes>
    // </ThemeProvider>

    // <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
    //   <GlobalStyle />
    /* <HomePage toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} /> */
    /* <header>
        <DrawerAppBar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      </header>
      {initialLoading ? (
        <Loader />
      ) : (
        <AppContainer>
          <AppWrapper open={isOpen}>
            <AppButton onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <AppButtonClose /> : <AppButtonOpen />}
            </AppButton>
            <AppDiv>
              {isOpen && (
                <>
                  <AppTitleH1>Phonebook</AppTitleH1>
                  <FormSubmit />
                  {contacts.length !== 0 && (
                    <AppContactsDiv>
                      <AppTitleH2>Contacts</AppTitleH2>
                      <Filter />
                      <ContactsList />
                    </AppContactsDiv>
                  )}
                </>
              )}
            </AppDiv>
          </AppWrapper>
        </AppContainer>
      )} */
    // <ToastContainer />
    // </ThemeProvider>
  );
}
