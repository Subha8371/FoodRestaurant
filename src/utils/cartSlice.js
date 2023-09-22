import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",

    initialState:{
        items:[]
    },

    reducers:{
        addItem:(state, action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.splice(action.payload,1);        //array.splice(index,howmany_item_we_remove) --> deleting from this index value
        },                                               //array.splice(index,"xx","YY")--> add xx,yy from this index value
        clearcart:(state)=>{
            state.items=[];
        }
    }
})

export const {addItem,removeItem,clearcart}=cartSlice.actions;    //destructuring
export default cartSlice.reducer;                                //dont know why reducer