import * as React from "react";

import { Spinner } from "reactstrap";

const UtilLoader = () => {
  return (
    <>
      <section className="spinner flex-box-container-center">
        <Spinner className="spinner-border flex-box-center" color="primary" />
      </section>
    </>
  );
};

export default UtilLoader;
