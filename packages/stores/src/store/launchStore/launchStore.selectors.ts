import type { IAppState } from '../root-reducer';

export const selectChosenLaunchId = (state: IAppState): string => state.launch.selectedLaunchId;
