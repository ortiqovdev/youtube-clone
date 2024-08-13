import { useState, useEffect } from "react";
import { Button, Stack, Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/colors";
import { Category, Videos } from "../";
import { category } from "../../constants";
import { ApiService } from "../../service/api.service";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);

  const selectedCategoryHendler = (category) => setSelectedCategory(category);

  useEffect(() => {
    // const getData = async () => {
    //   try {
    //     const data = await ApiService.fetching("search");
    //     setVideos(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getData();
    ApiService.fetching(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data.items));
  }, []);

  return (
    <Stack
      pt={"90px"}
      // pl={"300px"}
      sx={{
        pl:{xs:"10px",md:"300px"},
        background: colors.primary,
        color: colors.textColor,
      }}
    >
      <Category
        selectedCategoryHendler={selectedCategoryHendler}
        selectedCategory={selectedCategory}
      />
      <Box
        p={0}
        sx={{
          height: "90vh",
        }}
      >
        <Container maxWidth={"90%"} style={{ padding: 0 }}>
          <Typography variant="h4" fontWeight={"bold"} my={1} p={0}>
            {selectedCategory}
            <span style={{ color: colors.secondary }}> videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
