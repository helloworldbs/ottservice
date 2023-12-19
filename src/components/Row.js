import axios from '../api/axios';
import React, { useState,useEffect, useCallback } from 'react'
import "./Row.css";
import Moviemodal from "./Movimodal";

const Row = ({title, id, fetchUrl}) => {
    const [movies, setMovies] = useState([])
    const [openModal, setOpenModal] = useState(false);
    const [select, setSelect] = useState({});

    const fetchMovieData = useCallback(async () => {
        const response = await axios.get(fetchUrl);
        console.log(response);
        setMovies(response.data.results);
    }, [fetchUrl])

    useEffect(() =>{
        fetchMovieData();
    },[fetchMovieData])

    const click = (movie) => {
        setOpenModal(true);
        setSelect(movie);
    }

  return (
    <div>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left'>
            <span className='arrow'
                onClick={() => { document.getElementById(id).scrollLeft -= window.innerWidth - 80; }}>
                {"<"}
            </span>
        </div>
        <div id={id} className='row_posters'>
            {movies.map(movie => (
                <img 
                key={movie.id}
                className='row_poster'
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt = {movie.title}
                onClick={() => click(movie)}
                />
            ))}
        </div>
        <div className='slider__arrow-right'>
            <span className='arrow'
                onClick={()=> { document.getElementById(id).scrollLeft += window.innerWidth - 80; }}>
                {">"}
            </span>
        </div>
      </div>
                
       {openModal &&
        <Moviemodal
        {...select}
        setModal={setOpenModal}/>
        }
        
    

    </div>
  )
}

export default Row
