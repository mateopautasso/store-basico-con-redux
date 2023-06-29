import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalCount: 0,
    productsList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
        state.totalCount += 1;
        state.productsList = [...state.productsList, action.payload];
    },
    removeCart: (state, action) => {
        state.totalCount -= 1;
        state.productsList = state.productsList.filter(pdt => pdt.id !== action.payload);
    }
  }
})
export const { addCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer