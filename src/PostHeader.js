import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const Post = (props) => {
  const { postHeader } = props;
  return (
    <div className="post-header">
      <img src={postHeader.img} alt="" />
      <div>
        <strong>{postHeader.author}</strong>
        <Moment fromNow locale="pt">
          {postHeader.createdAt}
        </Moment>
      </div>
    </div>
  );
};

Post.propTypes = {
  postHeader: PropTypes.shape({
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
