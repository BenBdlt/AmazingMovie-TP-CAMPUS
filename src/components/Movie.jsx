import React from "react";
import ListItem from 'framework7-react';
const Movie = ({ movie }) => {
  return (
    <ListItem>
        <img src={movie.Poster} className="lazy" />

        <div>
            <p>{movie.Title}</p>

            <span>{movie.imdbRating}/10</span>
        </div>
    </ListItem>
  )
}
export default Movie;