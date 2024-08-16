import React, { createContext, useContext, useReducer } from "react";

import { CartContextType } from "@/interface";
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

  return (
    <CartContext.Provider value={{ products, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
