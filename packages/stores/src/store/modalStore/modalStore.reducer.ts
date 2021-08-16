import { createSlice } from '@reduxjs/toolkit';

interface ModalStore {
    launchCardModalOpen: boolean;
}

export const modalStoreInitialState: ModalStore = {
    launchCardModalOpen: false,
};

const modalStore = createSlice({
    name: 'modal',
    initialState: modalStoreInitialState,
    reducers: {
        openLaunchCardModal: (state) => {
            state = {
                ...modalStoreInitialState,
                launchCardModalOpen: true,
            };
            return state;
        },
        closeLaunchCardModal: (state) => {
            state.launchCardModalOpen = false;
        },
    },
});

export const modalStoreReducer = modalStore.reducer;
export const modalStoreActions = modalStore.actions;
