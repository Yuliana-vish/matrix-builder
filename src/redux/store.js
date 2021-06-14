import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { settings, matrix } from './matrix/reducer';

const rootReducer = combineReducers({
  settings,
  matrix,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;



