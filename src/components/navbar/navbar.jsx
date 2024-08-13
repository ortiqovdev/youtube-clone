import { Stack, Box, Button } from "@mui/material";
import { logo } from "../../constants/index";
import { colors } from "../../constants/colors";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { SearchBar } from "../";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      p={2}
      sx={{
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 999,
        background: colors.primary,
        color: colors.textColor,
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        sx={{ color: colors.textColor }}
        spacing={1}
      >
        <IconButton
          aria-label="delete"
          size="medium"
          sx={{
            color: colors.textColor,
            mx: 1,
            ":hover": {
              backgroundColor: colors.secondary,
            },
          }}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>
        <img src={logo} alt="logo" height={24} style={{ Padding: "2", fontWeight:"500"}} />
        <Box
          sx={{
            fontSize: 20,
            fontWeight: 500,
          }}
        >
          YouTube
        </Box>
      </Stack>
      <Stack direction={"row"} alignItems={"center"}>
        <SearchBar />
        <IconButton
          aria-label="delete"
          size="medium"
          sx={{
            color: colors.textColor,
            backgroundColor: colors.secondary,
            mx: 2,
            ":hover": {
              backgroundColor: colors.secondary,
            },
          }}
        >
          <KeyboardVoiceIcon fontSize="inherit" />
        </IconButton>
      </Stack>

      <Stack direction={"row"} alignItems={"center"} mr={2}>
        <IconButton
          aria-label="delete"
          size="medium"
          sx={{
            color: colors.textColor,
            mx: 1,
            ":hover": {
              backgroundColor: colors.secondary,
            },
          }}
        >
          <VideoCallOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="medium"
          sx={{
            color: colors.textColor,
            mx: 1,
            ":hover": {
              backgroundColor: colors.secondary,
            },
          }}
        >
          <NotificationsOutlinedIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          aria-label="delete"
          size="medium"
          sx={{
            color: colors.blue,
            ml: 4,
            mx: 1,
            ":hover": {
              backgroundColor: colors.secondary,
            },
          }}
        >
          <AccountCircleOutlinedIcon fontSize="inherit" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Navbar;
