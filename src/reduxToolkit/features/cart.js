import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    displayCart: false
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart:(state, action) => {
        state.displayCart = true
    },
    hideCart:(state, action) => {
        state.displayCart = false
    },
  }
});

export const {showCart, hideCart} = cart.actions

export default cart.reducer