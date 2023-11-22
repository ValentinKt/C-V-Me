/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const ComponentNameJob = ({
  className,
  divClassName,
  divClassNameOverride,
  rectangleClassName,
  divClassName1,
}) => {
  return (
    <div className={`component-name-job ${className}`}>
      <div className="frame">
        <div className={`text-wrapper ${divClassName}`}>SHERLOCK</div>
        <div className={`div ${divClassNameOverride}`}>DECKARD BAGGINS</div>
      </div>
      <div className={`rectangle-2 ${rectangleClassName}`} />
      <div className={`text-wrapper-2 ${divClassName1}`}>Job title</div>
    </div>
  );
};
