import React from "react";

const BackIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button type="button" title="Back" onClick={onClick}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M42.865 31.9437L26.1175 49.6912M26.1175 49.6912L42.8649 67.6737M26.1175 49.6912L74.5 49.6912"
          stroke="#1A5319"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default BackIcon;
