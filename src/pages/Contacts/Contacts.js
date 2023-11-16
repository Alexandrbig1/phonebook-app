import { useEffect, useState } from "react";
import Filter from "../../components/Filter/Filter";
import FormSubmit from "../../components/FormSubmit/FormSubmit";
import ContactsList from "../../components/ContactsList/ContactsList";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/selectors";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../components/Loader/Loader";
import { fetchContacts } from "../../redux/operations";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import { AppButton, AppButtonOpen } from "../../components/AppButton/AppButton";
import {
  ContactsDiv,
  ContactsTitle,
  Container,
  PhoneBookTitle,
  AppDiv,
  TitleWrapper,
  FormWrapper,
} from "./Contacts.styled";

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [isOpen, setIsOpen] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);

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

  return (
    <>
      {initialLoading ? (
        <Loader />
      ) : (
        <Container>
          <TitleWrapper open={isOpen}>
            <PhoneBookTitle>Phonebook</PhoneBookTitle>

            {!isOpen ? (
              <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                title="Open"
                placement="right"
              >
                <AppButton onClick={() => setIsOpen(!isOpen)}>
                  <AppButtonOpen />
                </AppButton>
              </Tooltip>
            ) : (
              <AppButton onClick={() => setIsOpen(!isOpen)}>
                <AppButtonOpen />
              </AppButton>
            )}
          </TitleWrapper>

          <FormWrapper open={isOpen}>{isOpen && <FormSubmit />}</FormWrapper>

          <AppDiv>
            {contacts.length !== 0 && (
              <ContactsDiv>
                <ContactsTitle>Contacts</ContactsTitle>
                <Filter />
                <ContactsList />
              </ContactsDiv>
            )}
          </AppDiv>
        </Container>
      )}
      <ToastContainer />
    </>
  );
}
