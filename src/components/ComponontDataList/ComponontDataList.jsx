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
  divClassNameOverride,
  divClassName1,
  loremIpsumDolorClassName,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit<br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  frameClassName,
  text1 = "At vero eos et accusamus et",
}) => {
  return (
    <div className={`componont-data-list ${className}`}>
      <div className={`text-wrapper-4 ${divClassName}`}>2020-2021</div>
      <div className={`group-3 ${groupClassName}`} />
      <div className={`frame-2 ${type}`}>
        <div className={`at-vero-eos-et ${frameClassName}`}>
          {type === "default" && <p className="text-wrapper-7">{text1}</p>}

          {type === "bullets" && (
            <>
              <p className={`p ${divClassNameOverride}`}>{text1}</p>
              <div className={`text-wrapper-5 ${divClassName1}`}>Company name - TOWN</div>
            </>
          )}
        </div>
        <div className={`company-name-TOWN ${loremIpsumDolorClassName}`}>
          {type === "default" && <>Company name - TOWN</>}

          {type === "bullets" && <p className="text-wrapper-7">{text}</p>}
        </div>
      </div>
    </div>
  );
};

ComponontDataList.propTypes = {
  type: PropTypes.oneOf(["bullets", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
