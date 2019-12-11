import React from "react";

import logo from "../../Img/Lambda_Logo_white.png";

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo" src={logo} alt="Lambda's logo" style={{margin: '35px 0 0 35px'}}/>
    </div>
  );
};

export default Logo;
