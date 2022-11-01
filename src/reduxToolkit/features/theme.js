import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme: 'light'
}

const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLightMode: (state, action) => {
        state.theme = 'light'
        document.documentElement.classList.remove('dark')
    },
    setDarkMode: (state, action) => {
        state.theme = 'dark'
        document.documentElement.classList.add('dark')
    }
  }
});

export const {setDarkMode, setLightMode} = theme.actions

export default theme.reducer