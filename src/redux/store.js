import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { matrix } from './matrix/reducer';

const rootReducer = combineReducers({
  matrix,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
