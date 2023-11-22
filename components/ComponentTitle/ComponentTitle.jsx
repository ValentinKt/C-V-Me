/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconInformaciN2 } from "../../icons/IconInformaciN2";
import "./style.css";

export const ComponentTitle = ({
  type,
  divClassName,
  rectangleClassName,
  className,
  text = "TITLE EXAMPLE",
  icon = <IconInformaciN2 className="icon-informaci-n" />,
  divClassNameOverride,
  text1 = "DATA TITLE",
  rectangleClassNameOverride,
}) => {
  return (
    <div className={`component-title ${type} ${className}`}>
      {type === "primary" && (
        <>
          <div className={`TITLE-EXAMPLE ${divClassName}`}>{text}</div>
          <div className={`rectangle ${rectangleClassName}`} />
        </>
      )}

      {type === "secondary" && (
        <>
          {icon}
          <div className={`group ${rectangleClassName}`}>
            <div className={`DATA-TITLE ${divClassNameOverride}`}>{text1}</div>
            <div className={`div ${rectangleClassNameOverride}`} />
          </div>
        </>
      )}
    </div>
  );
};

ComponentTitle.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
