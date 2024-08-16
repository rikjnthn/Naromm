"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { MouseEvent } from "react";

import { useProducts } from "@/context/cart-context";
import { ProductType } from "@/interface";

const ProductCard = (props: ProductType) => {
  const router = useRouter();

  const productUrlPath = encodeURIComponent(props.name.replaceAll(" ", "-"));

  const { dispatch } = useProducts();

  const addToCart = (e: MouseEvent) => {
    e.stopPropagation();

    dispatch({
      type: "ADD_ITEM",
      payload: {
        ...props,
        amount: 1,
      },
    });
  };

  return (
    <div
      onClick={() => router.push(`/products/${productUrlPath}`)}
      className="h-76 max-w-44 cursor-default overflow-clip rounded-md shadow-md lg:h-99 lg:max-w-60"
    >
      <div className="h-1/2 overflow-hidden">
        <Image
          className="mx-auto h-full w-auto object-cover"
          src={props.imageSrc}
          alt={props.name}
          width={240}
          height={225}
        />
      </div>

      <div className="flex h-1/2 flex-col px-2 py-2">
        <h2 className="line-clamp-2 h-fit text-lg font-semibold text-primary lg:text-2xl">
          {props.name}
        </h2>

        <div className="mt-auto flex flex-col gap-2">
          <span className="text-sm font-medium lg:text-base">
            {"$ " + props.price}
          </span>

          <button
            onClick={addToCart}
            className="w-full rounded-md bg-secondary px-5 py-2 text-sm text-white lg:text-base"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
