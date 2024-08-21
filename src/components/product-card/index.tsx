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
      className="product-wrapper"
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
        <h2 className="product-name">{props.name}</h2>

        <div className="mt-auto flex flex-col gap-2">
          <span className="text-sm font-medium lg:text-base">
            {"$ " + props.price}
          </span>

          <button
            onClick={addToCart}
            className="w-full rounded-md bg-secondary-base px-5 py-2 text-sm text-white hover:bg-secondary-light active:bg-secondary-dark lg:text-base"
            title="Add to cart"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
