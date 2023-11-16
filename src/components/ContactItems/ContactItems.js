import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/operations";
import DeleteConfirmationModal from "../DeleteConfirmationModal/DeleteConfirmationModal";
import { useEffect, useState } from "react";
import {
  Button,
  List,
  P,
  ContactDelete,
  AvatarImg,
  ContactListWrapper,
  ContactAvatarWrapper,
  AvatarImgIcon,
} from "./ContactItems.styled";
import Tooltip from "@mui/material/Tooltip";

function generateRandomImg() {
  const types = [
    "adventurer",
    "adventurer-neutral",
    "big-smile",
    "lorelei",
    "miniavs",
    "bottts",
    "croodles",
    "big-ears",
    "open-peeps",
    "avataaars",
    "micah",
    "fun-emoji",
    "notionists",
    "lorelei-neutral",
  ];
  return types[Math.floor(Math.random() * types.length)];
}

const getAvatar = () => {
  const randomAvatar = generateRandomImg();
  const avatar = `https://api.dicebear.com/7.x/${randomAvatar}/svg`;
  return avatar;
};

export default function ContactItems({ contact, id, phoneNumber }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const [avatarType, setAvatarType] = useState("");

  useEffect(() => {
    const randomAvatar = generateRandomImg();
    setAvatarType(randomAvatar);
  }, []);

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
      <ContactAvatarWrapper>
        {!avatarType ? (
          <AvatarImgIcon />
        ) : (
          <AvatarImg src={getAvatar(avatarType)} alt="avatar" />
        )}
        <P>{contact}</P>
      </ContactAvatarWrapper>
      <ContactListWrapper>
        <P>{phoneNumber}</P>
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
      </ContactListWrapper>
    </List>
  );
}
