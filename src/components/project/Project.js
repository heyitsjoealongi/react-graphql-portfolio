/* eslint-disable react/prop-types */
import * as React from "react";

import { Helmet } from "react-helmet";

import UtilLoader from "../util/UtilLoader";
import UtilNoContent from "../util/UtilNoContent";
import NewsletterLarge from "../newsletter/NewsletterLarge";

import { Container, Row, Col } from "reactstrap";

import { useQuery, gql } from "@apollo/client";

import Markdown from "markdown-to-jsx";

const PROJECT_QUERY = gql`
  query project($slug: String!) {
    project(where: { slug: $slug }) {
      id
      coverImage {
        url
      }
      title
      excerpt
      slug
      content {
        markdown
      }
    }
  }
`;

const Project = ({ slug }) => {
  const { data } = useQuery(PROJECT_QUERY, {
    variables: { slug },
  });

  if (data != null) {
    if (data.length != 0) {
      // Meta Transforms
      let meta_title = "react-graphql-portfolio — " + data.project.title;
      let meta_description =
        "react-graphql-portfolio — " +
        data.project.title +
        ": " +
        data.project.excerpt;
      let meta_image =
        "https://react-graphql-portfolio.vercel.app" +
        "/projects/" +
        data.project.slug +
        ".png";
      let meta_url =
        "https://react-graphql-portfolio.vercel.app/work/" + data.project.slug;

      return (
        <>
          {/* Meta Data */}
          <Helmet>
            <title>{meta_title}</title>
            <meta name="title" content={meta_title} />
            <meta name="description" content={meta_description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={meta_url} />
            <meta property="og:title" content={meta_title} />
            <meta property="og:description" content={meta_description} />
            <meta property="og:image" content={meta_image} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:site" content="@" />
            <meta property="twitter:url" content={meta_url} />
            <meta property="twitter:title" content={meta_title} />
            <meta property="twitter:description" content={meta_description} />
            <meta property="twitter:image" content={meta_image} />
          </Helmet>

          <section className="project-article">
            {/* project Hero */}
            <section className="project-hero">
              <Container fluid="md">
                <Row>
                  <Col md="12">
                    <img
                      src={data.project.coverImage.url}
                      loading="lazy"
                      height="800px"
                      width="auto"
                      alt="react-graphql-portfolio hero project"
                      className="img-fluid img-shadow"
                    ></img>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="project-subhero">
              <Container fluid="md">
                <Row>
                  <Col md="12">
                    <h1 className="project-title">{data.project.title}</h1>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* project Content */}
            <article className="project-content">
              <Container fluid="md">
                <Row>
                  <Col md="12">
                    <div>
                      <Markdown>{data.project.content.markdown}</Markdown>
                    </div>
                  </Col>
                </Row>
              </Container>
            </article>
          </section>

          {/* Newsletter */}
          <NewsletterLarge />
        </>
      );
    } else {
      return <UtilNoContent />;
    }
  } else {
    return <UtilLoader />;
  }
};

export default Project;
