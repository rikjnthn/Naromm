"use client";
import React from "react";

import CartProduct from "@/components/cart-product";
import OrderDetail from "@/components/order-detail";
import BackIcon from "@/components/back-icon";
import { SetStateType } from "@/interface";
import { useProducts } from "@/context/cart-context";

const Cart = ({ setIsOpenCart }: { setIsOpenCart: SetStateType<boolean> }) => {
  const back = () => {
    setIsOpenCart(false);
  };

  const { products } = useProducts();

  return (
    <div className="height-full flex flex-col bg-page">
      <header className="flex items-center gap-4 px-5 py-2">
        <BackIcon onClick={back} />
        <span className="text-xl font-bold text-primary">Cart</span>
      </header>

      <div className="hide-scrollbar flex flex-col gap-10 overflow-scroll px-[30px] py-5 pb-10">
        {products.map((product) => {
          return <CartProduct key={product.id} {...product} />;
        })}
      </div>

      <OrderDetail />
    </div>
  );
};

export default Cart;
