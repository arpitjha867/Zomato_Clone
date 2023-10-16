import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
    amount : 0  ,
    total : 0,
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addItem : (state,action) => {
            let data = action.payload
            state.cartItems.push(data);
            state.amount = state.amount +1;
        },
        increase: (state,action)=>{
            const cartItem = state.cartItems.find(item=>{
                return item.id === action.payload
            })
            cartItem.amount = cartItem.amount + 1;
            state.amount = state.amount +1;
        },
        decrease : (state,action) => {
            const cartItem = state.cartItems.find(item=>{
                return item.id === action.payload
            })
            cartItem.amount = cartItem.amount - 1;
            state.amount = state.amount -1;
        },
        removeItem : (state,action) => {
            state.cartItems = state.cartItems.filter(item=>{
                return item.id !== action.payload;
            })
            state.amount = state.amount -1;
        },
        calculateTotal : (state) => {
            let total = 0;
            state.cartItems.forEach(item=>{
                total += item.amount * item.avg_spend;
            })
            state.total = total;
        }
    }
})




export default cartSlice.reducer;
export const {addItem,increase,decrease,removeItem,calculateTotal} = cartSlice.actions;