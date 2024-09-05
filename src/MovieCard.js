import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
  return (
    <div>
      <div class="movie_card" id="bright">
            <div class="info_section">
              <div class="movie_header">
                <img class="locandina" src={movie.main_img}/>
                <h1>{movie.Title}</h1>
                <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={movie.Rate}
                />
                <br/>
                <h4>{movie.Date}</h4>
                <span class="minutes">{movie.Time}</span>
                <p class="type">{movie.Genre}</p>
              </div>
              <div class="movie_desc">
                <p class="text">
                {movie.Description}
                </p>
              </div>
            <Link to={'/trailer/${movie.id}'}> <button> Trailer </button></Link>
            <div class="blur_back "> </div>
      </div>       
    </div>
    </div>
  )
}

export default MovieCard
