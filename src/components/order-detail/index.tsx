"use client";
import React from "react";

import { useProducts } from "@/context/cart-context";

const OrderDetail = () => {
  const { products } = useProducts();

  const subtotal = products.reduce((prev, curr) => {
    return prev + curr.amount * parseInt(curr.price);
  }, 0);

  const shippingCost = subtotal <= 0 ? 0 : 10;

  const total = subtotal + shippingCost;

  return (
    <div className="mt-auto p-[30px]">
      <div>
        <div className="flex justify-between">
          <span className="font-bold text-primary-base">Subtotal</span>
          <span>{"$ " + subtotal.toString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-bold text-primary-base">Shipping cost</span>
          <span>{"$ " + shippingCost.toString()}</span>
        </div>
        <div className="mt-7 flex justify-between">
          <span className="text-xl font-bold text-primary-base">Total</span>
          <span className="text-xl font-semibold">
            {"$ " + total.toString()}
          </span>
        </div>
      </div>

      <button
        className="mt-6 flex w-full justify-center rounded-full bg-secondary-base py-2 text-white"
        title="Order"
        type="button"
      >
        Order
      </button>
    </div>
  );
};

export default OrderDetail;
