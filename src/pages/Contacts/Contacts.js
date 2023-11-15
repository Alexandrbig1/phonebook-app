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
import {
  AppDiv,
  AppTitleH1,
  AppTitleH2,
  AppContactsDiv,
  AppContainer,
  AppWrapper,
} from "../../components/App.styled";
import {
  AppButton,
  AppButtonOpen,
  AppButtonClose,
} from "../../components/AppButton/AppButton";

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
      )}
      <ToastContainer />
    </>
  );
}
