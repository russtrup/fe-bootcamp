import { ApolloProvider } from '@apollo/client';
import withApollo from 'next-with-apollo';
import React from 'react';
import { initializeApolloClient } from '../apollo-client';

export default withApollo(
    ({ initialState }) => {
        return initializeApolloClient({
            graphqlUri: 'https://api.spacex.land/graphql',
            initialState,
        });
    },
    {
        render: ({ Page, props }) => {
            return (
                <ApolloProvider client={props.apollo}>
                    <Page {...props} />
                </ApolloProvider>
            );
        },
    }
);
