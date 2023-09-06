import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from 'axios'
import Axios from './Axios';
import request from './Request';
import YouTube from "react-youtube"
import movieTrailer from 'movie-trailer'
function Row({ title, fetchURL, isLargeRow }) {
    const [ movies, setMovies ] = useState( [] );
    const [ trailurl, setTrailurl ] = useState("");

  let baseURL = "https://api.themoviedb.org/3"; //to get the whole(Api call)
  let base_url = `https://image.tmdb.org/t/p/original`; //for image
  useEffect(() => {
    // below is syntactic sugare(atsatsfu becha new yemelewyew) of promis
    async function fetchData() {
      const request = await Axios.get( fetchURL);
      setMovies(request.data.results);
      console.log(request);
    }
      fetchData();
  }, []);
    console.log( movies );
    
    const handlClick = (movie) =>
    {
        console.log("yes man")
        if ( trailurl )
        {
        setTrailurl( "" );  
        } else{
        movieTrailer(movie?.title || movie?.name || movie?.original_name)
          .then((url) => {
            const urlPars = new URLSearchParams(new URL(url).search);
            //the above yemeseraw url stringwu searchable endehon maderege or yemetawun "url" lemebetaten
            //video id lemawutate
            setTrailurl(urlPars.get("v"));
          })
          .catch((error) => {
            console.log("thr error is" + error);
          });
            // movieTrailer(null ,{ tmdbId: movie.id })
            //        .then((url)=>{
            //          console.log("url is "+url);
            //          const urlParams=new URLSearchParams(new URL(url).search);
            //          console.log("urlParamsn"+urlParams);
            //          setTrailurl(urlParams.get("v"));
            //        })
            //        .catch((error)=> console.log(error));          
            
        }
    }
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
}
  return (
    <div className="row">
      <h2>{title}</h2>
      {/*let us bring the image first */}
      <div className="row__posters">
        {movies.map((movie) => {
          {
            /*the base_url is image magegna */
          }
          return (
            <img onClick={() => { handlClick(movie)}}
              className={`row__poster ${isLargeRow && "row__posterLarg"}`}
              src={`${base_url}${ isLargeRow ?  movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
              key={movie.id}
            />
          );
        })}
          </div>    
          
          <div style={{padding: " 40px"}}>
              { trailurl && <YouTube videoId = { trailurl } opts={opts} />}
          </div>
    </div>
  );
}
export default Row

