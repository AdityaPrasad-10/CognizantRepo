import React from 'react';

const BlogDetails = ({ showBlog }) => {
  return (
    <>
      {showBlog && (
        <div>
          <h2>React Learning</h2>
          <h4>Stephen Biz</h4>
          <p>Welcome to learning React!</p>
          <h3>Installation</h3>
          <h5>Schwezdenier</h5>
          <p>You can install React from npm.</p>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
