import Decade from "./Decade";
import allDecades from "./allDecades.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import airhorn from "./assets/airhorn.wav";
import wind from "./assets/wind2.wav";

import { motion, useAnimationControls } from "framer-motion";

function MusicButtonApp(props) {
  const { _decadeId } = useParams();
  const navigate = useNavigate();

  // States
  const [decadeId, setDecadeId] = useState(_decadeId);
  const [playlist, setPlaylist] = useState([]);
  const [currentVideo, setCurrentVideo] = useState("");
  const [airhornState, setAirhornState] = useState(0);
  // Animation states
  const [initial, setInitial] = useState({
    opacity: 1,
    y: [3000, 0],
  });
  const [animate, setAnimate] = useState({
    opacity: 1,
    y: [3000, 0],
  });
  const [exit, setExit] = useState({ opacity: 1, y: [3000, 0] });

  // Constants
  const currentDecade = allDecades[decadeId];
  const decadeName = currentDecade.name;
  const decadeSongs = currentDecade.songs;

  function resetPlaylist() {
    const _newPlaylist = decadeSongs.sort((a, b) => 0.5 - Math.random());
    // console.log(`RESET PLAYLIST! New currentVideo = ${currentVideo}`);
    setCurrentVideo(_newPlaylist[0]);
    setPlaylist(_newPlaylist.slice(1));
  }

  useEffect(() => {
    // Reset the playlist on reload or when the decade ID is changed
    const _decadeSongs = allDecades[_decadeId].songs;
    const _newPlaylist = _decadeSongs.sort((a, b) => 0.5 - Math.random());
    setCurrentVideo(_newPlaylist[0]);
    setPlaylist(_newPlaylist.slice(1));
  }, [_decadeId]);

  function playAirhorn() {
    let _airhorn = new Audio(airhorn);
    _airhorn.volume = 0.4;
    _airhorn.play();
  }

  function playSongTransitionSound() {
    let _wind = new Audio(wind);
    _wind.volume = 1;
    _wind.play();
  }

  function nextVideo() {
    // If playlist is empty, reset it
    if (playlist.length === 0) {
      resetPlaylist();
    } else {
      const _newPlaylist = playlist;
      setCurrentVideo(_newPlaylist[0]);
      setPlaylist(_newPlaylist.slice(1));
    }
  }

  const controls = useAnimationControls();

  function handleSongEnded() {
    playSongTransitionSound();
    nextVideo();
    controls.start({
      rotate: 0,
      delay: 0,
      duration: 1.5,
    });
  }

  function handleBigRedButton() {
    playAirhorn();
    playSongTransitionSound();
    nextVideo();
    controls.start({
      rotate: 0,
      delay: 0,
      duration: 1.5,
    });
  }

  return (
    <motion.div
      className="MusicButtonApp"
      initial={initial}
      animate={animate}
      exit={exit}
      transition={{
        y: { type: "spring", stiffness: 300, damping: 30, duration: 0.2 },
        opacity: { duration: 0.2 },
      }}
    >
      <Decade
        decadeId={decadeId}
        decadeName={decadeName}
        currentVideo={currentVideo}
        playlist={playlist}
        nextVideo={nextVideo}
        handleBigRedButton={handleBigRedButton}
        handleSongEnded={handleSongEnded}
        controls={controls}
      />

      <Header
        allDecades={allDecades}
        currentDecade={currentDecade}
        setDecadeId={setDecadeId}
        navigate={navigate}
        handleSongEnded={handleSongEnded}
      />
    </motion.div>
  );
}

export default MusicButtonApp;
