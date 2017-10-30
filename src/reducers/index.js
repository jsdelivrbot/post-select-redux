import { combineReducers } from 'redux';
import PostReducer from './reducer_post';
import ActivePostReducer from './reducer_active_post';

const rootReducer = combineReducers({
  post: PostReducer,
  postActive: ActivePostReducer
});

export default rootReducer;
