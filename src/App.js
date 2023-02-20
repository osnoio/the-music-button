import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import MusicButtonApp from "./MusicButtonApp.js";
import { AnimatePresence } from "framer-motion";
import "./css/App.css";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <AnimatePresence initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route
            exact
            path="/decade/:_decadeId"
            element={<MusicButtonApp />}
          ></Route>
          <Route path="*" element={<Navigate to="/decade/2" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
