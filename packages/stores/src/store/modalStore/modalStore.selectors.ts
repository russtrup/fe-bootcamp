import type { IAppState } from '../root-reducer';

export const selectIsLaunchModalOpen = (state: IAppState): boolean => state.modal.launchCardModalOpen;
