import React from "react";

const BinIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full border border-primary"
      type="button"
    >
      <svg
        className="md:h-[25px] md:w-[25px] lg:h-[30px] lg:w-[30px]"
        width="20"
        height="20"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.2602 36.9873V81M55.8069 36.9873V81M29.6875 36.2152L30.0162 73.346C30.0537 77.584 33.5403 81 37.8284 81H62.1036C66.4183 81 69.916 77.543 69.916 73.2785V36.2152M29.6875 36.2152H69.916M29.6875 36.2152C27.0987 36.2152 25 34.141 25 31.5823V31.1962C25 28.4243 27.2736 26.1772 30.0781 26.1772H69.9219C72.7264 26.1772 75 28.4243 75 31.1962C75 33.9681 72.7206 36.2152 69.916 36.2152M56.25 24.6329C56.25 22.0742 54.1513 20 51.5625 20H50C47.4112 20 45.3125 22.0742 45.3125 24.6329"
          stroke="#1A5319"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
};

export default BinIcon;
