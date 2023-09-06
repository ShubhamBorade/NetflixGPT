import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {

    const movies = useSelector(store=>store.movies?.nowPlayingMovies); //the movies will have list of 20 movies but we need only one to show the trailer over main page
    
    if(!movies) return; //initially our store will not have any movies so we are returning from here otherwise it will through error, it wont execute below code when movies is empty(this is know as early return)

    const mainMovie = movies[0];
    console.log(mainMovie)
    
    const {original_title,overview,id} = mainMovie; //we are extracting details of a movie which is at index zero so that we can play his traler on home page

    return (
        <div>
            <h1>Maincontainer</h1>
            <VideoTitle title={original_title} overview={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer
