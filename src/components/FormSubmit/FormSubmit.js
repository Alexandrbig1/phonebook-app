import { useState } from "react";
import * as React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/operations";
import { selectContacts } from "../../redux/selectors";
import Tooltip from "@mui/material/Tooltip";
import {
  FormContactBtn,
  FormLabel,
  FormStyled,
  FormField,
  FormHiUser,
  FormHiPhone,
  FormInputWrapper,
  FormStyledWrapper,
  FormError,
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

  const positionRef = React.useRef({
    x: 0,
    y: 0,
  });
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

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
      <FormStyledWrapper>
        <FormStyled>
          <div>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInputWrapper style={{ marginBottom: "1.4rem" }}>
              <FormHiUser />
              <FormField type="text" name="name" placeholder="John Doe" />
              <FormError component="span" name="name" />
            </FormInputWrapper>

            <FormLabel htmlFor="phone">Number</FormLabel>

            <FormInputWrapper>
              <FormHiPhone />
              <FormField type="number" name="phone" placeholder="123 45 6789" />
              <FormError component="span" name="phone" />
            </FormInputWrapper>
          </div>
          <div>
            <Tooltip
              title="Add Contact"
              placement="top"
              arrow
              PopperProps={{
                popperRef,
                anchorEl: {
                  getBoundingClientRect: () => {
                    return new DOMRect(
                      positionRef.current.x,
                      areaRef.current.getBoundingClientRect().y,
                      0,
                      0
                    );
                  },
                },
              }}
            >
              <FormContactBtn
                onMouseMove={handleMouseMove}
                ref={areaRef}
                type="submit"
              >
                Add contact
              </FormContactBtn>
            </Tooltip>
          </div>
        </FormStyled>
      </FormStyledWrapper>
    </Formik>
  );
}
