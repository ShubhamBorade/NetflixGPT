import { useEffect } from "react";
import { addTrailerMovies } from "../../utils/movieSlice";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);

    const filterData = json.results.filter((video) => video.type === "Trailer"); // filter the movies from list of 15 who has type equal to trailer
    const trailer = filterData.length ? filterData[0] : json.results[0]; //when ther is no movies with type equal to filer then take the first move from array of 15 and no matter if its type is trailer or not
    console.log(trailer);
    dispatch(addTrailerMovies(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
