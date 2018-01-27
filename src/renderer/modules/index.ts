import {combineReducers, Reducer} from 'redux';
import counter, { CounterState } from './counter';

export type GlobalState = {
  counter: CounterState;
};

export default combineReducers({
  counter,
}) as Reducer<GlobalState>;
