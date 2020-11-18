import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import pedidosRdx from './Ducks'

const rootRdx = combineReducers({
    pedidos: pedidosRdx
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function crearMainStore() {
    const mainStore = createStore( rootRdx, composeEnhancers( applyMiddleware(thunk) ) )
    return mainStore
}