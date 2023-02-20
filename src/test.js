import { styled } from "@mui/material/styles";

export const HomeButton = styled("div")({
  color: "black",
  backgroundColor: "pink",
  height: "25%",
  width: "25vw",
  margin: "0 auto",
  padding: "auto",
  borderRadius: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
  },
});
