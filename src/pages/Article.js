/* eslint-disable react/prop-types */
import * as React from "react";

import { useParams } from "react-router-dom";

import Blog from "../components/blog/Blog";

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const uri_string = `${process.env.GRAPHQL_ENDPOINT}`;

const httpLink = createHttpLink({
  uri: uri_string,
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const Article = () => {
  const { slug } = useParams();

  return (
    <main className="article">
      <ApolloProvider client={client}>
        <Blog slug={slug} />
      </ApolloProvider>
    </main>
  );
};

export default Article;
