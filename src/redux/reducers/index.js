import { combineReducers } from 'redux';
import { productReducer } from './productReducer';


const reducers = combineReducers({
    AllData: productReducer,
});

export default reducers;