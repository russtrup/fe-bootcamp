import { combineReducers } from '@reduxjs/toolkit';
import { launchStoreInitialState, launchStoreReducer } from './launchStore';
import { modalStoreInitialState, modalStoreReducer } from './modalStore';

const rootReducer = combineReducers({
    launch: launchStoreReducer,
    modal: modalStoreReducer,
});

export type IAppState = ReturnType<typeof rootReducer>;

export default rootReducer;

export const initialState: IAppState = {
    launch: launchStoreInitialState,
    modal: modalStoreInitialState,
};
