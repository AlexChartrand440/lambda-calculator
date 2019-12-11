import React from "react";

const NumberButton = (props) => { 

  return (
    <> 
      {props.num == 0 ? <button className='number-button button' style={{width: '140px'}}>{props.num}</button> : <button className='number-button button'>{props.num}</button>}
    </>
  );
};

export default NumberButton;
