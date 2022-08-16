import {combineReducers, configureStore} from "@reduxjs/toolkit";
import mainStateReducer from './stateSlice'
import pizzaReducer from './pizzaSlice'
import kebabReducer from './kebabSlice'

export const store = configureStore({
    reducer: // {mainState: mainStateReducer}
        combineReducers({
            mainState: mainStateReducer,
            pizza: pizzaReducer,
            kebab: kebabReducer
        })
})