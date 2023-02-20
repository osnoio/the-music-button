import "./css/MiniButton.css";
import { motion } from "framer-motion";
import bamboo_swing from "./assets/bamboo_swing.wav";

function MiniButton(props) {
  const { decadeId, name, setDecadeId, navigate, handleBigRedButton } = props;
  const styledName = `${name.slice(0, 2)}'s`;

  function playDecadeTransitionSound() {
    let _audio = new Audio(bamboo_swing);
    _audio.volume = 0.4;
    _audio.play();
  }

  function handleMiniButtonClick() {
    playDecadeTransitionSound();
    setDecadeId(decadeId);
    handleBigRedButton();
    navigate(`/decade/${decadeId}`);
  }
  return (
    <div className="MiniButton-container">
      <div className="MiniButton-grey-handle">
        <motion.div
          whileHover={{ scale: 1.02, translateY: -1 }}
          whileTap={{ scale: 0.95, translateY: 3 }}
          onClick={handleMiniButtonClick}
        >
          <div className="MiniButton">
            <h3>{styledName}</h3>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MiniButton;
