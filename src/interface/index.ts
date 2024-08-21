import React from "react";

export type SetStateType<T> = React.Dispatch<React.SetStateAction<T>>;

export interface ProductType {
  id: string;
  category: CategoryType;
  imageSrc: string;
  name: string;
  price: string;
  descriptionFileName: string;
}

export type CategoryType =
  | "All"
  | "Moisturizer"
  | "Serum"
  | "Sunscreen"
  | "Cleanser";

export interface CartContextType {
  products: CartPayloadType[];
  dispatch: React.Dispatch<CartActionType>;
}

export interface CartActionType {
  type: "ADD_ITEM" | "INCREMENT_ITEM" | "DECREMENT_ITEM" | "REMOVE_ITEM";
  payload: CartPayloadType;
}

export interface CartPayloadType extends ProductType {
  amount: number;
}
