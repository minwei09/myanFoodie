import { createSlice } from '@reduxjs/toolkit'
import cart, { showCart } from './cart';

const initialState = {
    cart: [],
    amount: 0,
    total: 0,

}

const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    addToCart: (state, action) => {

        const check = state.cart.find( s => s.id === action.payload.id)
        if(check) {
            check.quantity += 1
            state.amount += 1
            state.total += check.price
        }
        else{
            const item = {...action.payload, quantity : 1}
            state.cart.push(item)
            state.amount += 1
            state.total += item.price

        } 
    },
    increase: (state, action) => {
        const existItem = state.cart.find( f => f.id === action.payload.id)
        if(existItem) {
            existItem.quantity += 1
            state.amount += 1
            state.total += existItem.price
        }
    },
    decrease: (state, action) => {
        const existItem = state.cart.find( f => f.id === action.payload.id)
        if(existItem) {
            existItem.quantity -= 1 
            state.amount -= 1 
            state.total -= existItem.price
        }
        if(existItem.quantity === 0){
            state.cart = state.cart.filter( s => s.id !== existItem.id)
        }
    },
    deleteAll: (state, action) => {
       state.cart = []
       state.amount = 0
       state.total = 0
    }
  }
});

export const  {addToCart, increase, decrease, deleteAll} = shop.actions

export default shop.reducer