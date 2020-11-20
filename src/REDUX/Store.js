import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import firebaseRdx from './Ducks'

const rootRdx = combineReducers({
    fireStore: firebaseRdx

})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function crearMainStore() {
    const mainStore = createStore( rootRdx, composeEnhancers( applyMiddleware(thunk) ) )
    return mainStore
}