import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    repositories: ['pokemon', 'alaska'],
    username: 'Sandu',
    inputValue: '',
    flag: true
}

export const stateSlice = createSlice({
    name: 'mainState',
    initialState,
    reducers: {
        toggleFlag: (state) => {
            state.flag = !state.flag
        },

        setUsername: (state, newUsername) => {
            state.username = newUsername.payload
        },
        setInputValue: (state, newInputValue) => {
            state.inputValue = newInputValue.payload
        },
        setRepositories: (state, newRepositories) => {
            state.repositories = [...state.repositories, newRepositories.payload]
        }


    }
})

export const {setUsername, setInputValue, setRepositories, toggleFlag} = stateSlice.actions
export default stateSlice.reducer