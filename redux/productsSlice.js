import { createSlice } from "@reduxjs/toolkit";
import { productsList } from "@/data/store";
import { purchaseItems } from "./purchaseAction";

let itemList = [];

Object.keys(productsList).forEach((type) => {
  productsList[type].forEach((product) => {
    itemList.push({
      ...product,
    });
  });
});

const initialState = {
  items: [...itemList],
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(purchaseItems.type, (state, action) => {
      const ids = action.payload.cart.map((item) => item.id);

      return {
        ...state,
        items: state.items.map((item) => {
          if (ids.includes(item.id)) {
            return {
              ...item,
              inventory:
                item.inventory - action.payload.cart.find((i) => i.id === item.id).quantity,
            };
          }

          return item;
        }),
      };
    });
  },
});

const productsReducer = productsSlice.reducer;

export default productsReducer;
