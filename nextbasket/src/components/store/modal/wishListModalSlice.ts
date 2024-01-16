import { createSlice } from "@reduxjs/toolkit";

interface WishListModalState {
  isOpen: boolean;
  toggleWishList: boolean;
}

const initialState: WishListModalState = {
  isOpen: false,
  toggleWishList: false,
};

export const wishListModalSlice = createSlice({
  name: "wishListModal",
  initialState,
  reducers: {
    wishListModalOpen: (state) => {
      state.isOpen = true;
    },
    wishListModalClose: (state) => {
      state.isOpen = false;
    },
    toggleWishList: (state) => {
      state.toggleWishList = !state.toggleWishList;
    },
    closeWishList: (state) => {
      state.toggleWishList = false;
    },
  },
});

export const {
  wishListModalOpen,
  wishListModalClose,
  toggleWishList,
  closeWishList,
} = wishListModalSlice.actions;

export default wishListModalSlice.reducer;
