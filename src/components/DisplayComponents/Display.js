import React, {useState} from "react";

const Display = () => {

  const [result, process] = useState(0);

  return <div className="display" style={{width: '75%', height: '75px', background: '#323335', margin: '0 auto', paddingTop: '0px', marginTop: '10px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center'}}>
    <p id='result-text' style={{fontSize: '40px'}}>{result}</p>
    </div>;
};

export default Display;