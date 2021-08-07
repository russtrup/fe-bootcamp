import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

interface ApolloClientOptions {
    graphqlUri: string;
    initialState: NormalizedCacheObject;
}

const initializeApolloClient = ({ graphqlUri, initialState }: ApolloClientOptions) => {
    const cache = new InMemoryCache({}).restore(initialState || {});

    return new ApolloClient({
        uri: graphqlUri,
        cache,
    });
};

export default initializeApolloClient;
