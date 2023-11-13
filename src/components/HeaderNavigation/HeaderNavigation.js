import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { FaBookReader } from "react-icons/fa";
import ThemeButton from "../ThemeButton/ThemeButton";
import { Link, ToolbarStyled } from "./HeaderNavigation.styled";

const drawerWidth = 240;
const navItems = ["Home", "Contacts"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
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
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar component="nav">
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
              // flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              marginRight: 1,
            }}
          >
            <FaBookReader style={{ marginRight: 8 }} />
            PhoneBook
          </Typography>
          <Box
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex" },
              alignItems: "center",
              justifyContent: { xs: "end", sm: "start" },
            }}
          >
            <Link to="/login">
              <Button color="inherit">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button color="inherit">Sign Up</Button>
            </Link>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Button color="inherit">Home</Button>
            </Link>
            <Link to="/contacts">
              <Button color="inherit">Contacts</Button>
            </Link>
            {/* <Button color="inherit">Home</Button> */}
            {/* <Button color="inherit" disabled>
              Contacts
            </Button> */}
          </Box>
          <Box style={{ marginLeft: 5 }}>
            <ThemeButton
              toggleTheme={props.toggleTheme}
              isDarkTheme={props.isDarkTheme}
            />
          </Box>
        </ToolbarStyled>
      </AppBar>
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
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
