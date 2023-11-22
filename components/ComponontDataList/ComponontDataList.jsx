/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ComponontDataList = ({
  type,
  className,
  divClassName,
  groupClassName,
  frameClassName,
  text = "At vero eos et accusamus et",
  loremIpsumDolorClassName,
}) => {
  return (
    <div className={`componont-data-list ${className}`}>
      <div className={`text-wrapper ${divClassName}`}>2020-2021</div>
      <div className={`group-2 ${groupClassName}`} />
      <div className={`frame ${type}`}>
        <div className={`at-vero-eos-et ${frameClassName}`}>
          {type === "default" && <p className="text-wrapper-7">{text}</p>}

          {type === "bullets" && (
            <>
              <p className="p">{text}</p>
              <div className="text-wrapper-2">Company name - TOWN</div>
            </>
          )}
        </div>
        <div className={`company-name-TOWN ${loremIpsumDolorClassName}`}>
          {type === "default" && <>Company name - TOWN</>}

          {type === "bullets" && (
            <p className="text-wrapper-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

ComponontDataList.propTypes = {
  type: PropTypes.oneOf(["bullets", "default"]),
  text: PropTypes.string,
};
