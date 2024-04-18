import React from "react";
import PropTypes from "prop-types";

function Controls({ onIncrement, onNeutralIncrement, onBadIncrement }) {
  return (
    <div>
      <button onClick={onIncrement} type="button">
        Good
      </button>
      <button onClick={onNeutralIncrement} type="button">
        Neutral
      </button>
      <button onClick={onBadIncrement} type="button">
        Bad
      </button>
    </div>
  );
}

Controls.propTypes = {
  onIncrement: PropTypes.func,
  onNeutralIncrement: PropTypes.func,
  onBadIncrement: PropTypes.func,
};

export default Controls;
