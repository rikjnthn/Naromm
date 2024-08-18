"use client";
import clsx from "clsx";
import React from "react";

import { useProducts } from "@/context/cart-context";

const CartIcon = ({ onClick }: { onClick?: React.MouseEventHandler }) => {
  const { products } = useProducts();

  const isAddedProduct = products.length > 0;

  return (
    <button onClick={onClick} title="Cart" type="button">
      <svg
        className={clsx(isAddedProduct && "animate-shake")}
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M36.8644 40.7658H25L32.2034 75H66.5254L75 40.7658H63.5545M36.8644 40.7658H63.5545M36.8644 40.7658C36.8644 33.1081 41.5254 25 50.4237 25C59.1479 25 63.3917 33.2269 63.5545 40.7658M63.5545 40.7658C63.5577 40.9162 63.5593 41.0664 63.5593 41.2162"
          stroke="#1A5319"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <circle
          className={clsx(!isAddedProduct && "hidden")}
          cx="70.5"
          cy="40.5"
          r="18"
          fill="#508D4E"
        />
      </svg>
    </button>
  );
};

export default CartIcon;
