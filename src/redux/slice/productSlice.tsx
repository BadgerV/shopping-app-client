import { createSlice } from "@reduxjs/toolkit";


interface ProductItems {
    id : string,
    name : string,
    description : string,
    price : number
}

interface ProductState {
 products : ProductItems[]   
}
const initialState  :ProductState = {
    products : []
}

const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {

    }
}) 

export default productSlice.reducer;