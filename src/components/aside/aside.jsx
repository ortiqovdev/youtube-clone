import { Stack, Button, Box } from "@mui/material";
import { colors } from "../../constants/colors";
import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryRoundedIcon from "@mui/icons-material/HistoryRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WhatshotOutlinedIcon from "@mui/icons-material/WhatshotOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import OnlinePredictionOutlinedIcon from "@mui/icons-material/OnlinePredictionOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@mui/icons-material/FeedbackOutlined";

const Aside = () => {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"space-between"}
      maxWidth={270}
      width={270}
      height={690}
      p={2}
      m={2}
      ml={0}
      mt={"72px"}
      sx={{
        position: "fixed",
        overflow: "hidden",
        display:{xs:"none", md:"flex"},
        top: 0,
        background: colors.primary,
        color: colors.textColor,
        boxSizing: "border-box",
        zIndex: 1,
        scrollbarGutter: "stable",
        ":hover": {
          overflowY: "auto",
          maxWidth: 270,
          width: 270,
          minWidth: 270,
          scrollbarGutter: "stable",
        },
      }}
    >
      <Stack alignItems={"center"}>
        <Button
          sx={{
            justifyContent: "flex-start",
            textAlign: "left",
            border: "none",
            width: "250px",
            p: 1,
            px: 2,
            textTransform: "none",
            borderRadius: "10px",
            color: colors.textColor,
            backgroundColor: colors.secondary,

            ":hover": {
              border: "none",
              backgroundColor: colors.secondary,
            },
          }}
          variant="outlined"
          startIcon={<HomeIcon fontSize="inherit" />}
        >
          Home
        </Button>

        <Button
          sx={{
            justifyContent: "flex-start",
            textAlign: "left",
            border: "none",
            width: "250px",
            p: 1,
            px: 2,
            m: 1,
            textTransform: "none",
            borderRadius: "10px",
            color: colors.textColor,
            ":hover": {
              border: "none",
              backgroundColor: colors.secondary,
            },
          }}
          variant="outlined"
          startIcon={<SlideshowIcon />}
        >
          Shorts
        </Button>

        <Button
          sx={{
            justifyContent: "flex-start",
            textAlign: "left",
            border: "none",
            width: "250px",
            p: 1,
            px: 2,
            textTransform: "none",
            borderRadius: "10px",
            color: colors.textColor,
            ":hover": {
              border: "none",
              backgroundColor: colors.secondary,
            },
          }}
          variant="outlined"
          startIcon={<SubscriptionsOutlinedIcon />}
        >
          Subscriptions
        </Button>
      </Stack>
      <Stack
        sx={{
          width: "270px",
          height: "2px",
          my: 1,
          p: "1px",
          zIndex: 1,
          backgroundColor: colors.secondary,
        }}
      ></Stack>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<VideoLibraryOutlinedIcon />}
      >
        You
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<HistoryRoundedIcon />}
      >
        History
      </Button>
      <Stack
        sx={{
          width: "270px",
          height: "2px",
          my: 1,
          p: "1px",
          zIndex: 1,
          backgroundColor: colors.secondary,
        }}
      ></Stack>
      <Box
        sx={{
          m: 0,
          px: 1,
        }}
      >
        Sign in to like videos, comment, and subscribe.
      </Box>
      <Button
        sx={{
          border: `1px solid ${colors.secondary}`,
          float: "left",
          p: 1,
          px: 2,
          m: 2,
          textTransform: "none",
          borderRadius: "35px",
          color: colors.blue,
          ":hover": {
            border: `1px solid ${colors.secondary}`,
            backgroundColor: colors.darkBlue,
          },
        }}
        variant="outlined"
        startIcon={<AccountCircleOutlinedIcon />}
      >
        Sign In
      </Button>
      <Stack
        sx={{
          width: "270px",
          height: "2px",
          my: 1,
          p: "1px",
          zIndex: 1,
          backgroundColor: colors.secondary,
        }}
      ></Stack>
      <Box
        justifyItems={"start"}
        my={1}
        p={0}
        width={230}
        fontSize={18}
        fontWeight={700}
        alignContent={"start"}
        textAlign="left"
        justifyContent="flex-start" 
      >
        Explore
      </Box>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<WhatshotOutlinedIcon />}
      >
        Trending
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<MusicNoteOutlinedIcon />}
      >
        Music
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<OnlinePredictionOutlinedIcon />}
      >
        Live
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<SportsEsportsOutlinedIcon />}
      >
        Gaming
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<NewspaperOutlinedIcon />}
      >
        News
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<EmojiEventsOutlinedIcon />}
      >
        Sports
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<LightbulbOutlinedIcon />}
      >
        Learning
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<CheckroomOutlinedIcon />}
      >
        Fashion & Beauty
      </Button>
      <Stack
        sx={{
          width: "270px",
          height: "2px",
          my: 1,
          p: "1px",
          zIndex: 1,
          backgroundColor: colors.secondary,
        }}
      ></Stack>
      <Box
        justifyItems={"start"}
        my={1}
        p={0}
        width={230}
        fontSize={18}
        fontWeight={700}
        alignContent={"start"}
        textAlign="left"
        justifyContent="flex-start" 
      >
        More from YouTube
      </Box>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<SubscriptionsOutlinedIcon />}
      >
        YouTube Kids
      </Button>
      <Stack
        sx={{
          width: "270px",
          height: "2px",
          my: 1,
          p: "1px",
          zIndex: 1,
          backgroundColor: colors.secondary,
        }}
      ></Stack>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<SettingsOutlinedIcon />}
      >
        Setting
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<FlagOutlinedIcon />}
      >
        Report history
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          m: 1,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<HelpOutlineOutlinedIcon />}
      >
        Help
      </Button>
      <Button
        sx={{
          justifyContent: "flex-start",
          textAlign: "left",
          border: "none",
          width: "250px",
          p: 1,
          px: 2,
          textTransform: "none",
          borderRadius: "10px",
          color: colors.textColor,
          ":hover": {
            border: "none",
            backgroundColor: colors.secondary,
          },
        }}
        variant="outlined"
        startIcon={<FeedbackOutlinedIcon />}
      >
        Send feedback
      </Button>
      <Stack
        sx={{
          width: "270px",
          height: "2px",
          my: 1,
          p: "1px",
          zIndex: 1,
          backgroundColor: colors.secondary,
        }}
      ></Stack>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, laborum
      excepturi aut hic modi quas.
      <Box
        justifyItems={"start"}
        my={1}
        p={0}
        width={230}
        fontSize={13}
        fontWeight={400}
        alignContent={"start"}
        textAlign="left"
        justifyContent="flex-start" 
        color={colors.secondary}
      >
        © 2024 Google LLC
      </Box>
    </Stack>
  );
};

export default Aside;
