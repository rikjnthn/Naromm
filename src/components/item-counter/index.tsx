"use client";
import React from "react";

import PlusIcon from "../plus-icon";
import MinusIcon from "../minus-icon";
import { useProducts } from "@/context/cart-context";
import { CartPayloadType } from "@/interface";

const ItemsCounter = (props: CartPayloadType) => {
  const { dispatch } = useProducts();

  return (
    <div className={"flex max-w-32 items-center"}>
      <PlusIcon
        onClick={() => dispatch({ type: "INCREMENT_ITEM", payload: props })}
      />
      <input
        className="w-full bg-transparent text-center text-xs md:text-base"
        type="text"
        inputMode="numeric"
        pattern="[0-9]"
        min={1}
        value={props.amount}
        readOnly
      />
      <MinusIcon
        onClick={() => dispatch({ type: "DECREMENT_ITEM", payload: props })}
      />
    </div>
  );
};

export default ItemsCounter;
