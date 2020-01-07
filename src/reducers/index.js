// one main root reducer - calling all the reducers and putting them in a single state object
// store only accepts one reducer

import { combineReducers } from "redux";

import questions from "./questions";
import users from "./users";
import authedUser from "./authedUser";

export default combineReducers({ questions, users, authedUser });
