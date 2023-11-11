import { useEffect, useState } from "react";
import Filter from "./Filter/Filter";
import FormSubmit from "./FormSubmit/FormSubmit";
import ContactsList from "./ContactsList/ContactsList";
import ThemeButton from "./ThemeButton/ThemeButton";
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
      switcherBg: "#ced4da",
      inputBg: "#f8f9fa",
      modalBg: "#6c757d",
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
      switcherBg: "#1E1E1E",
      inputBg: "#050505",
      modalBg: "#1E1E1E",
    },
  },
};

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isOpen, setIsOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "light" ? false : true;
  });

  useEffect(() => {
    try {
      dispatch(fetchContacts())
        .unwrap()
        .catch((error) => {
          console.error("Error fetching contacts:", error);
        })
        .finally(() => {
          setInitialLoading(false);
        });
    } catch (error) {}
  }, [dispatch]);

  useEffect(() => {
    setIsOpen(contacts.length > 0);
  }, [contacts]);

  const toggleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
    localStorage.setItem("theme", isDarkTheme ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={isDarkTheme ? theme.dark : theme.light}>
      <GlobalStyle />
      {initialLoading ? (
        <Loader />
      ) : (
        <AppContainer>
          <ThemeButton toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
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
      )}
      <ToastContainer />
    </ThemeProvider>
  );
}
