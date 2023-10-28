
import React from 'react';
import './NewsStory.css';

const NewsStory = (props) => {
  const { title, text, imageUrl } = props;

  return (
    <div className="news-story">
      <img src={imageUrl} alt={title} className="news-image" />
      <h2 className="news-title">{title}</h2>
      <p className="news-text">{text}</p>
    </div>
  );
};

export default NewsStory;
