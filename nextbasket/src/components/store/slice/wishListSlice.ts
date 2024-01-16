import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import WishListProduct from "../../types/CartProduct";

export interface WishListState {
  wishList: WishListProduct[];
}
interface IncreaseQuantityPayload {
  id: number;
}

interface DecreaseQuantityPayload {
  id: number;
}

interface RemoveItemPayload {
  id: number;
}

const wishListSlice = createSlice({
  name: "wishList",
  initialState: { wishList: [] } as WishListState,
  reducers: {
    addToWishList: (state, action) => {
        const itemInCart = state.wishList.find(
          (item) => item.id === action.payload.id
        );
      
        if (!itemInCart) {
          state.wishList.push({ ...action.payload, quantity: 1 });
        }
      },
    increaseQuantity: (
      state,
      action: PayloadAction<IncreaseQuantityPayload>
    ) => {
      const item = state.wishList.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined) {
        item.quantity++;
      }
    },

    decreaseQuantity: (
      state,
      action: PayloadAction<DecreaseQuantityPayload>
    ) => {
      const item = state.wishList.find((item) => item.id === action.payload.id);
      if (item && item.quantity !== undefined && item.quantity > 1) {
        item.quantity--;
      }
    },

    removeItem: (state, action: PayloadAction<RemoveItemPayload>) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWishList, increaseQuantity, decreaseQuantity, removeItem } =
wishListSlice.actions;

export const wishListReducer = wishListSlice.reducer;
