import { combineReducers } from 'redux';
import scheduleReducer from './slice/scheduleReducer';

const rootReducer = combineReducers({
    schedule: scheduleReducer
})

export default rootReducer;

