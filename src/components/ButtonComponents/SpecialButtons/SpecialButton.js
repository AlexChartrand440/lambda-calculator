import React from "react";

const SpecialButton = (props) => {
  return (
    <>
      {<button className='special-button button'>{props.button}</button>}
    </>
  );
};

export default SpecialButton;
