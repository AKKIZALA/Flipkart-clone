import { configureStore } from "@reduxjs/toolkit";
import cartslice from "../store/CreateSlice"

const Store = configureStore({
    reducer:{
        cart:cartslice
    }
})
export default Store