import React from 'react';
import PropTypes from 'prop-types';
import LikeButton from './likebutton';
import './postcard.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.profileImage} alt={post.username} className="profile-picture" />
      <h2>{post.username}</h2>
      <p>{post.content}</p>
      <LikeButton isLiked={post.isLiked} />
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    profileImage: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isLiked: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostCard;
