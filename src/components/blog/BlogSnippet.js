/* eslint-disable react/prop-types */
import * as React from "react";

import { Button } from "reactstrap";

const BlogSnippet = (props) => {
  const { blog } = props;

  return (
    <div className="blog-snippet">
      <div
        className="blog-image"
        style={{ backgroundImage: `url(${blog.coverImage.url})` }}
      ></div>
      <div className="blog-content">
        <h4>{blog.title}</h4>
        <p>{blog.excerpt}</p>
        <div className="button-group">
          <Button className="button-filled">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogSnippet;
