import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    addPopularMovies: null,
    addTopRatedMovies: null,
    addUpComingMovies: null,
    addTrailerMovies: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.addPopularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.addTopRatedMovies = action.payload;
    },
    addUpComingMovies: (state, action) => {
      state.addUpComingMovies = action.payload;
    },
    addTrailerMovies: (state, action) => {
      state.addTrailerMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerMovies,
  addPopularMovies,
  addTopRatedMovies,
  addUpComingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
