import { createSlice } from "@reduxjs/toolkit";
import { productsList, productTypes } from "@/data/store";
import { purchaseItems } from "./purchaseAction";

let itemList = [];

productTypes.forEach((type) => {
  itemList.concat(productsList[type]);
});

const initialState = {
  items: itemList,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(purchaseItems.type, (state, action) => {
      const ids = action.payload.cart.map((item) => item.id);

      state.items.map((item) => {
        if (ids.includes(item.id)) {
          item.quantity -= cart.find((i) => i.id === item.id).quantity;
        }
      });
    });
  },
});

const productsReducer = productsSlice.reducer;

export default productsReducer;