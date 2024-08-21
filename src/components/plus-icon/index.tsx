import React from "react";

const PlusIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-primary-base"
      type="button"
      title="Add"
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
          d="M25 50H75M50 25V75"
          stroke="#1A5319"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default PlusIcon;
