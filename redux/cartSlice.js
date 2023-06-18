import { createSlice } from "@reduxjs/toolkit";
import { purchaseItems } from "./purchaseAction";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push({
        ...action.payload.item,
        quantity: 1,
      });
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    },
    setItemQuantity: (state, action) => {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: action.payload.amount,
            };
          }
          return item;
        }),
      };
    },
    resetCart: (state, action) => {
      return {
        ...state,
        items: [],
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(purchaseItems.type, (state, action) => {
      return {
        ...state,
        items: [],
      };
    });
  },
});

const cartReducer = cartSlice.reducer;

export const { addToCart, removeFromCart, setItemQuantity, resetCart } =
  cartSlice.actions;
export default cartReducer;
