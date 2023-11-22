/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LogoSketch = ({ color = "#DEC802", className }) => {
  return (
    <svg
      className={`logo-sketch ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M13.0044 23.7889L31.9336 61.8888L0.11702 23.7889H13.0044Z"
        fill="#C6B200"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M50.868 23.7889L31.9388 61.8888L63.7554 23.7889H50.868Z"
        fill="#C6B200"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M13.0033 23.7889H50.8617L31.9325 61.8888L13.0033 23.7889Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M31.9325 2.67398L13.9996 4.62331L13.0033 23.789L31.9325 2.67398Z"
        fill="#F3DB00"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M31.9324 2.67398L49.8653 4.62331L50.8616 23.789L31.9324 2.67398Z"
        fill="#F3DB00"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M63.7554 23.7889L49.8717 4.62323L50.868 23.7889H63.7554Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M0.11702 23.7889L14.0007 4.62323L13.0044 23.7889H0.11702Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M31.9325 2.67398L13.0033 23.789H50.8617L31.9325 2.67398Z"
        fill="#FFEC45"
        fillRule="evenodd"
      />
    </svg>
  );
};

LogoSketch.propTypes = {
  color: PropTypes.string,
};
