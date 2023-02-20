import "./css/Decade.css";
import "./css/The70sButton.css";
import "./css/The80sButton.css";
import "./css/The90sButton.css";
import "./css/The00sButton.css";
import "./css/The10sButton.css";
import ReactPlayer from "react-player";
import { motion, useAnimationControls } from "framer-motion";
import BigRedButton from "./BigRedButton";
import { useEffect } from "react";
import mchammer from "./assets/mchammer.gif";
import psy from "./assets/psy.gif";
import eltonjohn from "./assets/eltonjohn.gif";
import snoopdogg from "./assets/snoopdogg2.gif";
import mjackson from "./assets/mjackson.gif";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function Decade(props) {
  const {
    decadeId,
    decadeName,
    currentVideo,
    nextVideo,
    handleBigRedButton,
    handleSongEnded,
    controls,
  } = props;

  const dancers = [eltonjohn, mjackson, mchammer, snoopdogg, psy];

  return (
    <div className={`Decade The${decadeName}Button`}>
      <div className="Decade-content">
        <motion.div
          initial={false}
          style={{ originY: 5.33 }}
          className="player-motion-wrapper"
          animate={controls}
          transition={{
            from: 360,
            duration: 1.5,
            type: "spring",
            stiffness: 90,
          }}
        >
          <div className="player-wrapper">
            <div className="player-container">
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${currentVideo}`}
                width="100%"
                height="100%"
                playing={true}
                controls={true}
                onError={handleSongEnded}
                onEnded={handleSongEnded}
              />
            </div>
          </div>
        </motion.div>
        {/* <motion.div
          initial={true}
          style={{ originY: 32 }}
          className="song-details-motion-wrapper"
          animate={controls}
          transition={{
            from: 360,
            duration: 1.5,
            type: "spring",
            stiffness: 90,
            delay: 0.1,
          }}
        >
          <h4>Now playing: 4 Non Blondes - Whatsupp (1997)</h4>
        </motion.div> */}

        <div className="Decade-title-container">
          {/* <h1 className="title title-the">The</h1> */}
          <div className="gif-dance-container">
            <img className="gif-dancer" src={dancers[decadeId]} />
          </div>
          <BigRedButton
            name={decadeName}
            handleBigRedButton={handleBigRedButton}
          />
          <div className="gif-dance-container">
            <img className="gif-dancer" src={dancers[decadeId]} />
          </div>
          {/* <h1 className="title title-button">Button</h1> */}
        </div>
      </div>
    </div>
  );
}

export default Decade;
