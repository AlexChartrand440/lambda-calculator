import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {<button className='operator-button button'>{props.button.char}</button>}
    </>
  );
};

export default OperatorButton;