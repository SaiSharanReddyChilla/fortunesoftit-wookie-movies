import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import moviesReducer from '../reducers/moviesReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        movies : moviesReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore