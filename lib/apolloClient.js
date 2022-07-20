import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

export const apolloClient = new ApolloClient({
    uri: "https://provitreff.bachstein.ch/backend/api",
    cache: new InMemoryCache()
});