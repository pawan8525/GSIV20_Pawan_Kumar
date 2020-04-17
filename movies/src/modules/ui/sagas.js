import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux'
import {  takeLatest, delay } from 'redux-saga';
import { takeEvery, take, put, call, fork, select, spawn, all } from 'redux-saga/effects';

import {getMovieData, searchMovies,getMovieDetail} from './api'
//Entities
import {
    REQUEST_MOVIES_DATA,
    REQUEST_SEARCH_MOVIES,
    REQUEST_MOVIE_DETAIL,
    receiveMoviesData,
    receiveSearchMovies,
    receiveMovieDetail,
    
} from './action';



function* callRequestMoviesData(action){
    var results=yield call(getMovieData,action.payload)
    yield put(receiveMoviesData(results))
}

export function* requestMovieDataSaga(){
    yield takeEvery(REQUEST_MOVIES_DATA,callRequestMoviesData)
}

function* callRequestSearchMovie(action){
    var results=yield call(searchMovies,action.payload)
    yield put(receiveSearchMovies(results))    
}

export function* requestSearchMoviesSaga(){
    yield takeEvery(REQUEST_SEARCH_MOVIES,callRequestSearchMovie)
}

function* callRequestMovieDetail(action){
    var result=yield call(getMovieDetail,action.payload)
    yield put(receiveMovieDetail(result))
}
export function* requestMovieDetailSaga(){
    yield takeEvery(REQUEST_MOVIE_DETAIL,callRequestMovieDetail)
}
