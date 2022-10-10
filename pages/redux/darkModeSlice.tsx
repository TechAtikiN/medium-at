import { createSlice } from '@reduxjs/toolkit'

export interface ThemeState {
    value: string
}

const initialState: ThemeState = {
    value: 'light',
}

export const darkModeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDark: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value = 'dark'
            console.log(state.value)
        },
        toggleLight: (state) => {
            state.value = 'light'
            console.log(state.value)
        }

    },
})

// Action creators are generated for each case reducer function
export const { toggleDark, toggleLight } = darkModeSlice.actions

export default darkModeSlice.reducer