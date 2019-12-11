import React from "react";
import "./App.css";
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
import Display from './components/DisplayComponents/Display';
import NumberButtons from './components/ButtonComponents/NumberButtons/Numbers';
import SpecialButtons from './components/ButtonComponents/SpecialButtons/Specials';
import OperatorButtons from './components/ButtonComponents/OperatorButtons/Operators';

import numbers, { specials } from './data';
import { operators } from './data';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  console.log(operators);

  return (
    <div className="container" style={{width: '40%'}}>
      <Logo />
      <div className="App">
        {/* STEP 4 - Render your components here and be sure to properly import/export all files */
        <>
          <Display />
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <SpecialButtons data={specials} />
              <NumberButtons data={numbers} />
            </div>
            <OperatorButtons data={operators} />
          </div>
        </>
        }
      </div>
    </div>
  );
}

export default App;
