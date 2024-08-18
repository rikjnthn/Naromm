import React from "react";

const MinusIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-primary-base"
      title="Reduce"
      type="button"
    >
      <svg
        className="md:h-[25px] md:w-[25px]"
        width="20"
        height="20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25 50H75"
          stroke="#1A5319"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default MinusIcon;
