import React from 'react';
import { Link } from 'react-router-dom';
import RatingStar from './RatingStar';
import { useLocation } from 'react-router-dom';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = () => {
    const location = useLocation();
    const movie = location?.state?.movie;
    const imageURL = movie.poster_path?"https://image.tmdb.org/t/p/w500/"+movie.poster_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReinzo7ngVl_9jmUnEFtxIoCojuoGr4VzrAA&usqp=CAU"

  return (
    <div className="box">
        <div className="container">
            <div className="movie-list">
                <div className="movie-details">
                    {movie?<>
                    <div className='Home'>
                       <Link to="/" ><FontAwesomeIcon icon={faHome} /></Link>
                    </div>
                <img src={imageURL} className="movie-image" />
                <h2>{movie.title}</h2>
                <RatingStar rating={movie.vote_average}/>
                <br/>
                <p>Release Date: {movie.release_date}</p>
                <p>Description: {movie.overview}</p>
                    </>:<></>}
                </div>
            </div>
        </div>
    </div>
  );
};

export default MovieDetails;
