/* eslint-disable react/prop-types */
import * as React from "react";

import { Helmet } from "react-helmet";

import UtilLoader from "../util/UtilLoader";
import UtilNoContent from "../util/UtilNoContent";
import NewsletterLarge from "../newsletter/NewsletterLarge";
import CountViews from "../statistics/view-count/CountViews";

import { Container, Row, Col } from "reactstrap";

import { useQuery, gql } from "@apollo/client";

import Markdown from "markdown-to-jsx";

const BLOG_QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      coverImage {
        url
      }
      title
      excerpt
      slug
      date
      author {
        name
        picture {
          url
        }
      }
      content {
        markdown
      }
    }
  }
`;

const Blog = ({ slug }) => {
  const { data } = useQuery(BLOG_QUERY, {
    variables: { slug },
  });

  if (data != null) {
    if (data.length != 0) {
      // Meta Transforms
      let meta_title = "react-graphql-portfolio — " + data.post.title;
      let meta_description =
        "react-graphql-portfolio — " +
        data.post.title +
        ": " +
        data.post.excerpt;
      let meta_image =
        "https://react-graphql-portfolio.vercel.app" +
        "/articles/" +
        data.post.slug +
        ".png";
      let meta_url =
        "https://react-graphql-portfolio.vercel.app/blog/" + data.post.slug;

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

          <section className="blog-article">
            {/* Blog Hero */}
            <section className="blog-hero">
              <Container fluid="md">
                <Row>
                  <Col md="12">
                    <img
                      src={data.post.coverImage.url}
                      loading="lazy"
                      height="800px"
                      width="auto"
                      alt="react-graphql-portfolio Hero Blog"
                      className="img-fluid img-shadow"
                    ></img>
                  </Col>
                </Row>
              </Container>
            </section>

            <section className="blog-subhero">
              <Container fluid="md">
                <Row>
                  <Col md="12">
                    <h1 className="blog-title">{data.post.title}</h1>
                  </Col>
                  <Col md="12">
                    <div className="blog-author-container flex-box-container-space-between">
                      <div className="flex-box-space-between">
                        <div className="flex-box-container-start">
                          <div className="flex-box-start">
                            <div
                              className="blog-author-image"
                              style={{
                                backgroundImage: `url(${data.post.author.picture.url})`,
                              }}
                            ></div>
                          </div>
                          <div className="flex-box-start">
                            <p className="blog-author">
                              {data.post.author.name}
                            </p>
                            <p className="blog-date">{data.post.date}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-box-space-between visually-hidden">
                        <p className="blog-time-title">Reading Time</p>
                        <p className="blog-time-statistic">6 Minutes</p>
                      </div>
                      <div className="flex-box-space-between visually-hidden">
                        <p className="blog-views-title">Blog Views</p>
                        <p className="blog-views-statistic">
                          <CountViews slug={slug} />
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            {/* Blog Content */}
            <article className="blog-content">
              <Container fluid="md">
                <Row>
                  <Col md="12">
                    <div>
                      <Markdown>{data.post.content.markdown}</Markdown>
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

export default Blog;
