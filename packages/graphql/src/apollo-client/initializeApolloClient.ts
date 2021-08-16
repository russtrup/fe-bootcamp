import type { FieldReadFunction, NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { BatchHttpLink } from '@apollo/client/link/batch-http';
import { offsetLimitPagination } from '@apollo/client/utilities';
import { Launch, TypedTypePolicies } from '../generated/graphql-types';

interface ApolloClientOptions {
    graphqlUri: string;
    initialState: NormalizedCacheObject;
}

// Helper function for looking up assets via cache redirect.
const queryCacheReference = (typename: string): FieldReadFunction => {
    return (existing, { args, toReference }) => {
        return (
            existing ||
            toReference({
                __typename: typename,
                id: args?.id,
            })
        );
    };
};

const initializeApolloClient = ({ graphqlUri, initialState }: ApolloClientOptions) => {
    // Read more about cache configuration here: https://www.apollographql.com/docs/react/caching/cache-configuration
    const typePolicies: TypedTypePolicies = {
        Query: {
            fields: {
                launchesPast: offsetLimitPagination<Launch>(), // How to enable pagination in 1 line
                launch: {
                    read: queryCacheReference('Launch'), //How to redirect cache readsc
                },
            },
        },
    };

    const link = new BatchHttpLink({
        uri: graphqlUri,
        batchMax: 5,
        batchInterval: 20,
    });

    const cache = new InMemoryCache({ typePolicies }).restore(initialState || {});

    return new ApolloClient({
        uri: graphqlUri,
        cache,
        link,
    });
};

export default initializeApolloClient;
