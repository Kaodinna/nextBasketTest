import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
  toggleCart: boolean;
}

const initialState: ModalState = {
  isOpen: false,
  toggleCart: false,
};

export const cartModalSlice = createSlice({
  name: "cartModal",
  initialState,
  reducers: {
    modalOpen: (state) => {
      state.isOpen = true;
    },
    modalClose: (state) => {
      state.isOpen = false;
    },
    toggleCart: (state) => {
      state.toggleCart = !state.toggleCart;
    },
    closeCart: (state) => {
      state.toggleCart = false;
    },
  },
});

export const { modalOpen, modalClose, toggleCart, closeCart } =
  cartModalSlice.actions;

export default cartModalSlice.reducer;
