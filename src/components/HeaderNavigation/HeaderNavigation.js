import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaBookReader } from "react-icons/fa";
import ThemeButton from "../ThemeButton/ThemeButton";
import { HeaderNav, Link, ToolbarStyled } from "./HeaderNavigation.styled";
import { useAuth } from "../../hooks";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { isLoggedIn } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            justifyContent: "center",
          }}
        >
          <FaBookReader />
          PhoneBook
        </div>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link to="/">
            <Button style={{ color: "#000" }}>Home</Button>
          </Link>
        </ListItem>
        {isLoggedIn && (
          <ListItem disablePadding>
            <Link to="/contacts">
              <Button style={{ color: "#000" }}>Contacts</Button>
            </Link>
          </ListItem>
        )}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <HeaderNav>
        <ToolbarStyled>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              marginRight: 1,
            }}
          >
            <a href="/">
              <FaBookReader style={{ marginRight: 8 }} />
              PhoneBook
            </a>
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            {isLoggedIn && (
              <Link to="/contacts">
                <Button color="inherit">Contacts</Button>
              </Link>
            )}
          </Box>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "0.8rem",
            }}
          >
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
            <ThemeButton
              toggleTheme={props.toggleTheme}
              isDarkTheme={props.isDarkTheme}
            />
          </Box>
        </ToolbarStyled>
      </HeaderNav>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default DrawerAppBar;
