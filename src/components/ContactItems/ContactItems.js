import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { useState } from "react";
import {
  Button,
  List,
  P,
  ContactIcon,
  ContactDelete,
} from "./ContactItems.styled";
import Tooltip from "@mui/material/Tooltip";

export default function ContactItems({ contact, id, phoneNumber }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    setIsModalOpen(true);
  };

  const handleConfirmDelete = (id) => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <List>
      <P>
        <ContactIcon />
        {contact}: {phoneNumber}
      </P>
      <Tooltip title="Delete" placement="right" arrow>
        <Button onClick={handleDelete}>
          <ContactDelete />
        </Button>
      </Tooltip>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        onConfirm={() => handleConfirmDelete(id)}
      />
    </List>
  );
}
