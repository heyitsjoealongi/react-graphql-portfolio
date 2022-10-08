import * as React from "react";

import { Helmet } from "react-helmet";

import UtilLoader from "../components/util/UtilLoader";
import HeroSmallBrief from "../components/hero/HeroSmallBrief";
import BlogList from "../components/blog/BlogList";
import CardGrid from "../components/card/CardGrid";
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

function Articles() {
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
          <title>react-graphql-portfolio — blog</title>
          <meta name="title" content="react-graphql-portfolio — blog" />
          <meta
            name="description"
            content="Blog articles &amp; publications the newest articles fresh off the press."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://react-graphql-portfolio.vercel.app/blog"
          />
          <meta property="og:title" content="react-graphql-portfolio — blog" />
          <meta
            property="og:description"
            content="Blog articles &amp; publications the newest articles fresh off the press."
          />
          <meta
            property="og:image"
            content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:site" content="@" />
          <meta
            property="twitter:url"
            content="https://react-graphql-portfolio.vercel.app/blog"
          />
          <meta
            property="twitter:title"
            content="react-graphql-portfolio — blog"
          />
          <meta
            property="twitter:description"
            content="Blog articles &amp; publications the newest articles fresh off the press."
          />
          <meta
            property="twitter:image"
            content="https://react-graphql-portfolio.vercel.app/react-graphql-portfolio.png"
          />
        </Helmet>

        <main className="articles">
          {/* Small Hero */}
          {data.map((hero) => (
            <HeroSmallBrief key={hero.id} hero={hero} />
          ))}

          {/* Components */}

          {/* BlogList */}
          <ApolloProvider client={client}>
            <BlogList />
          </ApolloProvider>

          {/* Components */}
          <CardGrid />
          <NewsletterLarge />
        </main>
      </>
    );
  } else {
    return <UtilLoader />;
  }
}

export default Articles;
