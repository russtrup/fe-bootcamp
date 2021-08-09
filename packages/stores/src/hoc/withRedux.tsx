import React from 'react';
import { Provider } from 'react-redux';
import { useRedux } from '../redux-client';

// Exercise for the reader: make this make sense :)
export type HocWrapper<TExtraProps extends Record<string, unknown> = Record<string, unknown>> = <
    TOwnProps extends Record<string, unknown>
>(
    BaseComponent: React.ComponentType<TOwnProps & TExtraProps>
) => React.NamedExoticComponent<TOwnProps>;

const WithReduxProvider: HocWrapper = (BaseComponent) =>
    React.memo((ownProps) => {
        const store = useRedux();
        return (
            <Provider store={store}>
                <BaseComponent {...ownProps} />
            </Provider>
        );
    });

export default WithReduxProvider;
