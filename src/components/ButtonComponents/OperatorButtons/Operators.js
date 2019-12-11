import React from "react";

//import any components needed

//Import your array data to from the provided data file
import OperatorButton from './OperatorButton';

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  return (
    <div style={{width: '90px', marginTop: '10px', marginLeft: '5px', marginRight: '25px'}}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       props.data.map(button => <OperatorButton button={button} />)
       }
    </div>
  );
};

export default Operators;
