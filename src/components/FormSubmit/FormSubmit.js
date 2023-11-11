import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";
import {
  FormContactBtn,
  FormLabel,
  FormStyled,
  FormField,
  FormError,
  FormHiUser,
  FormHiPhone,
  FormInputWrapper,
} from "./FormSubmit.styled";

export default function FormSubmit() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(values) {
    const newValue = { ...values, id: nanoid() };

    if (!newValue.name || !newValue.phone) {
      return;
    }

    const contactExist = contacts.some((item) => item.name === newValue.name);

    if (contactExist) {
      toast.info(`${newValue.name} is already in contacts.`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success(`${newValue.name} added to your contacts.`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      dispatch(addContact(newValue));
    }

    setName("");
    setPhone("");
  }

  const formSchema = Yup.object({
    name: Yup.string()
      .min(1, "Too Short Name!")
      .max(50, "Too Long Name!")
      .required("Please write a name!"),
    phone: Yup.string()
      .min(9, "Invalid Phone Number")
      .required("Please fill up the phone number!"),
  });

  return (
    <Formik
      initialValues={{
        name: name,
        phone: phone,
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm({
          values: {
            name: name,
            phone: phone,
          },
        });
      }}
    >
      <FormStyled className="contact-form">
        <FormLabel htmlFor="name">Name</FormLabel>
        <FormInputWrapper>
          <FormHiUser />
          <FormField type="text" name="name" placeholder="John Doe" />
        </FormInputWrapper>

        <FormError component="span" name="name" />

        <FormLabel htmlFor="phone">Number</FormLabel>

        <FormInputWrapper>
          <FormHiPhone />
          <FormField type="number" name="phone" placeholder="123 45 6789" />
        </FormInputWrapper>

        <FormError component="span" name="phone" />

        <FormContactBtn type="submit">Add contact</FormContactBtn>
      </FormStyled>
    </Formik>
  );
}
