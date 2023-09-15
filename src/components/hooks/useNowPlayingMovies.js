import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";

const useNowPlayingMovies = () => {
  //fetching the movies and storing the movies data into redux store.

  const dispatch = useDispatch();

  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json)
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies(); //we will fetch the nowplayingmovies only when its there inside our store
  }, []);
};

export default useNowPlayingMovies;
