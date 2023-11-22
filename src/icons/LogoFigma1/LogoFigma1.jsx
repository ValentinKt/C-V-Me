/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LogoFigma1 = ({ color = "#C6B200", className }) => {
  return (
    <svg
      className={`logo-figma-1 ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_1_252)">
        <path
          className="path"
          d="M21.6391 64C27.3582 64 31.9997 59.2213 31.9997 53.3333V42.6667H21.6391C15.92 42.6667 11.2785 47.4453 11.2785 53.3333C11.2785 59.2213 15.92 64 21.6391 64Z"
          fill="#F3DB00"
        />
        <path
          className="path"
          d="M11.2785 31.9999C11.2785 26.1119 15.92 21.3333 21.6391 21.3333H31.9997V42.6666H21.6391C15.92 42.6666 11.2785 37.8879 11.2785 31.9999Z"
          fill="#C6B200"
        />
        <path
          className="path"
          d="M11.279 10.6667C11.279 4.77866 15.9206 0 21.6396 0H32.0002V21.3333H21.6396C15.9206 21.3333 11.279 16.5547 11.279 10.6667Z"
          fill={color}
        />
        <path
          className="path"
          d="M32 0H42.3606C48.0797 0 52.7212 4.77866 52.7212 10.6667C52.7212 16.5547 48.0797 21.3333 42.3606 21.3333H32V0Z"
          fill="#F3DB00"
        />
        <path
          className="path"
          d="M52.7212 31.9999C52.7212 37.8879 48.0797 42.6666 42.3606 42.6666C36.6416 42.6666 32 37.8879 32 31.9999C32 26.1119 36.6416 21.3333 42.3606 21.3333C48.0797 21.3333 52.7212 26.1119 52.7212 31.9999Z"
          fill="#FFEC45"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_1_252">
          <rect className="rect" fill="white" height="64" transform="translate(11.2744)" width="41.4508" />
        </clipPath>
      </defs>
    </svg>
  );
};

LogoFigma1.propTypes = {
  color: PropTypes.string,
};
