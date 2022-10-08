import * as React from "react";

import { Container, Row, Col } from "reactstrap";

import { Link } from "react-router-dom";

import UtilLoader from "../util/UtilLoader";
import UtilNoContent from "../util/UtilNoContent";
import BlogSnippet from "./BlogSnippet";

import { useQuery, gql } from "@apollo/client";

const BLOG_QUERY = gql`
  {
    posts {
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

const BlogList = () => {
  const { data } = useQuery(BLOG_QUERY);

  if (data != null) {
    if (data.length != 0) {
      return (
        <>
          <section className="blog-list">
            <Container fluid="md">
              <Row>
                {data.posts.map((blog) => (
                  <Col md="12" key={blog.id}>
                    <Link to={blog.slug}>
                      <BlogSnippet blog={blog} />
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

export default BlogList;
