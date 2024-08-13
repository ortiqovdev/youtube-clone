import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { colors } from "../../constants/colors";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";

const VideoCard = ({ video }) => {
  console.log(video);
  return (
    <Card
      sx={{
        width: "380px",
        boxShadow: "none",
        borderRadius: 0,
        alignItems: "center",
        px: "10px",
        backgroundColor: `${colors.primary}`,
      }}
    >
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.title}
        sx={{
          width: "370px",
          height: "210px",
          borderRadius: "10px",
          my: "10px",
        }}
      />

      <CardContent
        sx={{
          width: "380px",
          height:"100px",
          paddingX:"15px",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"start"}
          gap={"5px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Avatar src={video?.snippet?.thumbnails?.high?.url}  sx={{
            mr:"8px"
          }}/>
          <Stack display={"flex"} flexDirection={"column"} justifyContent={"start"} alignItems={"start"} >
            <Typography variant="subtitle1" fontWeight={"bold"} color={"white"} >
              {video?.snippet?.title.slice(0, 40)}
            </Typography>
            <Typography
              variant={"subtitle2"}
              color={"gray"}
              display={"flex"}
              alignItems={"center"}
            >
              {video?.snippet?.channelTitle}
              <CheckCircle
                sx={{
                  fontSize: "12px",
                  color: "gray",
                  mx: "5px",
                }}
              />
              <Typography my={"5px"} color={'Scrollbar'} sx={{ opacity: ".4" }}>
                {moment(video?.snippet?.publishedAt).fromNow()}
              </Typography>
            </Typography>
          </Stack>
          <IconButton aria-label="delete" sx={{
            color:"white",
          }}>
            <MoreVertIcon />
          </IconButton>
        </Stack>

        <Box sx={{ fontSize: "20px" }}>
       
        </Box>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
