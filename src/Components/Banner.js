import axios from 'axios';
import React, { useEffect, useState } from 'react'
//at the banner netflix original image 
import './Banner.css'
function Banner ()
{
    const API_KEY = "3c845c24446f7f085f1f4bd025eca890";
    let fetchNetflixOriginals = `/discover/tv?api_key=${ API_KEY }&with_networks=213`; 
      const [movie, setMovie] = useState([]);
      let baseURL = "https://api.themoviedb.org/3"; //to get the whole(Api call)
      let base_url = `https://image.tmdb.org/t/p/original`; //for image
      useEffect(() => {
        // below is syntactic sugare(atsatsfu becha new yemelewyew) of promis
        async function fetchData() {
          const request = await axios.get(baseURL + fetchNetflixOriginals);
          setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)])
        //   console.log(request);
        }
          fetchData();
      }, [] );
    
    console.log( movie )
    
   function truncate(str, n){
       return str?.length > n ? str.substr( 0, n) + "..."  : str;
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url + movie?.backdrop_path})`,
        backgroundPosition: "center"
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">MyList</button>
        </div>
        <h1 className="banner__description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner__fadeButton"></div>
    </header>
  );
}

export default Banner

