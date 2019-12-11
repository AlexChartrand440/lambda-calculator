import React from "react";

//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file

import NumberButton from './NumberButton';

const Numbers = props => {
  // STEP 2 - add the imported data to state
  return (
    <div style={{width: '90%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', marginLeft: '20px'}}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
      props.data.map(num => <NumberButton num={num} />)
      }
    </div>
  );
};

export default Numbers;