import React, { createContext, useContext, useEffect, useReducer } from "react";

import { CartContextType, CartPayloadType } from "@/interface";
import { cartReducer } from "@/reducer/cart-reducer";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useProducts = () => {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useProducts need to be use inside ProductContextProvider");

  return context;
};

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    if (!localStorage.getItem("cart-products")) {
      localStorage.setItem("cart-products", JSON.stringify([]));
    }

    const cartProducts = JSON.parse(
      localStorage.getItem("cart-products") ?? "",
    ) as CartPayloadType[];

    cartProducts.forEach((cartProduct) => {
      dispatch({ type: "ADD_ITEM", payload: cartProduct });
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("cart-products", JSON.stringify(products));
  }, [products]);

  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
