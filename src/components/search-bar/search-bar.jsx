import { Search } from "@mui/icons-material";
import { Paper, IconButton } from "@mui/material";
import { colors } from "../../constants/colors";

const SearchBar = () => {
  return (
    <Paper
      component={"form"}
      style={{
        border: `1px solid ${colors.secondary}`,
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        pl: 2,
        boxShadow: "none",
        backgroundColor: colors.primary,
      }}
    >
      <input type="text" placeholder="Search" className="search-bar" />
      <IconButton sx={{ 
        backgroundColor: `${colors.secondary}`,
        borderRadius:"0 30px 30px 0", 
        ":hover":{
          backgroundColor:`${colors.secondary}`
        }
        }}>
        <Search
          style={{
            color: colors.textColor,
            borderRadius: "0 30px 30px 0",
            p: "10px",
            width:"40px",
            fontWeight:"300"
          }}
        />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
