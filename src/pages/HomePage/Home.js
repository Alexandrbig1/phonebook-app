import { HomeContainer, HomeTitle, HomeTitleWrapper } from "./HomePage.styled";

export default function HomePage() {
  return (
    <HomeContainer>
      <HomeTitleWrapper>
        <HomeTitle>ConnectContacts: Your Personal Phonebook App</HomeTitle>
        <p>
          Embark on a seamless journey of contact management with
          ConnectContacts, a feature-rich phonebook application developed as the
          final project of the React module in my full-stack bootcamp. This
          application allows users to securely save their contacts on the
          server, providing a personalized space to manage and retrieve contacts
          effortlessly. With dedicated pages for home and contacts,
          ConnectContacts ensures a user-friendly experience, coupled with the
          power of React for a responsive and dynamic interface. Start your
          organized contact journey today with ConnectContacts!"
        </p>
      </HomeTitleWrapper>
    </HomeContainer>
  );
}
