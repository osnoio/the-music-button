import "./css/Header.css";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import MiniButton from "./MiniButton";

function Header(props) {
  const { allDecades, currentDecade, setDecadeId, navigate, handleSongEnded } =
    props;

  const miniButtons = allDecades.map((decade) => (
    <MiniButton
      key={decade.decadeId}
      decadeId={decade.decadeId}
      name={decade.name}
      setDecadeId={setDecadeId}
      navigate={navigate}
      handleBigRedButton={handleSongEnded}
    ></MiniButton>
  ));

  return (
    // TODO: Toggle for switching between videoclips / music only
    <div className="Header">
      <div className="Header-content">{miniButtons}</div>
    </div>
  );
}

export default Header;
