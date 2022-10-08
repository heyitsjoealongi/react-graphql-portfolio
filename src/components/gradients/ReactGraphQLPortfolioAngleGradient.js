import * as React from "react";

import { ReactComponent as ReactGraphQLPortfolioAngleGradient } from "../../assets/img/react-graphql-portfolio-angle-gradient.svg";

const AngleGradient = () => {
  return (
    <>
      <section className="react-graphql-portfolio-angle-gradient">
        <ReactGraphQLPortfolioAngleGradient
          height="100%"
          width="100%"
          loading="lazy"
          alt="react-graphql-portfolio angle gradient"
          className="img-fluid"
        />
      </section>
    </>
  );
};

export default AngleGradient;
