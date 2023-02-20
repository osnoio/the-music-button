import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import "./css/HomePage.css";
import { useNavigate } from "react-router-dom";
import { HomeButton } from "./test.js";

function HomePage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/90s`);
  }

  return (
    <Box sx={{ flexGrow: 1 }} className="home">
      <div className="home-title-container">
        <h1>The Music Button</h1>
      </div>

      <Grid container spacing={6} className="button-grid">
        <HomeButton>The 80's button</HomeButton>
        <HomeButton onClick={handleClick}>The 90's button</HomeButton>
        <HomeButton>The 00's button</HomeButton>
      </Grid>
    </Box>
  );
}

export default HomePage;
