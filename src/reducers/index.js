import { combineReducers } from 'redux';
import signUpReducer from './signup.reducer';
import loginReducer from './login.reducer';
import articlesReducer from './articles.reducer';

const rootReducer = combineReducers({
    signUpReducer,
    loginReducer,
    articlesReducer,
});

export default rootReducer;
