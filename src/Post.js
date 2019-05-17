import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Post = (props) => {
  const { title } = props;
  return (
    <div className="post">
      <h1>{title}</h1>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
