import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  postDetailsReducer,
  postListReducer,
} from "./reducers/postReducers.js";

const reducer = combineReducers({
  postList: postListReducer,
  postDetails: postDetailsReducer,
});

const initialState = {
  posts: {},
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
