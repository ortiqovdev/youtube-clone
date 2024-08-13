import { BorderRight, Height } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { colors } from "../../constants/colors";

import { category } from "../../constants";
const Category = ({ selectedCategoryHendler, selectedCategory }) => {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "hidden",
        backgroundColor: `${colors.primary}`,
        pb: 1,
      }}
    >
      {category.map((item) => (
        <button
          key={item.name}
          className="category-btn"
          style={{
            backgroundColor: item.name === selectedCategory && "#fff",
          }}
          onClick={() => selectedCategoryHendler(item.name)}
        >
          <span
            style={{
              opacity: "1",
              color: item.name === selectedCategory && colors.primary,
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  )
};

export default Category;
