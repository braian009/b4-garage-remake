import { createSlice } from "@reduxjs/toolkit";
import { purchaseItems } from "./purchaseAction";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload.item);
    },
    removeFromCart: (state, action) => {
      state.items.filter((item) => item !== action.payload.id);
    },
    setItemQuantity: (state, action) => {
      let itemInCart = state.items.find(
        (item) => item.id === action.payload.id
      );
      itemInCart.quantity = action.payload.amount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(purchaseItems.type, (state, action) => {
        state.items = [];
    }) 
  }
});

const cartReducer = cartSlice.reducer;


export const {addToCart, removeFromCart, setItemQuantity} = cartSlice.actions;
export default cartReducer;

