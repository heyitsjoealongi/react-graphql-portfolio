import * as React from "react";

import { Helmet } from "react-helmet";

import UtilLoader from "../components/util/UtilLoader";
import HeroSmallBrief from "../components/hero/HeroSmallBrief";
import ProjectList from "../components/project/ProjectList";
import NewsletterLarge from "../components/newsletter/NewsletterLarge";

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const uri_string = `${process.env.GRAPHQL_ENDPOINT}`;

const httpsLink = createHttpLink({
  uri: uri_string,
});

const client = new ApolloClient({
  link: httpsLink,
  cache: new InMemoryCache(),
});

function Works() {
  const data = [
    {
      id: "0",
      heading_4: "Lorem ipsum",
      heading_1: "Lorem ipsum",
    },
  ];

  if (data != null) {
    return (
      <>
        {/* Meta Data */}
        <Helmet>
          <title>react-graphql-portfolio — work</title>
          <meta name="title" content="react-graphql-portfolio — work" />
          <meta
            name="description"
            content="Solution use-cases for the internet and beyond."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://react-graphql-portfolio.vercel.app/work"
          />
          <meta property="og:title" content="react-graphql-portfolio — work" />
          <meta
            property="og:description"
            content="Solution use-cases for the internet and beyond."
          />
          <meta
            property="og:image"
            content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@" />
          <meta
            property="twitter:url"
            content="https://react-graphql-portfolio.vercel.app/work"
          />
          <meta
            property="twitter:title"
            content="react-graphql-portfolio — work"
          />
          <meta
            property="twitter:description"
            content="Solution use-cases for the internet and beyond."
          />
          <meta
            property="twitter:image"
            content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
          />
        </Helmet>

        <main className="works">
          {/* Small Hero */}
          {data.map((hero) => (
            <HeroSmallBrief key={hero.id} hero={hero} />
          ))}

          {/* ProjectList */}
          <ApolloProvider client={client}>
            <ProjectList />
          </ApolloProvider>

          {/* Components */}
          <NewsletterLarge />
        </main>
      </>
    );
  } else {
    return <UtilLoader />;
  }
}

export default Works;
