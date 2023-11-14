import BioCard from "../BioCard/BioCard";
import {
  BioCardTitle,
  CardContainer,
  BioCardText,
  CardsTextWrapper,
  CardsTextItems,
  StyledManageAccountsIcon,
  StyledPersonSearchIcon,
  StyledDatabaseLockIcon,
} from "./HomeCard.styled";

export default function HomeCard() {
  return (
    <CardsTextWrapper>
      <CardsTextItems>
        <CardContainer>
          <StyledManageAccountsIcon />
          <BioCardTitle>User-Friendly Contact Management</BioCardTitle>
          <BioCardText>
            Effortlessly manage your contacts with our intuitive interface.
            Save, update, and delete contacts securely. The power of Redux
            ensures smooth state management, providing a seamless experience.
          </BioCardText>
        </CardContainer>
      </CardsTextItems>
      <CardsTextItems>
        <CardContainer>
          <StyledPersonSearchIcon />
          <BioCardTitle>Efficient Search Functionality</BioCardTitle>
          <BioCardText>
            Quickly find the contacts you need with our advanced search feature.
            Simply enter the name, and the app will instantly filter and display
            relevant contacts. Streamline your contact management like never
            before.
          </BioCardText>
        </CardContainer>
      </CardsTextItems>
      <CardsTextItems>
        <CardContainer>
          <StyledDatabaseLockIcon />
          <BioCardTitle>Secure and Persistent Data Storage</BioCardTitle>
          <BioCardText>
            Your data is our priority. Enjoy the convenience of persistent data
            storage with Redux Persist, ensuring that your contacts are always
            available, even after registration. Rest easy knowing that only the
            essential JWT token is stored locally.
          </BioCardText>
        </CardContainer>
      </CardsTextItems>
      <CardsTextItems>
        <BioCard />
      </CardsTextItems>
    </CardsTextWrapper>
  );
}
