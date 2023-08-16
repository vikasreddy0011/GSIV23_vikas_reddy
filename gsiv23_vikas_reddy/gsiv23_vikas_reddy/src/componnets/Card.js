import React from 'react';
import './style.css';
import RatingStar from './RatingStar';
import { useNavigate  } from 'react-router-dom';


const Card = ({ movie }) => {

    const navigate = useNavigate();
    
    const handleButtonClick = () => {
        navigate('/movie/'+movie.id,{state:{movie:movie}})
    };
    const imageURL = movie.poster_path?"https://image.tmdb.org/t/p/w500/"+movie.poster_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReinzo7ngVl_9jmUnEFtxIoCojuoGr4VzrAA&usqp=CAU"
    return(
    <>
    <div className="card" style={{"float":"left"}}>
            <div className="movie-card" >
                <img src={imageURL} className="movie-image" />
                <div className="container-inner">
                    <a onClick={e=>{handleButtonClick()}} className="hyperlink"> <h5   ><b >{movie.title}</b></h5></a>
                    <RatingStar rating={movie.vote_average} year={movie.release_date.split('-')[0]} className="movie-rating"/>
                    <p className="movie-year"><b>{movie?.release_date.split('-')[0]}</b></p>
                </div>
            </div>         
        </div>
  </>)
};

export default Card;