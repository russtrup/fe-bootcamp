import type { DeepPartial, EnhancedStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { merge } from 'lodash-es';
import { useMemo } from 'react';
import type { IAppState } from '../store/root-reducer';
import rootReducer, { initialState } from '../store/root-reducer';

interface ReduxClientOptions {
    preloadedState: DeepPartial<IAppState>;
}

const configureAppStore = (options?: ReduxClientOptions): EnhancedStore => {
    const { preloadedState = {} } = options || {};

    return configureStore({
        reducer: rootReducer,
        preloadedState: merge(initialState, preloadedState),
    });
};

const useRedux = (options?: ReduxClientOptions) => {
    const reduxClient = useMemo(() => configureAppStore(options), [options]);
    return reduxClient;
};

export default useRedux;
