import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './pages';
import injectStyles from './styles';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: 'http://localhost:4000'
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
});

// client
//     .query({
//         query: gql `
//             query GetLaunches {
//                 launches(pageSize: 20) {
//                     launches {
//                         id
//                         mission {
//                             name
//                         }
//                     }
                    
//                 }
//             }
//         `
//     })
//     .then(result => console.log(result));

injectStyles()
ReactDOM.render(
    <ApolloProvider client={client}>
        <Pages />
    </ApolloProvider>,
    document.getElementById('root')
);