import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Post = (props) => {
  const { title } = props;
  return (
    <div className="header">
      <strong>{title}</strong>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Post;
