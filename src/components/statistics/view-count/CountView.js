/* eslint-disable react/prop-types */
import * as React from "react";

import { useQuery, gql } from "@apollo/client";

const SLUG_QUERY = gql`
  query slugBySlug($slug: String!) {
    slugBySlug(slug: $slug) {
      views
    }
  }
`;

const CountView = ({ slug }) => {
  const { data } = useQuery(SLUG_QUERY, {
    variables: { slug },
  });

  if (data != null) {
    return <>{data.slugBySlug[0].views}</>;
  } else {
    return <>0</>;
  }
};

export default CountView;
