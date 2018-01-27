import {createStore, applyMiddleware, compose, Store} from 'redux';
import {routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers, {GlobalState} from './modules';
import history from './history';

const router = routerMiddleware(history);

const enhancer = compose(
  applyMiddleware(router, thunk),
  window['devToolsExtension'] ? window['devToolsExtension']() : (f: any) => f,
);

const store = createStore(reducers, enhancer) as Store<GlobalState>;

export default store;
