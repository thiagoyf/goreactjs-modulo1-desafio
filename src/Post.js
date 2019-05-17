import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = (props) => {
  const { post } = props;
  const postHeader = { img: post.img, author: post.author, createdAt: post.createdAt };
  return (
    <div className="post">
      <PostHeader postHeader={postHeader} />
      <hr className="post-separator" />
      <div className="post-body">
        <p>{post.text}</p>
      </div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
