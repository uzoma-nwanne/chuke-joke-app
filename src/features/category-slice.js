import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCategory: ''
}

export const categorySlice = createSlice({
  name: 'selectedCategory',
  initialState,
  reducers: {
    setCategory: (state, action) => {
        state.selectedCategory = action.payload
      },  
  },
})

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions

export default categorySlice.reducer