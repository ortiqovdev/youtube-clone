import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Main, Chanel, Navbar, VideoDetail, Search, Aside } from "../";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Box sx={{
        display:"flex",
      }}>
        <Aside />
        <Main />
      </Box>
      {/* <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chanel:id" element={<Chanel />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="search/:id" element={<Search />} />
      </Routes> */}
    </Box>
  );
};

export default App;
