/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LogoJira1 = ({ color = "#C6B200", className }) => {
  return (
    <svg
      className={`logo-jira-1 ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M58.1849 6.85583H30.6672C30.6672 10.1503 31.9759 13.3099 34.3055 15.6395C36.6351 17.969 39.7946 19.2778 43.0891 19.2778H48.1582V24.172C48.1627 31.0262 53.7179 36.5817 60.5721 36.5861V9.243C60.5721 7.92498 59.5036 6.85583 58.1849 6.85583Z"
        fill={color}
      />
      <path
        className="path"
        d="M44.5692 20.5669H17.0517C17.056 27.4211 22.6112 32.9765 29.4656 32.981H34.5347V37.891C34.5434 44.7452 40.1024 50.2968 46.9566 50.2968V22.9545C46.9566 21.6361 45.8877 20.5671 44.5692 20.5671V20.5669Z"
        fill={color}
      />
      <path
        className="path"
        d="M30.9456 34.2701H3.42792C3.42792 41.1306 8.9896 46.6921 15.8498 46.6921H20.9348V51.5861C20.9393 58.4341 26.4848 63.987 33.333 64V36.6575C33.333 35.3391 32.2641 34.2701 30.9456 34.2701Z"
        fill={color}
      />
    </svg>
  );
};

LogoJira1.propTypes = {
  color: PropTypes.string,
};
