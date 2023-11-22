/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LogoPhotoshop2 } from "../../icons/LogoPhotoshop2";
import "./style.css";

export const Date = ({
  percent,
  className,
  divClassName,
  text = "Name",
  backLineClassName,
  progressLineClassName,
  dotClassName,
  icon = <LogoPhotoshop2 className="logo-photoshop" />,
}) => {
  return (
    <div className={`date ${className}`}>
      {icon}
      <div className="content">
        <div className={`name ${divClassName}`}>{text}</div>
        <div className="progress-bar">
          <div className="overlap-group-2">
            <div className={`back-line ${percent} ${backLineClassName}`} />
            <div className={`progress-bar-2 percent-${percent}`}>
              {percent === "one-hundred" && (
                <div className="group-4">
                  <div className="progress-line" />
                  <div className="dot" />
                </div>
              )}

              {(percent === "eighty" ||
                percent === "fifty" ||
                percent === "forty" ||
                percent === "ninety" ||
                percent === "seventy" ||
                percent === "sixty" ||
                percent === "ten" ||
                percent === "thirty" ||
                percent === "twenty") && (
                <>
                  <div className={`progress-line-2 ${progressLineClassName}`} />
                  <div className={`dot-2 ${dotClassName}`} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Date.propTypes = {
  percent: PropTypes.oneOf([
    "sixty",
    "thirty",
    "eighty",
    "twenty",
    "one-hundred",
    "fifty",
    "ten",
    "forty",
    "ninety",
    "seventy",
  ]),
  text: PropTypes.string,
};
