import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './utilities/features/cartSlice'


export const store = configureStore({
    reducer: {
        cart:cartReducer,
    },
})
