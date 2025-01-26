import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TBasketItem, TBasketState } from "./basket.types";

const initialState: TBasketState = {
  items: [],
  total: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<TBasketItem>) => {
      const uniqueKey = `${action.payload.id}-${
        action.payload.modifier?.id || "no-modifier"
      }`;

      const existingItem = state.items.find(
        (item) => item.uniqueKey === uniqueKey
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          uniqueKey,
        });
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    removeFromBasket: (state, action: PayloadAction<{ uniqueKey: string }>) => {
      state.items = state.items.filter(
        (item) => item.uniqueKey !== action.payload.uniqueKey
      );

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ uniqueKey: string; quantity: number }>
    ) => {
      const { uniqueKey, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.uniqueKey === uniqueKey
      );

      if (existingItem) {
        existingItem.quantity = Math.max(1, quantity);
      }

      state.total = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
  },
});

export const { addToBasket, removeFromBasket, updateQuantity } =
  basketSlice.actions;
export default basketSlice.reducer;
