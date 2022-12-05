import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../utils/fetch.utils";

const initialState = {
  selectedCategory: "",
  jokes: {},
  loading: false,
  error: "",
};

export const fetchAsyncAllJokes = createAsyncThunk(
  "selectedCategory/fetchAsyncAllJokes",
  async () => {
    const response = await fetchData(
      "https://api.chucknorris.io/jokes/search?query=all"
    );
    return response;
  }
);

export const categorySlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: {
    [fetchAsyncAllJokes.pending] : (state) => {
      state.loading = true;
    },
    [fetchAsyncAllJokes.fulfilled]: (state, action) => {
     // return { ...state, jokes: payload };
      state.loading = false;
      state.jokes = action.payload;
      state.error  = '';
    },
    [fetchAsyncAllJokes.rejected]: (state, action) => {
      state.loading  = false;
      state.jokes = [];
      state.error = action.error.message;
   
    },
  }
});

// Action creators are generated for each case reducer function
export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
