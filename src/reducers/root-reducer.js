/**
 * Root Reducer of the application
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import notesReducer from './notes-reducer';

const createRootReducer = (history) => combineReducers({
    notesData: notesReducer,
    router: connectRouter(history),
});

export default createRootReducer;