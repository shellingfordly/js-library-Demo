import { combineReducers } from 'redux';

import * as reducer from './reducer';


const rootReducer = combineReducers({
  ...reducer
})

export default rootReducer;