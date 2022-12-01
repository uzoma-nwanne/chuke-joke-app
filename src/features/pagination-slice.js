import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  start: 0,
  end: 6,
}

export const paginationSlice = createSlice({
  name: 'paginationCounter',
  initialState,
  reducers: {
    loadMore: (state) => {
      state.start += 6
      state.end += 6;
    },
    loadPrevious: (state) => {
        state.start -= 6
        state.end -= 6;
    },
  },
})

// Action creators are generated for each case reducer function
export const { loadMore, loadPrevious } = paginationSlice.actions

export default paginationSlice.reducer