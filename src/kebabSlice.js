import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    toppings: ['onion'],
    souce: true
}

export const kebabSlice = createSlice({
    name: 'kebab',
    initialState,
    reducers: {
        toggleSouce: (state) => {
            state.souce = !state.souce
        },
        addKebabTopping: (state, action) => {
            state.toppings = [ ...state.toppings, action.payload]
        }


    }
})

export const {toggleSouce, addKebabTopping} = kebabSlice.actions
export default kebabSlice.reducer