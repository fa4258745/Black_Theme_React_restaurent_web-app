import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "myCart",
  initialState: {
    cart: [],
    favourite: [],
  },

  reducers: {
    addToCart: (state, actions) => {
      const mydata = state.cart.filter((key) => key.id === actions.payload.id);
      if (mydata.length >= 1) {
        toast.warn("This product is already in the cart");
      } else {
        state.cart.push({ ...actions.payload, qnty: 1 });
        toast.success("Product added to cart");
      }
    },

    addToFav: (state, action) => {
      const exists = state.favourite.some((item) => item.id === action.payload.id);
      if (exists) {
        toast.info("This product is already in favorites");
      } else {
        state.favourite.push(action.payload);
        toast.success("Product added to favorites");
      }
    },

    qntyInc: (state, actions) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload.id) {
          state.cart[i].qnty++;
        }
      }
    },

    qntyDec: (state, actions) => {
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i].id === actions.payload.id) {
          if (state.cart[i].qnty <= 1) {
            toast.error("Quantity cannot be less than 1");
          } else {
            state.cart[i].qnty--;
          }
        }
      }
    },

    proRemove: (state, actions) => {
      state.cart = state.cart.filter((item) => item.id !== actions.payload.id);
      toast.success("Product removed from cart");
    },

    favRemove: (state, actions) => {
      state.favourite = state.favourite.filter((item) => item.id !== actions.payload.id);
      toast.success("Product removed from favorites");
    },
  },
});

export const {
  addToCart,
  qntyDec,
  qntyInc,
  proRemove,
  addToFav,
  favRemove,
} = cartSlice.actions;

export default cartSlice.reducer;
