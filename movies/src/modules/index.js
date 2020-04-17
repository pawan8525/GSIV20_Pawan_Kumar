import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {routerReducer} from 'react-router-redux'
import { takeEvery, takeLatest, delay } from 'redux-saga';
import { take, put, call, fork, select, spawn, all } from 'redux-saga/effects';


//Entities
import {ui} from './ui/reducer';
import * as uiSagas from './ui/sagas';


export const rootReducer=combineReducers({
    ui  
});

//export default rootReducer;

export function* rootSaga(){
    yield all([
        ...Object.values(uiSagas)
    ].map(fork))
}