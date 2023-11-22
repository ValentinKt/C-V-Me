/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconInformaciN2 } from "../../icons/IconInformaciN2";
import { ComponentTitle } from "../ComponentTitle";
import "./style.css";

export const CardInformation = ({
  className,
  componentTitleIcon = <IconInformaciN2 className="icon-informaci-n-2" />,
  componentTitleDivClassName,
  componentTitleRectangleClassName,
  componentTitleText = "DATA TITLE",
  componentTitleRectangleClassNameOverride,
  informationExampleClassName,
  text = "Information example<br/>Information example",
}) => {
  return (
    <div className={`card-information ${className}`}>
      <ComponentTitle
        className="component-title-instance"
        divClassNameOverride={componentTitleDivClassName}
        icon={componentTitleIcon}
        rectangleClassName={componentTitleRectangleClassNameOverride}
        rectangleClassNameOverride={componentTitleRectangleClassName}
        text1={componentTitleText}
        type="secondary"
      />
      <div className={`information-example ${informationExampleClassName}`}>{text}</div>
    </div>
  );
};

CardInformation.propTypes = {
  componentTitleText: PropTypes.string,
  text: PropTypes.string,
};
