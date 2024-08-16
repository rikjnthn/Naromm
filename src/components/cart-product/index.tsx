"use client";
import Image from "next/image";
import React from "react";

import BinIcon from "../bin-icon";
import ItemsCounter from "../item-counter";
import { CartPayloadType } from "@/interface";
import { useProducts } from "@/context/cart-context";

const CartProduct = (props: CartPayloadType) => {
  const { dispatch } = useProducts();

  return (
    <div className="overflow flex h-36 w-full gap-5">
      <div className="min-w-28 md:min-w-52">
        <Image
          className="mx-auto h-full w-auto rounded-md object-cover"
          src={props.imageSrc}
          alt={props.name}
          width={112}
          height={112}
        />
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <div className="line-clamp-1 w-full text-lg font-semibold text-primary xs:line-clamp-2 md:text-xl">
            {props.name}
          </div>
          <div className="text-sm md:text-base">{"$ " + props.price}</div>
        </div>

        <div className="mt-auto flex gap-5">
          <ItemsCounter {...props} />
          <div className="flex">
            <BinIcon
              onClick={() => dispatch({ type: "REMOVE_ITEM", payload: props })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
