import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import styles from ".././layout/Appbar.module.css";
import NotificationHeading from "./AppbarHeading";
import SortForm from "./AppbarSort";
import MessageMenu from "./AppbarMessages";
import DrawerMenu from "./AppbarDrawer";
import { AppContext } from "../utils/AppContextProvider";
import { useContext, useState } from "react";
import UserMenu from "./AppbarUserMenu";
import LoginButton from "./LoginButton";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/user";

export default function DocAppBar() {
  const { handleDrawerOpen, loggedIn, setLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const logoutResponse = await logoutUser(setLoggedIn, navigate);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box className={styles.appBarContainer}>
      <AppBar
        position="static"
        // open={drawerOpen}
      >
        <Toolbar className={styles.toolbar}>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={handleDrawerOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{ color: "#9ED0F9" }} />
          </IconButton>

          <NotificationHeading />

          {/* <SortForm /> */}

          <MessageMenu />

          {loggedIn ? (
            <UserMenu handleLogout={handleLogout} />
          ) : (
            <LoginButton />
          )}

          {/* <UserIcon /> */}
        </Toolbar>
      </AppBar>

      <DrawerMenu />
    </Box>
  );
}

// const AppBarM = styled(AppBar, {
//     shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, drawerOpen }) => ({
//     transition: theme.transitions.create(['margin', 'width'], {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     ...(drawerOpen && {
//         width: `calc(100% - 240px)`,
//         marginLeft: `240px`,
//         transition: theme.transitions.create(['margin', 'width'], {
//             easing: theme.transitions.easing.easeOut,
//             duration: theme.transitions.duration.enteringScreen,
//         }),
//     }),
// }));
