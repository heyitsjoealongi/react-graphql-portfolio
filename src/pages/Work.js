/* eslint-disable react/prop-types */
import * as React from "react";

import { useParams } from "react-router-dom";

import Project from "../components/project/Project";

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

const Work = () => {
  const { slug } = useParams();

  return (
    <>
      <main className="work">
        <ApolloProvider client={client}>
          <Project slug={slug} />
        </ApolloProvider>
      </main>
    </>
  );
};

export default Work;
