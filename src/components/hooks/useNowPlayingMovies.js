import { useDispatch } from "react-redux";
import {addNowPlayingMovies} from "../../utils/movieSlice"
import { useEffect } from "react";
import { API_OPTIONS } from '../../utils/constants'

const useNowPlayingMovies = () =>{
        //fetching the movies and storing the movies data into redux store.

        const dispatch = useDispatch()

        const getNowPlayingMovies = async () =>{
            const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
            console.log(data)
            const json = await data.json();
            console.log(json.results)
            dispatch(addNowPlayingMovies(json.results))
        } 
    
        useEffect(() => {
           
            getNowPlayingMovies();
    
        }, [])
}

export default useNowPlayingMovies;