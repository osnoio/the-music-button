import { Route, Routes } from "react-router-dom";
import "./css/DecadeContainer.css";
import Decade from "./Decade.js";

function DecadeContainer(props) {
  const { currentDecade } = props;
  return (
    <div className="DecadeContainer">
      <h1>CONTAINER</h1>
      <Routes>
        <Route exact path="/decade/:currentDecade" element={<Decade />}></Route>
      </Routes>
    </div>
  );
}

export default DecadeContainer;
