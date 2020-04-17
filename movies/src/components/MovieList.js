import React from 'react';
import MovieCard from './MovieCard'
import './MovieList.css'

const  MovieList=(props)=>{
    const movies=props.movies.map((movie)=>{
        return<MovieCard key={movie.id} image={movie}/>
    });

    return(
    <div className="movie-list">{movies}</div>
    );
};
export default MovieList;