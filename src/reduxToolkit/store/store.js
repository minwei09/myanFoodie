import {configureStore} from '@reduxjs/toolkit'

import themeReducer from '../features/theme'
import cartReducer from '../features/cart'
import shopReducer from '../features/shop'

const store = configureStore({
    reducer: {
        theme: themeReducer,
        cart: cartReducer,
        shop: shopReducer,
    }
})

export default store