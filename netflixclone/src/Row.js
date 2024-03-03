import React, { useEffect, useState } from 'react'
import './row.css'
import axios from './Axios';

const Row = ({ title, fetchUrl, isLarge }) => {
    const baseURL = "https://image.tmdb.org/t/p/original/";
const[movies,setMovies]=useState([]);
useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
},[fetchUrl]);

  return (
    <div className='row'>
      <h2 className='row__title'>{title}</h2>
      <div className="row__posters">
      {movies?.map((movie) => (            
          <img
            key={movie.id}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
            src={`${baseURL}${isLarge ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Row
