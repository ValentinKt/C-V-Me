/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const LogoProtopie = ({ color = "#DEC802", className }) => {
  return (
    <svg
      className={`logo-protopie ${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        clipRule="evenodd"
        d="M31.8307 53.6323L32 64C30.4504 64.0008 28.9614 63.3988 27.8489 62.3217L27.0382 61.3579L7.34114 37.9699L0.641397 30.0076C0.623799 29.9981 0.609699 29.9833 0.601178 29.9653L0.495336 29.8427L0.474168 29.8152C0.343147 29.6427 0.238297 29.4518 0.162995 29.2487C0.0627951 28.9997 0.00760908 28.7349 0 28.4667V28.306C0 28.2553 0.00423364 28.2025 0.0148178 28.1517C0.0611383 27.631 0.281878 27.141 0.641397 26.7609C1.07111 26.2959 1.69557 26 2.38142 26H8.99649L31.8285 53.6366L31.8328 53.6323H31.8307Z"
        fill="#FFEC45"
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M32 41.2054V54L0.60016 16.9442C0.411575 16.7354 0.263014 16.4943 0.161745 16.2329C0.0623149 15.9824 0.007588 15.7168 0 15.4478V15.2899C0.0170258 14.6964 0.257515 14.1639 0.644852 13.7577C1.07475 13.2883 1.70258 13 2.39425 13H8.34903L32 41.2033V41.2054Z"
        fill={color}
        fillRule="evenodd"
      />
      <path
        className="path"
        clipRule="evenodd"
        d="M2.37951 0.00217529C1.69418 0.00217529 1.06418 0.291614 0.63851 0.76408C0.255404 1.16631 0.0170269 1.71114 0 2.30491V2.4624C0.0063851 2.74546 0.0617226 3.00936 0.161756 3.24984C0.163884 3.27325 0.174526 3.29241 0.18304 3.31369C0.286978 3.56398 0.43554 3.7933 0.621483 3.99047L0.655537 4.02877L32 41.0428V64C33.5492 64.0033 35.0384 63.4015 36.1503 62.3229C36.1567 62.3229 36.1567 62.3229 36.1567 62.3187L63.3998 29.9782C63.4338 29.9442 63.4636 29.9058 63.4934 29.8675C63.6382 29.6888 63.7531 29.4866 63.8382 29.2652C63.9446 29.0013 64 28.7119 64 28.4033V2.3794C64.0027 1.77622 63.7724 1.19528 63.3572 0.757695C63.1355 0.516974 62.8659 0.325235 62.5657 0.194765C62.2655 0.064295 61.9414 -0.00202773 61.6141 4.72252e-05H2.38164L2.37951 0.00217529Z"
        fill="#C6B200"
        fillRule="evenodd"
      />
    </svg>
  );
};

LogoProtopie.propTypes = {
  color: PropTypes.string,
};
