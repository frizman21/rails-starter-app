import {SET_COUNTER} from './counterTypes';

export function setCounter(counter) {
  return {
    type: SET_COUNTER,
    counter: counter
  };
}
