import React from "react";

//import any components needed

//Import your array data to from the provided data file
import SpecialButton from './SpecialButton';

const Specials = (props) => {
  // STEP 2 - add the imported data to state

  return (
    <div style={{width: '90%', display: 'flex', justifyContent: 'space-around', marginLeft: '20px', marginTop: '10px'}}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       props.data.map(button => <SpecialButton button={button} />)
       }
    </div>
  );
};

export default Specials;
