import { CartActionType, CartPayloadType } from "@/interface";

export function cartReducer(
  products: CartPayloadType[],
  action: CartActionType,
) {
  switch (action.type) {
    case "ADD_ITEM":
      const productFound = products.find(
        (product) => product.id === action.payload.id,
      );

      if (!!productFound) {
        return cartReducer(products, {
          type: "INCREMENT_ITEM",
          payload: action.payload,
        });
      }

      return [...products, action.payload];

    case "INCREMENT_ITEM":
      return products.map((product) => {
        if (product.id !== action.payload.id) return product;

        return {
          ...product,
          amount: product.amount + 1,
        };
      });

    case "DECREMENT_ITEM":
      return products
        .map((product) => {
          if (product.id !== action.payload.id) return product;

          if (product.amount - 1 < 1) return;

          return {
            ...product,
            amount: product.amount - 1,
          };
        })
        .filter((product) => !!product);

    case "REMOVE_ITEM":
      return products.filter((product) => product.id !== action.payload.id);

    default:
      return products;
  }
}
