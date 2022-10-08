import * as React from "react";

import { ReactComponent as ReactGraphQLPortfolioAngleSolid } from "../../assets/img/react-graphql-portfolio-angle-solid.svg";

const AngleSolid = () => {
  return (
    <>
      <section className="react-graphql-portfolio-angle-solid">
        <ReactGraphQLPortfolioAngleSolid
          height="100%"
          width="100%"
          loading="lazy"
          alt="react-graphql-portfolio angle solid"
          className="img-fluid"
        />
      </section>
    </>
  );
};

export default AngleSolid;
