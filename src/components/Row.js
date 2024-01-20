import axios from '../api/axios';
import React, { useState,useEffect, useCallback } from 'react'
import "./Row.css";
import Moviemodal from "./Movimodal";
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    <Container>
        <h2>{title}</h2>
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            loop={true}
            navigation
            pagination={{clickable:true}}
            breakpoints={{
                1920 : {
                    slidesPerView :6,
                    slidesPerGroup :6,
                },
                998: {
                    slidesPerView :5,
                    slidesPerGroup :5,
                },
                625 : {
                    slidesPerView :5,
                    slidesPerGroup :5,
                },
                0 : {
                    slidesPerView :3,
                    slidesPerGroup :3,
                }

            }}>
            <Content id={id}>
                {movies.map(movie => (
                    <SwiperSlide>
                        <Wrap>
                        <img 
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                            alt = {movie.title}
                            onClick={() => click(movie)}
                            />
                        </Wrap>                
                    </SwiperSlide>
                    ))}       
            </Content>
        </Swiper>



        {openModal &&
        <Moviemodal
        {...select}
        setModal={setOpenModal}/>
        }
    </Container>    

  )
}

export default Row

const Container = styled.div`
    padding: 0 0 26px;`;

const Content = styled.div``;

const Wrap = styled.div`
    width: 95%;
    height: 95%;
    padding-top: 56.25%;
    border-radius:10px;
    box-shadow: rgba(0 0 0/69%) 0px 26px 30px -10px,
                rgba(0 0 0/73%) 0px 16px 10px -10px;
    cursor: pointer;
    overlfow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 045, 0.94);
    border : 3px solid rgba(249, 249, 249, 0.1);

    img {
        inset: 0px;
        display: block;
        height : 100%;
        object-fit: cover;
        opacity : 1;
        position: absolute;
        width: 100%;
        transition : opacity 500ms ease-in-out;
        z-index:1;
    }

    &:hover {
        box-shadow: rgba(0 0 0 /80%) 0px 40px 58px -16px,
                    rgba(0 0 0 /72%) 0px 30px 22px -10px;
        transform : scale(0.98);
        border-color : rgba(249,249,249, 0.8);            
    }`;


        