"use client";
import React from "react";

import { useProducts } from "@/context/cart-context";
import { ProductType } from "@/interface";

const AddToCart = (props: ProductType) => {
  const { dispatch } = useProducts();

  const addToCart = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...props,
        amount: 1,
      },
    });
  };

  return (
    <div className="fixed bottom-0 flex w-full gap-2 bg-page p-5 max-md:flex-col md:static md:items-center md:justify-between">
      <span className="w-max font-bold md:text-xl">{"$ " + props.price}</span>
      <div className="flex items-center gap-5">
        <button
          onClick={addToCart}
          className="rounded-full bg-secondary-base py-2 text-white hover:bg-secondary-light active:bg-secondary-dark max-md:w-full md:rounded-md md:px-5"
          type="button"
          title="Add to cart"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
