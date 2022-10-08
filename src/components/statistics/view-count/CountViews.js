/* eslint-disable react/prop-types */
import * as React from "react";

import CountView from "./CountView";

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const uri_string = `${process.env.QUERY_BACKEND_ENDPOINT}`;

const httpLink = createHttpLink({
  uri: uri_string,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const CountViews = ({ slug }) => {
  return (
    <>
      <ApolloProvider client={client}>
        <CountView slug={slug} />
      </ApolloProvider>
    </>
  );
};

export default CountViews;
