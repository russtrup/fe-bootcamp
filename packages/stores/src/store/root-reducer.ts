import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    // reducers go here
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;

export const initialState: IAppState = {};
