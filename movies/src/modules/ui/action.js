
import {createAction} from 'redux-actions'

export const  REQUEST_MOVIES_DATA='REQUEST_MOVIES_DATA';
export const RECEIVE_MOVIES_DATA='RECEIVE_MOVIES_DATA';

export const  REQUEST_SEARCH_MOVIES='RREQUEST_SEARCH_MOVIES';
export const RECEIVE_SEARCH_MOVIES='RECEIVE_SEARCH_MOVIES';

export const REQUEST_MOVIE_DETAIL='REQUEST_MOVIE_DETAIL';
export const RECEIVE_MOVIE_DETAIL='RECEIVE_MOVIE_DETAIL';


export const requestMoviesData=createAction(REQUEST_MOVIES_DATA);
export const receiveMoviesData=createAction(RECEIVE_MOVIES_DATA);

export const requestSearchMovies=createAction(REQUEST_SEARCH_MOVIES);
export const receiveSearchMovies=createAction(RECEIVE_SEARCH_MOVIES);

export const requestMovieDetail=createAction(REQUEST_MOVIE_DETAIL);
export const receiveMovieDetail=createAction(RECEIVE_MOVIE_DETAIL);
