/* eslint-disable react/prop-types */
import * as React from "react";

import { Button } from "reactstrap";

const ProjectSnippet = (props) => {
  const { project } = props;

  return (
    <>
      <div className="project-title">
        <h4>{project.title}</h4>
      </div>
      <div
        className="project-snippet"
        style={{ backgroundImage: `url(${project.coverImage.url})` }}
      >
        <div className="project-content">
          <p>{project.excerpt}</p>
          <div className="button-group">
            <Button className="button-filled">See More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSnippet;
