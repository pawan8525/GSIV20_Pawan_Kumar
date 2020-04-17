
import {combineActions, handleAction} from 'redux-actions';
import { RECEIVE_MOVIES_DATA,RECEIVE_SEARCH_MOVIES,RECEIVE_MOVIE_DETAIL, receiveMoviesData,receiveSearchMovies,receiveMovieDetail } from './action';

var defaultState={
    items:[]
};
export const ui=handleAction(
    combineActions(
        receiveMoviesData,
        receiveSearchMovies,
        receiveMovieDetail
    ),
    {
        next(state,action){
            console.log("action",action)
            switch(action.type){
                case RECEIVE_MOVIES_DATA :
                    var newSate={
                        ...state
                    };
                    newSate.moviesData=action.payload
                    return newSate
               case  RECEIVE_SEARCH_MOVIES:
                        var newSate={
                            ...state
                        };
                        newSate.moviesData=action.payload
                        return newSate
                case RECEIVE_MOVIE_DETAIL:
                    var newSate={
                        ...state
                    };
                    newSate.movieDetail=action.payload
                    return newSate

                default:
                    return state;


            }
        },
        throw(state,action){
            switch(action.type){
                case RECEIVE_MOVIES_DATA:
                    var newState={
                        ...state
                    }
                    newState.moviesDataError=action.payload
                    return newState
                case RECEIVE_SEARCH_MOVIES:
                    var newState={
                        ...state
                    }
                    newState.moviesDataError=action.payload
                    return newState
                case RECEIVE_MOVIE_DETAIL:
                    var newState={
                        ...state
                    }
                    newState.moviesDetailError=action.payload
                    default:
                        return state
                
            }
        }

    },
    defaultState


)
