import "./css/BigRedButton.css";
import { motion } from "framer-motion";

function BigRedButton(props) {
  const styledName = `${props.name.slice(0, 2)}'s`;
  return (
    <div className="BigRedButton-container">
      <div className="BigRedButton-grey-handle">
        <motion.div
          whileHover={{ scale: 1.02, translateY: -2 }}
          whileTap={{ scale: 0.95, translateY: 6 }}
          onClick={props.handleBigRedButton}
        >
          <div className="BigRedButton">
            <h1>{styledName}</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BigRedButton;
