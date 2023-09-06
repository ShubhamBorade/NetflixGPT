import React,{useEffect} from 'react'
import { API_OPTIONS } from '../utils/constants'

const VideoBackground = ({movieId}) => {

    //fetching the Trailer video
   
    const getMovieVideos = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/976573/videos?language=en-US',API_OPTIONS);
        const json = await data.json();
        console.log(json.results)

        const filterData = json.results.filter(video=>video.type=== "Trailer");// filter the movies from list of 15 who has type equal to trailer
        const trailer = filterData.length ? filterData[0] : json.results[0]; //when ther is no movies with type equal to filer then take the first move from array of 15 and no matter if its type is trailer or not
        console.log(trailer);
    }
     
    useEffect(() => {
        getMovieVideos();
    }, [])

    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hXzcyx9V0xw?si=FF6MEaRedL5SXTyQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground
