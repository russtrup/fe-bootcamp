import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LaunchStore {
    selectedLaunchId: string;
}

export const launchStoreInitialState: LaunchStore = {
    selectedLaunchId: '',
};

const launchStore = createSlice({
    name: 'launch',
    initialState: launchStoreInitialState,
    reducers: {
        setActiveLaunch: (state, action: PayloadAction<string>) => {
            state.selectedLaunchId = action.payload;
        },
        clearActiveLaunch: (state) => {
            state.selectedLaunchId = '';
        },
    },
});

export const launchStoreReducer = launchStore.reducer;
export const launchStoreActions = launchStore.actions;
