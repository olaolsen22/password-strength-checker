import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducer from './redux/reducers';

const store = state => createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), state, applyMiddleware(thunk));

export default store;
