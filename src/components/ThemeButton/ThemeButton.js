import {
  IconClickLight,
  IconClickDark,
  SwitcherTheme,
} from "./ThemeButton.styled";

export default function ThemeButton({ toggleTheme, isDarkTheme }) {
  const handleThemeToggle = () => {
    toggleTheme();
  };
  return (
    <SwitcherTheme onClick={handleThemeToggle}>
      {isDarkTheme ? <IconClickDark /> : <IconClickLight />}
    </SwitcherTheme>
  );
}
