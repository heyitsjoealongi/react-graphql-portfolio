import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import UtilLoader from "../util/UtilLoader";
import UtilNoContent from "../util/UtilNoContent";
import ProjectSnippet from "./ProjectSnippet";

import { useQuery, gql } from "@apollo/client";

const PROJECT_QUERY = gql`
  {
    projects {
      id
      coverImage {
        url
      }
      title
      excerpt
      slug
    }
  }
`;

const ProjectList = () => {
  const { data } = useQuery(PROJECT_QUERY);

  if (data != null) {
    if (data.length != 0) {
      return (
        <>
          <section className="project-list">
            <Container fluid="md">
              <Row>
                {data.projects.map((project) => (
                  <Col md="4" key={project.id}>
                    <Link to={project.slug}>
                      <ProjectSnippet project={project} />
                    </Link>
                  </Col>
                ))}
              </Row>
            </Container>
          </section>
        </>
      );
    } else {
      return <UtilNoContent />;
    }
  } else {
    return <UtilLoader />;
  }
};

export default ProjectList;
