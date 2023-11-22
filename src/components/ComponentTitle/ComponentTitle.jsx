/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconInformaciN } from "../../icons/IconInformaciN";
import "./style.css";

export const ComponentTitle = ({
  type,
  divClassName,
  rectangleClassName,
  className,
  icon = <IconInformaciN className="icon-informaci-n" />,
  divClassNameOverride,
  text = "DATA TITLE",
  rectangleClassNameOverride,
}) => {
  return (
    <div className={`component-title ${type} ${className}`}>
      {type === "primary" && (
        <>
          <div className={`text-wrapper-3 ${divClassName}`}>TITLE EXAMPLE</div>
          <div className={`rectangle-3 ${rectangleClassName}`} />
        </>
      )}

      {type === "secondary" && (
        <>
          {icon}
          <div className={`group-2 ${rectangleClassName}`}>
            <div className={`DATA-TITLE ${divClassNameOverride}`}>{text}</div>
            <div className={`rectangle-4 ${rectangleClassNameOverride}`} />
          </div>
        </>
      )}
    </div>
  );
};

ComponentTitle.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  text: PropTypes.string,
};
