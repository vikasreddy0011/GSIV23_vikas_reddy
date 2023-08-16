import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RatingStar = ({ rating }) => {
   const maxStars = 5;
  const fullStars = Math.floor(rating);
  const emptyStars = maxStars - fullStars;

  const starArray = Array(maxStars).fill(null).map((_, index) => {
    if (index < fullStars) {
      return <FontAwesomeIcon key={index} icon={faStar} className="star-icon" />;
    } else {
      return <FontAwesomeIcon key={index} icon={faStar} className="star-icon empty" />;
    }
  });

  return <div className="star-rating">{starArray}</div>;
};

export default RatingStar;